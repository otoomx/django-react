from django.conf.urls import url, include
from rest_framework import routers
from portfolio import views
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()
router.register(r'portfolio', views.PortfolioViewSet)
router.register(r'position', views.PositionViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] 