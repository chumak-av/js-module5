const numbers = [];
let sum = 0;
for (let i = 0; i < 20; i++) {
    numbers[i] = Math.round(Math.random() * (2000) - 1000);
};
for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
};
const min = Math.min(...numbers);
const max = Math.max(...numbers);
const average = Math.round(sum / i);
console.log(`max:${max}, min:${min},sum:${sum},average:${average}`);
console.log(numbers);