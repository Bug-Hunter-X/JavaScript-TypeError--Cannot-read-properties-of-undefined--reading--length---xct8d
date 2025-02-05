function foo(x) {
  if (x == null) {
    return 0; // Handle null and undefined
  }
  return x.length;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo({})); // Uncaught TypeError: Cannot read properties of undefined (reading 'length')