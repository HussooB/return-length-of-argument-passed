/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    
  if (num%3 !== 0){
      console.log(`There is no way to express ${num} as the sum of 3 consecutive integers.`);
      return [];

  }
  let x = num/3;
  let y = x-1;
  let z = x+1;
  return [y,x,z]
      
  
};