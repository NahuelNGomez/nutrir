# Generated by Django 4.1.1 on 2023-04-11 17:13

from django.db import migrations
from django.core.management import call_command

fixture = 'export_grupos'

def crear_registros(apps, schema_editor):

	# call_command('loaddata', fixture, app_label='user')
	print("pasa")

class Migration(migrations.Migration):

	dependencies = [
		('user', '0003_auto_20230203_1419'),
	]

	operations = [
		migrations.RunPython(crear_registros)
	]
