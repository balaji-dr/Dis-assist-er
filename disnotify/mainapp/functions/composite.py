import requests
from mainapp.models import People, Issue, Suggestion
from math import sin, cos, sqrt, atan2, radians
from mainapp.functions.push import push


def fetch_and_store_all_details():
    r = requests.get("https://dis-assist-er.centralus.cloudapp.azure.com/surviva/getUsers")
    data = r.json()
    for each_user in data.get("details"):
        p, created = People.objects.get_or_create(name=each_user["name"], email=each_user["email"], user_id=each_user["_id"])
        p.save()

    r = requests.get("https://dis-assist-er.centralus.cloudapp.azure.com/surviva/getHelpForMaps")
    data = r.json()
    Issue.objects.all().delete()
    for each_post in data.get("details"):
        i, created = Issue.objects.get_or_create(description=each_post["probDesc"],
                                                emotion=each_post["emotion"],
                                                user=People.objects.filter(email=each_post["email"]).first(),
                                                category=each_post["probType"],
                                                helpmode=each_post["helpMode"],
                                                visible=each_post["visible"],
                                                location=each_post["location"],
                                                contact=each_post["contact"],
                                                email=each_post["email"],
                                                latitude=each_post["coordinates"].get("latitude"),
                                                longitude=each_post["coordinates"].get("longitude"),
                                                created_at=each_post["createdAt"],
                                                updated_at=each_post["updatedAt"],
                                                issue_id=each_post["_id"]
                                                )
        i.save()


def find_distance(lat1, long1, lat2, long2):
    R = 6373.0

    lat1 = radians(lat1)
    lon1 = radians(long1)
    lat2 = radians(lat2)
    lon2 = radians(long2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    return distance


def extract_user_obj(user: People):
    temp = dict()
    temp["name"] = user.name
    temp["email"] = user.email
    temp["_id"] = user.user_id
    return temp


def extract_issue_obj(issue: Issue):
    temp = dict()
    temp["visible"] = issue.visible
    temp["description"] = issue.description
    temp["helpmode"] = issue.helpmode
    temp["category"] = issue.category
    temp["email"] = issue.email
    temp["contact"] = issue.contact
    temp["emotion"] = issue.emotion
    temp["latitude"] = issue.latitude
    temp["longitude"] = issue.longitude
    temp["location"] = issue.location
    temp["issue_id"] = issue.issue_id
    temp["created_at"] = issue.created_at
    temp["updated_at"] = issue.updated_at
    temp["user"] = extract_user_obj(user=issue.user)
    return temp


def match_user(userobj, helpmode: bool):
    user_post = Issue.objects.filter(user=userobj, visible=True, helpmode=helpmode).all()
    issues = [extract_issue_obj(x) for x in user_post]

    for issue in issues:
        req_issue = Issue.objects.filter(visible=True, helpmode=not helpmode,
                                         category=issue.get("category")).exclude(user=userobj).all()

        req_list = [extract_issue_obj(x) for x in req_issue]
        for each in req_list:
            d = find_distance(lat1=issue.get("latitude"), long1=issue.get("longitude"),
                              lat2=each.get("latitude"), long2=each.get("longitude"))
            if d < 20:
                s, created = Suggestion.objects.get_or_create(user1=issue.get("email"), user2=each.get("email"),
                                                              helpmode=helpmode, category=issue.get("category"),
                                                              issue_id=each.get("issue_id"))
                # common_posts = Suggestion.objects.filter(user1=issue.get("email"), user2=each.get("email"),
                #                                          category=issue.get("category")).first()

                if created or s:
                    s.save()
    return True


def send_signal():
    s = Suggestion.objects.all()
    userlist = list()
    for foo in s:
        userlist.append(foo.user1)
        userlist.append(foo.user2)
    users = set(userlist)
    all_sigids = [People.objects.get(email=x).sig_id for x in users]
    send = [x for x in all_sigids if x is not None]
    push.send_message(headings="Check notifications!", message="There is someone near whom you can ask/ provide help.",
                      player_id=send)
    return True
