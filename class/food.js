const { Item } = require("./item");

class Food extends Item {
  constructor(name, description, room) {
    super(name, description, room);
    this.isFood = true;
  }
}

module.exports = {
  Food,
};
