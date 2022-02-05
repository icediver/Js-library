const $ = function(selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function(selector) {
  if (!selector) {
    return this; //{} empty object
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;