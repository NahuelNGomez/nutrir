"""
Django settings for django_nutrir project.

Generated by 'django-admin startproject' using Django 4.1.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

import os
import environ
from pathlib import Path
from datetime import timedelta


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Build paths inside the project like this: BASE_DIR / 'subdir'.
from rest_framework.reverse import reverse_lazy

BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env()
environ.Env.read_env()


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-e1d33gk$m@w#!ka^xy5q$2h8@+y&gb8z#uo$5%*^a!y!_tpqps'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
	'django_nutrir',
	'user',
	'django.contrib.staticfiles',
	'django.contrib.contenttypes',
	'django.contrib.auth',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.sites',
	'django_nvd3',
	"admin_interface",
	'django.contrib.admin',
	"colorfield",
	'dal',
	'dal_select2',
	'provincia',
	'departamento',
	'gobierno_local',
	'localidad',
	'genero',
	'organizacion',
	'tipo_organizacion',
	'servicio_comedor',
	'cantidad_trabajadores_comedor',
	'responsable_organizacion',
	'asistentes_diarios_comedor',
	'actividad_complementaria_comedor',
	'fuente_agua_comedor',
	'tipo_energia_comedor',
	'comedor',
	'alimento',
	'comida',
	'encuesta',
	'reporte',
	'rest_framework.authtoken',
	'rest_framework',
	'dj_rest_auth',
	'dj_rest_auth.registration',
	'allauth',
	'allauth.account',
	"corsheaders", #CORS
]

X_FRAME_OPTIONS = "SAMEORIGIN"
SILENCED_SYSTEM_CHECKS = ["security.W019"]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', #Para cors
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    #'admin_reorder.middleware.ModelAdminReorder',
]


ROOT_URLCONF = 'django_nutrir.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'django_nutrir.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': env('DATABASE_NAME'),
        'USER': env('DATABASE_USER'),
        'PASSWORD': env('DATABASE_PASS'),
        'HOST': 'localhost',
        'PORT': env('DATABASE_PORT')
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


AUTH_USER_MODEL = 'user.UsuarioPersonalizado'

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

# DJ REST AUTH
SITE_ID = 1
REST_USE_JWT = True
JWT_AUTH_COOKIE = 'my-app-auth'
JWT_AUTH_REFRESH_COOKIE = 'my-refresh-token'
ACCOUNT_LOGOUT_ON_GET = True

# Timeout para token y refresh token
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=15),
    'REFRESH_TOKEN_LIFETIME': timedelta(hours=24),
}

# CORSHEADERS
CORS_ALLOW_CREDENTIALS = True

ALLOWED_HOSTS = ['*']

CORS_ALLOW_ALL_ORIGINS = True

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'dj_rest_auth.jwt_auth.JWTCookieAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        #'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly',
        'rest_framework.permissions.IsAuthenticated', # permiso para que no se puede ver sin estar iniciado sesion
    ],

}

LANGUAGE_CODE = 'es-es'

TIME_ZONE = 'America/Argentina/Buenos_Aires'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')


# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')
MEDIA_URL = '/media/'


REST_AUTH_SERIALIZERS = {
    'LOGIN_SERIALIZER': 'user.serializers.CustomLoginSerializer',
    'USER_DETAILS_SERIALIZER': 'user.serializers.UserDetailsSerializer'
}


#ADMIN_REORDER = [
#    {'app': 'encuesta', 'label': 'Encuestas'},
#    {'app': 'comedor', 'label': 'Comedores'},
#    {'app': 'comida', 'Comidas y Alimentos': 'Comedores', 'models': ('comida.Comida', 'alimento.Alimento')},
#    {'app': 'organizacion', 'label': 'Organizaciones'},
#    {'app': 'provincia', 'label': 'Datos Geográficos', 'models': ('provincia.Provincia', 'departamento.Departamento', 'gobierno_local.GobiernoLocal', 'localidad.Localidad')},
#    {'app': 'genero', 'label': 'Datos Generales', 'models': ('genero.Genero', 'tipo_organizacion.TipoOrganizacion', 'servicio_comedor.ServicioComedor', 'cantidad_trabajadores_comedor.CantidadTrabajadoresComedor',
#    'asistentes_diarios_comedor.AsistentesDiariosComedor', 'actividad_complementaria_comedor.ActividadComplementariaComedor', 'fuente_agua_comedor.FuenteAguaComedor', 'tipo_energia_comedor.TipoEnergiaComedor')},
#    {'app': 'auth', 'label': 'Usuario', 'models': ('auth.Group', 'auth.Permission', 'user.UsuarioPersonalizado', 'account.EmailAddress', 'authtoken.TokenProxy')},

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = env('EMAIL_HOST')
EMAIL_PORT = env('EMAIL_PORT')
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
