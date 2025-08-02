// Declare a generic array of numbers
let genericVar: Array<number>;
genericVar = [10, 20, 30];
console.log("Generic variable (Array<number>):", genericVar);

// Generic identity function
function identity<T>(value: T): T {
    return value;
}

console.log("Identity with Numbers:", identity<number>(42));
console.log("Identity with String:", identity<string>("hello generics"));

// Merge two objects using generics
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const mergedObj = merge({ name: "Alice" }, { age: 25 });
console.log("Merged Object:", mergedObj);

// Interface with length property
interface HasLength {
    length: number;
}

// Function that logs the length of an item
function logLength<T extends HasLength>(item: T): void {
    console.log("Length is:", item.length);
}

logLength("hello");
logLength([1, 2, 3, 4]);

// Generic class Box
class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    public getContent(): T {
        return this.content;
    }
}

let numberBox = new Box<number>(123);
let stringBox = new Box<string>("generic Box");

console.log("Number Box content:", numberBox.getContent());
console.log("String Box content:", stringBox.getContent());