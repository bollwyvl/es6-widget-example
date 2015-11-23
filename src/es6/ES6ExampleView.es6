import $ from "jquery";

import {DOMWidgetView} from "nbextensions/widgets/widgets/js/widget";
import {WidgetManager} from "nbextensions/widgets/widgets/js/manager";


/**
 * A map of Bootstrap CSS classes keyed by their semantic name.
 */
let class_map = {
  primary: ["btn-primary"],
  success: ["btn-success"],
  info: ["btn-info"],
  warning: ["btn-warning"],
  danger: ["btn-danger"]
};


/**
 * A widget to test out using ES6 classes with Backbone
  */
export class ES6ExampleView extends DOMWidgetView {
  /**
   * @return {String} the name of the tag to create (not `<div/>`)
   */
  tagName() {
    return "button";
  }

  /**
   * @return {String} the classes to apply to the element
   */
  className() {
    return "ipy-widget widget-button btn btn-default";
  }

  /**
   * Called when view is rendered, but not yet added to DOM.
   */
  render() {
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
  update() {
    let description = this.model.get("description"),
      icon = this.model.get("icon");

    this.$el
      .prop("disabled", this.model.get("disabled"))
      .attr("title", this.model.get("tooltip"));

    if (description.trim().length === 0 && icon.trim().length === 0) {
      this.$el.html("&nbsp;"); // Preserve button height
    } else {
      this.$el.text(description);
      $("<i class=\"fa\"></i>").prependTo(this.$el).addClass(icon);
    }

    super.update();
  }

  /**
   * Set the [Bootstrap `btn-` semantic class](http://getbootstrap.com/css/#buttons-options).
   */
  update_button_style(previous_trait_value) {
    this.update_mapped_classes(class_map, "button_style", previous_trait_value);
  }

  /**
   * @return {object} DOM events and names of handler methods.
   */
  events() {
    return {
      click: "_handle_click"
    };
  }

  /**
   * Handles when the button is clicked.
   */
  _handle_click() {
    console.info("CLICKED", this.model.get("foo").get("value"));
    this.send({event: "click"});
  }
}


WidgetManager.register_widget_view("ES6ExampleView", ES6ExampleView);
