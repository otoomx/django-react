# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='position',
            name='portfolio',
            field=models.ForeignKey(related_name='positions', to='portfolio.Portfolio'),
            preserve_default=True,
        ),
    ]
