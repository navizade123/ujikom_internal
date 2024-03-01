export default class Project {
  id = "";
  type = "";
  name = "";
  description = "";
  currency = "";
  price = "";
  img_link = "";

  constructor(initilizer) {
    this.id = initilizer.id
    this.type = initilizer.type
    this.name = initilizer.name
    this.description = initilizer.description
    this.currency = initilizer.currency
    this.price = initilizer.price
    this.img_link = initilizer.img_link
  }
}
