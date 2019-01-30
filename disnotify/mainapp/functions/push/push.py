import requests
import json
from disnotify.settings import SIG_PUSH_APP, SIG_PUSH_REST

APP_ID = SIG_PUSH_APP
TEMPLATE_ID = "3437d893-c9de-41d5-abc7-49f6b11f5fc8"
REST = SIG_PUSH_REST


def send_message(headings, message, player_id,  url="https://disassister.centralus.cloudapp.azure.com/"):
    header = {"Content-Type": "application/json; charset=utf-8",
              "Authorization": "Basic " + SIG_PUSH_REST}

    payload = {"app_id": APP_ID,
               "template_id": TEMPLATE_ID,
               # "include_player_ids": player_id,
               "included_segments": ["All"],
               "headings": {"en": headings},
               "contents": {"en": message},
               'url': "https://disassister.centralus.cloudapp.azure.com/",
               }

    req = requests.post("https://onesignal.com/api/v1/notifications", headers=header, data=json.dumps(payload))
    if req.status_code == 200:
        return 1
    return 0
