function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return "Hello, " + name;
}

function showmessage(message: string): void {
    console.log("message:", message);
}

function multiply(x: number, y?: number): number {
    if (y !== undefined) {
        return x * y;
    } else {
        return x; // fixed: X -> x
    }
}

function divide(x: number, y: number = 1): number {
    return x / y;
}

// Calling functions
let sum = add(10, 20);
console.log("sum:", sum);

let message = greet("SRGEC");
console.log(message);

let result1 = multiply(5); // uses optional parameter
console.log("multiply result:", result1);

let result2 = divide(10); // uses default parameter
console.log("divide result:", result2);
