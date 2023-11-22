from django.urls import path

from . import views

app_name = 'tienda'

urlpatterns = [
    path('', views.IndexView.as_view()),
    path('producto',views.ProductoView.as_view()),
    path('categoria/<int:categoria_id>',views.CategoriaView.as_view(),name='categoria')
]