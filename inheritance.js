class Parent{
    constructor(){
        this.fathername = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name) {
        super(); //super na dile error asbe, extend korar karone parent er constructor er jnno super
        this.name = name;
    }
    getFullName(){
        return this.name+" "+this.fathername;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());