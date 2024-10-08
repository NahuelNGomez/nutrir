# Generated by Django 4.1.1 on 2022-10-19 14:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('provincia', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Departamento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100, verbose_name='Nombre')),
                ('codigo_UTA', models.CharField(max_length=20, unique=True, verbose_name='Codigo UTA')),
                ('provincia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='provincia.provincia')),
            ],
            options={
                'verbose_name_plural': 'Departamentos',
            },
        ),
    ]
