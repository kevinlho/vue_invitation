import Randomizer from '../utils/Randomizer'

class Inventory{
    constructor() {
        this.listInventory = [];
        this.name = "";
        this.category = "";
        this.quantity = 0;
        this.quantityDesc = "";
        this.storage = "";
    }

    getDummy(){
        this.name = Randomizer.randomStringAlphabet(10)
        this.category = Randomizer.randomStringAlphabet(10)
        this.quantity = 10
        this.quantityDesc = Randomizer.randomStringAlphabet(10)
        this.storage = Randomizer.randomStringAlphabet(10)
        return this
    }

    getListDummy(){
        this.listInventory = [
            this.getDummy(),
            this.getDummy(),
            this.getDummy(),
            this.getDummy(),
            this.getDummy(),
        ]

        return this.listInventory
    }
}
export {
    Inventory
}
