# Generated by Django 4.1.1 on 2023-02-15 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actividad_complementaria_comedor', '0001_initial'),
        ('comedor', '0008_alter_comedor_actividades'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comedor',
            name='actividades',
            field=models.ManyToManyField(blank=True, to='actividad_complementaria_comedor.actividadcomplementariacomedor'),
        ),
    ]
