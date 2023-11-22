from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView
from .models import Categoria, Producto

class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        lista_productos = Producto.objects.all()

        # Convertir los productos al nuevo esquema
        productos_nuevo_esquema = [
            {
                "codigo": producto.id,
                "descripcion": producto.nombre,
                "precio": float(producto.precio)
            }
            for producto in lista_productos
        ]

        lista_categorias = Categoria.objects.all()

        context = {
            'productos': productos_nuevo_esquema,
            'categorias': lista_categorias
        }
        return context

class ProductoView(TemplateView):
    template_name = 'producto.html'

class CategoriaView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        categoria = Categoria.objects.get(pk=self.kwargs['categoria_id'])
        lista_productos = categoria.producto_set.all()
        lista_categorias = Categoria.objects.all()

        context = {
            'productos': lista_productos,
            'categorias': lista_categorias,
            'categoria': categoria
        }

        return context
