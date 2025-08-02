const greetOptional = (name: string, age?: number): void => {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old`);
    } else {
        console.log(`Hello, ${name}! Age is not specified`);
    }
};

// calls
greetOptional("ravi", 30); // Both parameters
greetOptional("kumar");    // Only name