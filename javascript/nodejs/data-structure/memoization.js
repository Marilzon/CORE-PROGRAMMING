function fibonacci(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

console.log("1: ", fibonacci(7));
