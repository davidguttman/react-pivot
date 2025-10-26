const slice = Array.prototype.slice

export default function (fn) {
  const partialArgs = slice.call(arguments, 1)
  return function() {
    return fn.apply(this, partialArgs.concat(slice.call(arguments)))
  }
}
