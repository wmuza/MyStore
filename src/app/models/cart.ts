export class Cart {
  id: number
  name: string
  price: number
  url: string
  description: string
  quantity?: number
  total?: number

  constructor(){
    this.id = 1
    this.name = ''
    this.price = 1
    this.url = ''
    this.description = ''
    this.quantity = 1
    this.total = 1
  }
}
