# JavaScript Even and Odd Numbers

# Code
  const evens = [];
const odds = [];

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        evens.push(i);
    } else {
        odds.push(i);
    }
}

console.log('Even numbers:', evens);
console.log('Odd numbers:', evens);

# Output
  Even numbers: [
   2,  4,  6,  8, 10, 12,
  14, 16, 18, 20, 22, 24,
  26, 28, 30
]
Odd numbers: [
   2,  4,  6,  8, 10, 12,
  14, 16, 18, 20, 22, 24,
  26, 28, 30
]
