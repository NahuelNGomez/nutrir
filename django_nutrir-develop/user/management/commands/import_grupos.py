import json
from django.core.management.base import BaseCommand
from django.contrib.auth.models import Group, Permission

class Command(BaseCommand):
    help = "Importa grupos a la base"

    def add_arguments(self, parser):
        parser.add_argument('--path', type=str)
    
    def handle(self, *args, **kwargs):
        path = kwargs['path']
        with open(path, 'rt', encoding='utf-8') as f:
            data = json.load(f)

            for entry in data:
                group_name = entry['fields']['name']
                permission_ids = entry['fields']['permissions']
                group, created = Group.objects.get_or_create(name=group_name)

                if created:
                    self.stdout.write(self.style.SUCCESS(f'Grupo "{group_name}" creado.'))
                else:
                    self.stdout.write(f'Grupo "{group_name}" ya existe.')
                
                # Asigno los permisos al grupo
                permissions = Permission.objects.filter(id__in=permission_ids)
                group.permissions.set(permissions)
                self.stdout.write(f'Permisos asignados a grupo "{group_name}".')