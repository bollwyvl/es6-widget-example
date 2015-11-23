"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(["exports", "underscore", "nbextensions/widgets/widgets/js/widget", "nbextensions/widgets/widgets/js/manager"], function (exports, _underscore, _widget, _manager) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ES6ExampleModel = undefined;

  var _underscore2 = _interopRequireDefault(_underscore);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ES6ExampleModel = exports.ES6ExampleModel = (function (_WidgetModel) {
    _inherits(ES6ExampleModel, _WidgetModel);

    function ES6ExampleModel() {
      _classCallCheck(this, ES6ExampleModel);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ES6ExampleModel).apply(this, arguments));
    }

    return ES6ExampleModel;
  })(_widget.WidgetModel);

  ES6ExampleModel.serializers = _underscore2.default.extend({
    foo: {
      deserialize: _widget.unpack_models
    }
  }, _widget.WidgetModel.serializers);

  _manager.WidgetManager.register_widget_model("ES6ExampleModel", ES6ExampleModel);
});
//# sourceMappingURL=ES6ExampleModel.js.map