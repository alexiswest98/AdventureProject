const { Food } = require("./food");
const { Room } = require("./room");

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let item = this.currentRoom.getItemByName(itemName);
    let indx = this.currentRoom.items.indexOf(item);
    this.currentRoom.items.splice(indx, 1);
    this.items.push(item);
    return item;
  }

  dropItem(itemName) {
    let indx = this.items.indexOf(itemName);
    this.items.splice(indx, 1);
    this.currentRoom.items.push(itemName);
  }

  eatItem(itemName) {
    let item = this.getItemByName(itemName);
    if (item instanceof Food) {
      let indx = this.Player.items.indexOf(item);
      this.items.splice(indx, 1);
    }
  }

  getItemByName(name) {
    return this.currentRoom.getItemByName.call(this, name);
  }
}

module.exports = {
  Player,
};
