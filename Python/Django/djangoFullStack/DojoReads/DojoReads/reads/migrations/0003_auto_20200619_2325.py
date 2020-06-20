# Generated by Django 2.2.4 on 2020-06-20 06:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reads', '0002_auto_20200619_2324'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reviews',
            old_name='desc',
            new_name='review',
        ),
        migrations.AlterField(
            model_name='book',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='book', to='reads.Author'),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='book',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review', to='reads.Book'),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review', to='login.User'),
        ),
    ]
