# Generated by Django 2.2 on 2020-06-15 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='permission_level',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='villain',
            name='permission_level',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
