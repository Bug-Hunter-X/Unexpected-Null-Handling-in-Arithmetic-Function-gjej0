function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed in this operation.');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // throws error
console.log(foo(1, null)); // throws error
console.log(foo(null, null)); // throws error