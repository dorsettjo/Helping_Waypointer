from rest_framework import serializers
from .models import Shelter, Food, Medical, Crisis, Legal, Transportation


class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelter
        fields = ('url', 'sheltername', 'address', 'zipcode', 'latitude', 'longitude', 'website', 'phone_number', 'additional_contact', 'description_text', 'target_customers', 'confirmed')


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('url', 'providername', 'address', 'zipcode', 'latitude', 'longitude', 'website', 'phone_number', 'additional_contact', 'description_text', 'food_meals', 'food_pantry', 'times', 'confirmed')


class MedicalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medical
        fields = ('url', 'medicalname', 'address', 'zipcode', 'latitude', 'longitude', 'website', 'phone_number', 'additional_contact', 'description_text', 'general_health', 'mental_health', 'addiction_treatment', 'confirmed')


class CrisisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crisis
        fields = ('url', 'crisisname', 'contact_information', 'second_phone', 'description_text', 'confirmed')


class LegalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Legal
        fields = ('url', 'legalname', 'address', 'zipcode', 'latitude', 'longitude', 'website', 'phone_number', 'description_text', 'refugee', 'confirmed')


class TransportationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transportation
        fields = ('url', 'transportname', 'city', 'latitude', 'longitude', 'website', 'phone_number', 'description_text', 'target_customers', 'confirmed')
