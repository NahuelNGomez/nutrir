# Generated by Django 4.1.1 on 2023-01-13 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alimento', '0001_initial'),
        ('encuesta', '0003_remove_alimentocomidaencuesta_comida_encuesta_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='comidaencuesta',
            name='alimento',
            field=models.ManyToManyField(to='alimento.alimento'),
        ),
    ]
