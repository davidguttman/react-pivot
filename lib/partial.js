var slice = Array.prototype.slice

module.exports = function (fn) {
  var partialArgs = slice.call(arguments, 1)
  return function() {
    return fn.apply(this, partialArgs.concat(slice.call(arguments)))
  }
}
