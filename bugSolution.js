function foo(x) {
  if (x == null || !x.hasOwnProperty('length')) {
    return 0; // Handle null, undefined, and objects without length
  }
  return x.length;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo({})); // 0
console.log(foo({length: 5})); //5