const currency = (number: number) => {
  return new Intl.NumberFormat('id-ID', { currency: 'IDR' }).format(
    number
  )
}

export {
  currency
}