from django.shortcuts import render
from rest_framework import viewsets
from .models import Shelter, Food, Medical, Crisis, Legal, Transportation
from .serializers import ShelterSerializer, FoodSerializer, MedicalSerializer
from .serializers import CrisisSerializer, LegalSerializer
from .serializers import TransportationSerializer


def index(request):
    return render(request, 'index.html')


def foods(request):
    food = Food.objects.all()
    return render(request, 'foods.html', {'food': food})

# Create your views here.
class SheltersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Shelter.objects.all().order_by('zipcode')
    serializer_class = ShelterSerializer


class FoodsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Food.objects.all().order_by('zipcode')
    serializer_class = FoodSerializer

class MedicalsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Medical.objects.all().order_by('zipcode')
    serializer_class = MedicalSerializer

class CrisissViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Crisis.objects.all().order_by('crisisname')
    serializer_class = CrisisSerializer

class LegalsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Legal.objects.all().order_by('zipcode')
    serializer_class = LegalSerializer

class TransportationsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Transportation.objects.all().order_by('city')
    serializer_class = TransportationSerializer
