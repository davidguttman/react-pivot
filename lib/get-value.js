export default function getValue (dimension, row) {
  if (dimension == null) return null
  let val
  if (typeof dimension.value === 'string') {
    val = row[dimension.value]
  } else {
    val = dimension.value(row)
  }
  return val
}
