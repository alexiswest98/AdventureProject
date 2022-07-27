const {Food} = require('./food')
const {Room} = require('./room')

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
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        let item = this.room.getItemByName(itemName)
        this.items.push(item)
    }

    dropItem(itemName) {
        let item = this.getItemByName(itemName)
        this.currentRoom.items.push(item)
    }

    eatItem(itemName) {
        if(itemName instanceof Food) {
            let item = this.Player.items.indexOf(itemName)
            this.items.splice(item, 1)
        }

    }

    getItemByName(name) {
        return this.items.indexOf(name)
    }
}

module.exports = {
  Player,
};
