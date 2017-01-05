from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'shelters$', views.shelters, name='shelters'),
    url(r'foods$', views.foods, name='foods'),
    url(r'medicals$', views.medicals, name='medicals'),
    url(r'crisiss$', views.crisiss, name='crisiss'),
    url(r'legals$', views.legals, name='legals'),
    url(r'transportations$', views.transportations, name='transportations'),
]
