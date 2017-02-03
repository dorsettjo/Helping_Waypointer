from django.db import models


# Create your models here.

class Shelter(models.Model):
    sheltername = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    latitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    longitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    additional_contact = models.CharField(max_length=200, blank=True)
    description_text = models.TextField(blank=True)
    target_customers = models.CharField(max_length=200, blank=True)
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.sheltername


class Food(models.Model):
    providername = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    latitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    longitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    additional_contact = models.CharField(max_length=200, blank=True)
    description_text = models.TextField(blank=True)
    food_meals = models.BooleanField()
    food_pantry = models.BooleanField()
    times = models.CharField(max_length=200, blank=True)
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.providername


class Medical(models.Model):
    medicalname = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    latitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    longitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    additional_contact = models.CharField(max_length=200, blank=True)
    description_text = models.TextField(blank=True)
    general_health = models.BooleanField()
    mental_health = models.BooleanField()
    addiction_treatment = models.BooleanField()
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.medicalname


class Crisis(models.Model):
    crisisname = models.CharField(max_length=200)
    contact_information = models.CharField(max_length=200, blank=True)
    second_phone = models.CharField(max_length=200, blank=True)
    confirmed = models.BooleanField(default=False)
    description_text = models.TextField(blank=True)

    def __str__(self):
        return self.crisisname


class Legal(models.Model):
    legalname = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    latitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    longitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    description_text = models.TextField(blank=True)
    refugee = models.BooleanField()
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.legalname


class Transportation(models.Model):
    transportname = models.CharField(max_length=200)
    city = models.CharField(max_length=200, blank=True)
    latitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    longitude = models.DecimalField(max_digits=30, decimal_places=6, default=0.000000)
    website = models.CharField(max_length=200, blank=True)
    phone_number = models.CharField(max_length=200, blank=True)
    target_customers = models.CharField(max_length=200, blank=True)
    description_text = models.TextField(blank=True)
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.transportname
