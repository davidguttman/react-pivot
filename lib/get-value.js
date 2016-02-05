module.exports = function getValue (dimension, row) {
  if (dimension == null) return null
  var val
  if (typeof dimension.value === 'string') {
    val = row[dimension.value]
  } else {
    val = dimension.value(row)
  }
  return val
}
