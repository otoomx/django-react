from django.conf.urls import patterns, include, url
from django.contrib import admin


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_react.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('portfolio.urls')),
)


urlpatterns += patterns(
    'django.contrib.staticfiles.views',
    url(r'^(?:index.html)?$', 'serve', kwargs={'path': 'index.html'}),
    url(r'^(?P<path>(?:js|css|img)/.*)$', 'serve'),
)