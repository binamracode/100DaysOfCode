# Generated by Django 3.1.2 on 2020-11-01 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paste', '0007_textfile_security'),
    ]

    operations = [
        migrations.AddField(
            model_name='textfile',
            name='title',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
    ]
