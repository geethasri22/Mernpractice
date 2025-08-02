const listFruits = (owner: string, ...fruits: string[]): void => {
    console.log(`${owner} has these fruits`);
    
    if (fruits.length === 0) {
        console.log("no fruits listed");
    } else {
        fruits.forEach((fruit, index) => {
            console.log(`${index + 1}. ${fruit}`);
        });
    }
};

// calls
listFruits("Diana", "Apple", "cherry");
listFruits("Evan"); // no fruits passed
