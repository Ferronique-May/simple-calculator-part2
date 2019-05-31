


describe("Calculator",function(){
    var calculator;

    beforeEach(function(){
        calculator = new Calculator();
    })
    it("should be able to add two numbers", function(){
        var result = calculator.add(0,0);
        expect(result).toBe(0);
        
        var result = calculator.add(4,5);
        expect(result).toBe(9);
    });
   
    it("should be able to add negative integers", function(){
        var result = calculator.add(-1,-1);
        expect(result).toBe(-2);

        var result = calculator.add(-1,2);
        expect(result).toBe(1);
    })

    it("should be able to add multiple numbers", function(){
        var result = calculator.add(1,2,3,4);
        expect(result).toBe(10);
    })
    it("should be able to add float numbers", function(){
        var result = calculator.add(1.3,3.1,4.5,6.4);
        expect(result).toBe(15.3);
    })
    it("should be able to add numbers that are given as strings", function(){
        var result = calculator.add(1,'2',3,'4',5);
        expect(result).toBe(15);
    })

    it("should be able to multiply two numbers", function(){
        var result = calculator.multiply(1,2);
        expect(result).toBe(2);
    })
    it("should be able to multiply multiple numbers",function(){
        var result = calculator.multiply(1,2,3,4);
        expect(result).toBe(24);

        var result = calculator.multiply(1,2,3,5);
        expect(result).toBe(30);
    })
    it("should be able to multiply numbers that are given as strings",function(){
        var result = calculator.multiply(1,'2',3,'5');
        expect(result).toBe(30);
    })
    it("should be able to multiply negative numbers", function(){
        var result = calculator.multiply (-2,-1);
        expect(result).toBe(2);

        var result = calculator.multiply(-3,1);
        expect(result).toBe(-3);
    })
    it("should be able to remember the last result", function(){
        var result =calculator.add(1,2);
        expect(result).toBe(3);
        expect(calculator.last).toBe(3);

        expect(calculator.multiply(1,2,3,4)).toBe(24);
        expect(calculator.last).toBe(24);
        
    })
    it("should be able to use the last result in other calculations", function(){
        expect(calculator.add(1,'2',3,'4')).toBe(10);
        expect(calculator.multiply(calculator.last,'2',3)).toBe(60);
        expect(calculator.add(calculator.last,'2',1)).toBe(63);
    })
    it("should be able to store values in slots and return it", function(){
        expect(calculator.add(1,'2',3,'4')).toBe(10);
        expect(calculator.setSlot(1));
        expect(calculator.getSlot(1)).toBe(10);

        expect(calculator.multiply(1,'2')).toBe(2);
        expect(calculator.setSlot(2));
        expect(calculator.getSlot(2)).toBe(2);
    })
    it("should be able to use values stored in slots in other functions",function(){
        expect(calculator.add(1,'2',3,'4')).toBe(10);
        expect(calculator.setSlot(1));
        expect(calculator.getSlot(1)).toBe(10);

        expect(calculator.multiply(1,'2')).toBe(2);
        expect(calculator.setSlot(2));
        expect(calculator.getSlot(2)).toBe(2);

        expect(calculator.add(calculator.getSlot(1),calculator.getSlot(2),"3",4)).toBe(19);
        expect(calculator.add(calculator.last,calculator.getSlot(1),'1')).toBe(30)
    })
});
