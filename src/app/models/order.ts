export class Order {
  cus_name: string
  cus_address: string
  cus_card_number: string
  cart_total: string | number

  constructor(){
    this.cus_name = ''
    this.cus_address = ''
    this.cus_card_number = ''
    this.cart_total = 1
  }
}
