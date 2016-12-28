from django.shortcuts import render
from rest_framework import viewsets
from .models import Shelter
from .serializers import ShelterSerializer


def index(request):
    return render(request, 'index.html')

# Create your views here.
class SheltersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Shelter.objects.all().order_by('zipcode')
    serializer_class = ShelterSerializer
