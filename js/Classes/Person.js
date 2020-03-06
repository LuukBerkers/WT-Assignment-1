var Person = class {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    toString(){
        return this.name.toString() + this.age.toString();
    }
}