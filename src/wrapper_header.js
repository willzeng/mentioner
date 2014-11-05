(function() {
  (function(factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery', 'caret'], factory);
    } else {
      return factory(window.jQuery);
    }
  })(function($, caret) {
