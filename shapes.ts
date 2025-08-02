// shapes.ts

export interface Shape {
  area(): number; // ✅ Method signature, not a property
}

export class Circle implements Shape {
  constructor(private radius: number) {}

  public area(): number {
    return Math.PI * this.radius * this.radius; // ✅ Correct formula
  }
}

export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  public area(): number {
    return this.width * this.height; // ✅ Correct syntax
  }
}