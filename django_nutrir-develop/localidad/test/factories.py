import factory
from provincia.test.factories import ProvinciaFactory
from departamento.test.factories import DepartamentoFactory
from localidad.models import Localidad


class LocalidadFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = Localidad

    nombre = factory.Faker('city_suffix')
    codigo_UTA = factory.Faker('random_number',digits=15)
    departamento =factory.SubFactory(DepartamentoFactory)
    provincia = factory.SubFactory(ProvinciaFactory)
