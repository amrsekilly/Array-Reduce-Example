const numbers = [1, 3, 10, 8];

const reducer = (acc, current) => [...acc, current * 2];

const output = numbers.reduce(reducer, []);
console.log("TCL: output", output);

// output = [2, 6, 20, 16]
