from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication


class SessionAuthNoCSRF(SessionAuthentication):

    def enforce_csrf(self, request):
        pass
