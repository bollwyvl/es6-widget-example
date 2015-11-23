#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import setup


# should be loaded below
__version__ = None

with open('es6widgetexample/_version.py') as version:
    exec(version.read())

setup(
    name="es6widgetexample",
    version=__version__,
    description="An evolving approach to creating a Jupyter widget with ES6 classes.",
    author="Nicholas Bollweg",
    author_email="nick.bollweg@gmail.com",
    license="BSD-3-Clause",
    url="https://github.com/bollwyvl/es6-widget-example",
    keywords="ipython jupyter widget",
    classifiers=["Development Status :: 4 - Beta",
                 "Framework :: IPython",
                 "Programming Language :: Python",
                 "License :: OSI Approved :: BSD License"],
    packages=["es6widgetexample"],
    include_package_data=True,
)
