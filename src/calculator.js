class Calculator{
    constructor () {
        console.log('calculator has been created');
        this.slot = [];
    }
    add(){
        let sum =0;
        for (let i=0; i<arguments.length; i++){
            sum += parseFloat(arguments[i]);
            this.last = sum;
        }
        return sum;
        }
    multiply(){
        let product= 1;

        for (let i=0; i<arguments.length;i++){
            product*=parseFloat(arguments[i]);
            this.last = product; 
        }
        return product;
    }
    last(){
        return this.last ;
    }
    setSlot(slotNum){
        this.slot.push(this.last);
        return this.slot[slotNum-1];
    }
    getSlot(slotNum){
        return this.slot[slotNum-1];
    }
    
}

let n = new Calculator();

console.log(n.add(1,2));
console.log(n.setSlot(1));
console.log(n.getSlot(1));
console.log(n.multiply(1,2));
console.log(n.last);
console.log(n.getSlot(1));