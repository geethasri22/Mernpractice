namespace Shapes {
  export interface Shape {
    area(): number;
  }

  export class Circle implements Shape {
    constructor(private radius: number) {}

    public area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  export class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    public area(): number {
      return this.width * this.height;
    }
  }
}

// Create instances using fully qualified names
let circle = new Shapes.Circle(5);
let rectangle = new Shapes.Rectangle(4, 6);

// Output areas
console.log("Circle Area:", circle.area());
console.log("Rectangle Area:", rectangle.area());