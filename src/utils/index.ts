export const parseToBrl = (amount: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Menu[]) => {
  return items.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.preco)
  }, 0)
}
