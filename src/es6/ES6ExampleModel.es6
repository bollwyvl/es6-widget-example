import _ from "underscore";
import {WidgetModel, unpack_models} from "nbextensions/widgets/widgets/js/widget";
import {WidgetManager} from "nbextensions/widgets/widgets/js/manager";


/**
  A small custom widget model to test some features
 */
export class ES6ExampleModel extends WidgetModel {

}


ES6ExampleModel.serializers = _.extend(
  {
    foo: {
      deserialize: unpack_models
    }
  },
  WidgetModel.serializers
);


WidgetManager.register_widget_model("ES6ExampleModel", ES6ExampleModel);
