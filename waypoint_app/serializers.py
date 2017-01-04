from rest_framework import serializers
from .models import Shelter, Food, Medical, Crisis, Legal, Transportation


class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelter
        fields = ('url', 'sheltername', 'address', 'zipcode', 'website', 'phone_number', 'additional_contact', 'description_text', 'target_customers')


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('url', 'providername', 'address', 'zipcode', 'website', 'phone_number', 'additional_contact', 'description_text', 'food_meals', 'food_pantry', 'times')


class MedicalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medical
        fields = ('url', 'medicalname', 'address', 'zipcode', 'website', 'phone_number', 'additional_contact', 'description_text', 'general_health', 'mental_health', 'addiction_treatment')


class CrisisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crisis
        fields = ('url', 'crisisname', 'contact_information', 'second_phone')


class LegalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Legal
        fields = ('url', 'legalname', 'address', 'zipcode', 'website', 'phone_number', 'description_text', 'refugee')


class TransportationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transportation
        fields = ('url', 'transportname', 'city', 'website', 'phone_number', 'description_text', 'target_customers')
