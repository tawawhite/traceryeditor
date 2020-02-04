export var underscoreTemplate = function () {
  if (!window._) return false

  return {
    compile: function (template) {
      return function (context) {
        return window._.template(template)(context)
      }
    }
  }
}