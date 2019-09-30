var plusOne = function(digits) {
  let onesPlace = digits.pop();
  place(onesPlace);
  return digits;

    function place(n){
        if (n < 9){
          n++;
          digits.push(n);
        } else {
          let nextPlace = digits.pop();
          if (nextPlace) {
            place(nextPlace);
          } else {
            digits.push(1);
          }
          digits.push(0);
      }
    }
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(plusOne([9,9,9,9]));
console.log(plusOne([9,9,3,0]));
