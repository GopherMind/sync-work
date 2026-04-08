export interface Order {
  id: string
  title: string
  price: number
  currency: 'USD'
  clientName: string
  stack: string[]
}
