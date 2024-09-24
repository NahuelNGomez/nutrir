# Generated by Django 4.1.1 on 2024-09-09 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alimento', '0005_unidad_alimento_unidades'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alimento',
            name='unidades',
            field=models.ManyToManyField(to='alimento.unidad', verbose_name='Unidades utilizables'),
        ),
    ]
