export interface Order {
  id: string
  title: string
  price: number
  currency: 'KGS' | 'USD'
  clientName: string
  stack: string[]
}
