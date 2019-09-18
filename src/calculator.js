class Calculator {
  constructor() {
    console.log("calculator has been created");
    this.slot = [];
  }

  add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += parseFloat(arguments[i]);
      this.getLast = sum;
    }
    return sum;
  }

  multiply() {
    let product = 1;

    for (let i = 0; i < arguments.length; i++) {
      product *= parseFloat(arguments[i]);
      this.getLast = product;
    }
    return product;
  }

  last() {
    return this.getLast;
  }

  setSlot(slotNum) {
    this.slot.push(this.getLast);
    return this.slot[slotNum - 1];
  }

  getSlot(slotNum) {
    return this.slot[slotNum - 1];
  }
}
