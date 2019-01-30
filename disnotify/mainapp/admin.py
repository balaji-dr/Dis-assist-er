from django.contrib import admin
from mainapp.models import Suggestion, Issue, People
# Register your models here.

admin.site.register(Suggestion)
admin.site.register(Issue)
admin.site.register(People)
