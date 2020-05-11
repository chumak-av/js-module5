const stack = [];
stack.unshift(2, 3, 4);
stack.push(5, 6, 7, 8);
const lastNumbers = stack.splice(4, 3);
console.log(lastNumbers);