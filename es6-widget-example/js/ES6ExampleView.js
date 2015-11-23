"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(["exports", "jquery", "nbextensions/widgets/widgets/js/widget", "nbextensions/widgets/widgets/js/manager"], function (exports, _jquery, _widget, _manager) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ES6ExampleView = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

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

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

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

  var class_map = {
    primary: ["btn-primary"],
    success: ["btn-success"],
    info: ["btn-info"],
    warning: ["btn-warning"],
    danger: ["btn-danger"]
  };

  var ES6ExampleView = exports.ES6ExampleView = (function (_DOMWidgetView) {
    _inherits(ES6ExampleView, _DOMWidgetView);

    function ES6ExampleView() {
      _classCallCheck(this, ES6ExampleView);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ES6ExampleView).apply(this, arguments));
    }

    _createClass(ES6ExampleView, [{
      key: "tagName",

      /**
       * @return {String} the name of the tag to create (not `<div/>`)
       */
      value: function tagName() {
        return "button";
      }

      /**
       * @return {String} the classes to apply to the element
       */

    }, {
      key: "className",
      value: function className() {
        return "ipy-widget widget-button btn btn-default";
      }

      /**
       * Called when view is rendered, but not yet added to DOM.
       */

    }, {
      key: "render",
      value: function render() {
        this.$el.attr("data-toggle", "tooltip");

        this.listenTo(this.model, "change:button_style", this.update_button_style);

        this.update_button_style("");

        // Set defaults.
        this.update();
      }

      /**
       * Update the contents of this view
       *
       * Called when the model is changed. The model may have been
       * changed by another view or by a state update from the back-end.
       *
       */

    }, {
      key: "update",
      value: function update() {
        var description = this.model.get("description"),
            icon = this.model.get("icon");

        this.$el.prop("disabled", this.model.get("disabled")).attr("title", this.model.get("tooltip"));

        if (description.trim().length === 0 && icon.trim().length === 0) {
          this.$el.html("&nbsp;"); // Preserve button height
        } else {
            this.$el.text(description);
            (0, _jquery2.default)("<i class=\"fa\"></i>").prependTo(this.$el).addClass(icon);
          }

        _get(Object.getPrototypeOf(ES6ExampleView.prototype), "update", this).call(this);
      }

      /**
       * Set the [Bootstrap `btn-` semantic class](http://getbootstrap.com/css/#buttons-options).
       */

    }, {
      key: "update_button_style",
      value: function update_button_style(previous_trait_value) {
        this.update_mapped_classes(class_map, "button_style", previous_trait_value);
      }

      /**
       * @return {object} DOM events and names of handler methods.
       */

    }, {
      key: "events",
      value: function events() {
        return {
          click: "_handle_click"
        };
      }

      /**
       * Handles when the button is clicked.
       */

    }, {
      key: "_handle_click",
      value: function _handle_click() {
        console.info("CLICKED", this.model.get("foo").get("value"));
        this.send({ event: "click" });
      }
    }]);

    return ES6ExampleView;
  })(_widget.DOMWidgetView);

  _manager.WidgetManager.register_widget_view("ES6ExampleView", ES6ExampleView);
});
//# sourceMappingURL=ES6ExampleView.js.map