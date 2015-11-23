from ipywidgets.widgets import (
    Button,
    Widget,
    widget_serialization,
)
from traitlets import (
    Unicode,
    Instance,
)


class ES6Example(Button):
    """
    An example widget that highlights issues in implementing Backbone
    classes in ES6.
    """
    _model_name = Unicode('ES6ExampleModel', sync=True)
    _model_module = Unicode(
        'nbextensions/es6-widget-example/js/ES6ExampleModel', sync=True)

    _view_name = Unicode('ES6ExampleView', sync=True)
    _view_module = Unicode(
        'nbextensions/es6-widget-example/js/ES6ExampleView', sync=True)

    foo = Instance(klass=Widget, sync=True,
                   **widget_serialization)
