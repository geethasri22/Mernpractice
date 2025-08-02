class Person {
  public name: string;         
  private age: number;        

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }

  public showAge(): void {
    console.log(`I am ${this.age} years old.`);
  }
}

const person1 = new Person("Sneha", 20);
person1.greet();       
person1.showAge();     

