const greetDefault = (name:string = "Guest"):void => {
    console.log(`Hello,${name}Welcome`);
};
//calls 
greetDefault();
greetDefault("Ravi");