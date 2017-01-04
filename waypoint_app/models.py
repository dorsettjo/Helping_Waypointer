from django.db import models


# Create your models here.

class Shelter(models.Model):
    sheltername = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    additional_contact = models.CharField(max_length=200, blank=True)
    description_text = models.TextField()
    target_customers = models.CharField(max_length=200)

    def __str__(self):
        return self.sheltername


class Food(models.Model):
    providername = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    additional_contact = models.CharField(max_length=200, blank=True)
    description_text = models.TextField()
    food_meals = models.BooleanField()
    food_pantry = models.BooleanField()
    times = models.CharField(max_length=200)

    def __str__(self):
        return self.providername


class Medical(models.Model):
    medicalname = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    additional_contact = models.CharField(max_length=200, blank=True)
    description_text = models.TextField()
    general_health = models.BooleanField()
    mental_health = models.BooleanField()
    addiction_treatment = models.BooleanField()

    def __str__(self):
        return self.medicalname


class Crisis(models.Model):
    crisisname = models.CharField(max_length=200)
    contact_information = models.CharField(max_length=200, blank=True)
    second_phone = models.CharField(max_length=200)

    def __str__(self):
        return self.crisisname


class Legal(models.Model):
    legalname = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    description_text = models.TextField()
    refugee = models.BooleanField()

    def __str__(self):
        return self.legalname


class Transportation(models.Model):
    transportname = models.CharField(max_length=200)
    city = models.CharField(max_length=200, blank=True)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    target_customers = models.CharField(max_length=200)
    description_text = models.TextField()

    def __str__(self):
        return self.transportname
