function pow(x, n) {
  if (n == 1) {
    return x;

  } else if (n < 0) {

    return 1 / pow(x, - n);
  } else {

    return x * pow(x, n - 1);
  }
}

function cur(a) {
  return function(x) {
    return function(n) {
      return a(x, n);
    };
  };
}

let curPow = cur(pow);

console.log(curPow(3)(3));
