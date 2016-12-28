from django.db import models


# Create your models here.

class Shelter(models.Model):
    sheltername = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    contact_information = models.CharField(max_length=200, blank=True)
    description_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


class Food(models.Model):
    providername = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    contact_information = models.CharField(max_length=200, blank=True)
    description_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


class Medical(models.Model):
    medicalname = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    contact_information = models.CharField(max_length=200, blank=True)
    description_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


class Legal(models.Model):
    legalname = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    contact_information = models.CharField(max_length=200, blank=True)
    description_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


class Other(models.Model):
    othername = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    zipcode = models.IntegerField(default=0)
    contact_information = models.CharField(max_length=200, blank=True)
    description_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


class Crisis(models.Model):
    crisisname = models.CharField(max_length=200)
    zipcode = models.IntegerField(default=0)
    contact_information = models.CharField(max_length=200, blank=True)
    description_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text
