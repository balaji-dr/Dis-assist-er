from django.db import models

# Create your models here.


class Suggestion(models.Model):

    user1 = models.CharField(max_length=255)
    user2 = models.CharField(max_length=255)
    helpmode = models.BooleanField(default=True)
    status = models.BooleanField(default=True)
    category = models.CharField(max_length=255)
    issue_id = models.TextField()

    def __str__(self):
        return self.user1


class People(models.Model):
    user_id = models.TextField()
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    sig_id = models.CharField(max_length=255, null=True, default=None)

    def __str__(self):
        return self.email


class Issue(models.Model):

    issue_id = models.TextField()
    description = models.TextField(null=True, default=None)
    category = models.CharField(max_length=255)
    emotion = models.FloatField(default=0.0)
    visible = models.BooleanField(default=True)
    helpmode = models.BooleanField(default=True)
    location = models.TextField()
    contact = models.CharField(max_length=20)
    email = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    created_at = models.TextField()
    updated_at = models.TextField()
    user = models.ForeignKey(
        People,
        related_name="problem",
        on_delete=models.CASCADE,
        null=False
    )

    def __str__(self):
        return self.location
