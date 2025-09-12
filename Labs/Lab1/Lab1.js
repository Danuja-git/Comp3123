//q1

let sentencee = "the quick brown fox";
let word = sentencee.split(" ");
let capsen = word.map(function(word) {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
});
console.log(capsen.join(" ")); 

//q2

function findMax(a,b,c){
    return Math.max(a,b,c);
}
console.log(findMax(1,0,1));
console.log(findMax(0,-10,-20));
console.log(findMax(1000,510,440));

//q3

function right(str) {
  if (str.length <= 3) {
    return str;
  }
  let last = str.slice(-3);    
  let rest = str.slice(0, -3); 
  return last + rest;
}

console.log(right("Python"));     
console.log(right("JavaScript")); 
console.log(right("Hi"));         

//q4

function angle_Type(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else {
    return "Not a valid angle";
  }
}

console.log(angle_Type(47));   
console.log(angle_Type(90));   
console.log(angle_Type(145)); 
console.log(angle_Type(180));  

//q5

function array_max_sum(arr, k) {
  let maxSum = 0;
  
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3)); 
console.log(array_max_sum([9, 3, 5, 1, 7], 2)); 
