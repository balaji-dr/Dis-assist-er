from rest_framework.views import APIView
from mainapp.base import SessionAuthNoCSRF
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from mainapp.models import People
import requests
from mainapp.functions import composite
from mainapp.models import Suggestion, Issue


class SetSigId(APIView):

    authentication_classes = (SessionAuthNoCSRF, )
    permission_classes = (AllowAny, )

    @staticmethod
    def post(request):
        try:
            data = request.data
            auth_token = data.get("token")
            sig_id = data.get("sig_id")

            r = requests.get("https://disassister.centralus.cloudapp.azure.com/surviva/verifyToken",
                             headers={"x-access-token": auth_token})
            data = r.json()
            print(data)
            email = data["message"].get("email")
            name = data["message"].get("name")
            if People.objects.filter(email=email)[0]:
                obj = People.objects.get(email=email)
                obj.sig_id = sig_id
                obj.save()
            else:
                p = People(name=name, email=email, sig_id=sig_id)
                p.save()
            return Response(data={"status": True}, status=200)
        except Exception:
            return Response(data={"status": False, "message": "code error"}, status=200,
                            content_type="application/json")


class UpdateNotify(APIView):

    permission_classes = (AllowAny,)

    @staticmethod
    def get(request):
        try:
            composite.fetch_and_store_all_details()
            return Response(status=200, data={"status": True, "message": "Update Success"}, content_type="application/json")
        except Exception:
            return Response(data={"status": False, "message": "code error"}, status=200,
                            content_type="application/json")


class Match(APIView):

    authentication_classes = (SessionAuthNoCSRF,)
    permission_classes = (AllowAny,)

    @staticmethod
    def post(request):
        try:
            email = request.data.get("email")
            helpmode = request.data.get("helpmode")
            user = People.objects.filter(email=email).first()
            if user:
                composite.match_user(userobj=user, helpmode=helpmode)
                return Response(data={"status": True, "message": "Users matched Sucessfully!"}, status=200)
            else:
                return Response(data={"status": False, "message": "No users found"}, status=200,
                                content_type="application/json")
        except Exception:
            return Response(data={"status": False, "message": "code error"}, status=200,
                            content_type="application/json")


class SendSig(APIView):

    @staticmethod
    def get(request):
        try:
            composite.send_signal()
            return Response(status=200, data={"status": True}, content_type="application/json")
        except Exception:
            return Response(data={"status": False, "message": "code error"}, status=200,
                            content_type="application/json")


class SuggestScreen(APIView):
    authentication_classes = (SessionAuthNoCSRF,)
    permission_classes = (AllowAny,)

    @staticmethod
    def post(request):
        try:
            email = request.data.get("email")
            all_posts = list()
            suggestions = Suggestion.objects.filter(user1=email).all()
            for foo in suggestions:
                all_posts.append(composite.extract_issue_obj(issue=Issue.objects.get(issue_id=foo.issue_id)))
            return Response(data={
                "details": all_posts,
                "status": True
            }, content_type="application/json")
        except Exception:
            return Response(data={
                "details": [],
                "status": True
            }, content_type="application/json")



