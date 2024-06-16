
const formatterReverseDate = (date: string): string => {
  const withoutSlice = date.split('-')
  const reversed = withoutSlice.reverse()
  const dateJoined = reversed.join('/')

  return dateJoined
}

const postFormatterDate = (date: string): string => {
  const withoutSlice = date.split('/')
  const reversed = withoutSlice.reverse()
  const dateJoined = reversed.join('-')

  return dateJoined
}

export {
  formatterReverseDate,
  postFormatterDate
}