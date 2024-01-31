//1. programs in anonymous function and IIFE function ?

//a.print odd numbers in an array

//Anonymous Function:
var odd =function(a){
    var temp=[];
    for(i=0;i<a.length;i++){
        if(a[i]%2!=0){
            temp.push(a[i])
        }
    }
    return temp;
    
}
console.log(odd([1,2,3,4,5,6]))

//IIFE Function:
(function odd1(a){
    var temp=[];
    for(i=0;i<a.length;i++){
        if(a[i]%2!=0){
            temp.push(a[i])
        }
    }
   console.log(temp);
    
})([1,2,3,4,5,6])

//b. Convert all the strings to title caps in a string array?

//Anonymous Function:
var convertToCaps = function(stringArray) {
    return stringArray.map(function(str) {
      return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
    });
  };
console.log(convertToCaps(['hello world', 'javascript is fun', 'title case example']));

//IIFE Function:
(function convertToCaps1(stringArray){console.log(stringArray.map(function(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }))
  
})(['hello world', 'javascript is fun', 'title case example'])

//c. Sum of all numbers in an array

//Anonymous Function:
var sum=function(a){
    var temp=0;
    for(i=0;i<a.length;i++){
        temp+=a[i];
    }
    return temp;

}
console.log(sum([1,2,3,4]))

//IIFE Function:
(function sum1(a){ var temp=0;
    for(i=0;i<a.length;i++){
        temp+=a[i];
    }
    console.log(temp)})([1,2,3,4])

    //d. Return all the prime numbers in an arry

    //Anonymous Function:
    var prime =function(array){
        function isPrime(num) {
            if (num <= 1) {
              return false;
            }
            for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                return false;
              }
            }
            return true;
          }
        
          return array.filter((num) => isPrime(num));
    }
    console.log(prime([2, 3, 5, 7, 8, 11, 13, 17, 19, 23, 29]));

    //IIFE Function:
    (function prime1(array){
        function isPrime(num) {
            if (num <= 1) {
              return false;
            }
            for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                return false;
              }
            }
            return true;
          }
        
          console.log(array.filter((num) => isPrime(num))) ;
    })([2, 3, 5, 7, 8, 11, 13, 17, 19, 23, 29])

//e. Return all the palindrome in an array?

//Anonymous Function:
var palin=function(array){
    function isPalindrome(str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
      }
    
      return array.filter((str) => isPalindrome(str));
}
console.log(palin(['level', 'hello', 'radar', 'world', 'deed', 'javascript']))

//IIFE Function:
(function palin1(array){
    function isPalindrome(str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
      }
    
      console.log(array.filter((str) => isPalindrome(str))) ;

})(['level', 'hello', 'radar', 'world', 'deed', 'javascript'])

//f. Return median of two sorted arrays of the same size?

//Anonymous Function:
var median=function(arr1,arr2){
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      // If the length is even, return the average of the middle elements
      const middle1 = mergedArray[length / 2 - 1];
      const middle2 = mergedArray[length / 2];
      return (middle1 + middle2) / 2;
    } else {
      // If the length is odd, return the middle element
      return mergedArray[Math.floor(length / 2)];
    }

}
console.log(median([1, 3, 5],[2, 4, 6]));

//IIFE Function:
(function median1(arr1,arr2){
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      // If the length is even, return the average of the middle elements
      const middle1 = mergedArray[length / 2 - 1];
      const middle2 = mergedArray[length / 2];
      console.log((middle1 + middle2) / 2) ;
    } else {
      // If the length is odd, return the middle element
      console.log(mergedArray[Math.floor(length / 2)]) ;
    }
})([1, 3, 5],[2, 4, 6])

//g. Remove duplicates from an array?

//Anonymous Function:
var redup=function(array){
  // Create a Set from the array to remove duplicates
  var uniqueSet = new Set(array);
  
  // Convert the Set back to an array
  var uniqueArray = Array.from(uniqueSet);
  
  return uniqueArray;
}
console.log(redup([1, 2, 2, 3, 4, 4, 5]));

//IIFE Function:
(function redup1(array){
      // Create a Set from the array to remove duplicates
  var uniqueSet = new Set(array);
  
  // Convert the Set back to an array
  var uniqueArray = Array.from(uniqueSet);
  
  console.log(uniqueArray) ;

})([1, 2, 2, 3, 4, 4, 5]);

//h. Rotate an array by k times?

//Anonymous Function:
var Rotate =function(array,k){
 // Calculate the effective rotation index
 var rotationIndex = k % array.length;
  
 // Rotate the array using slice and concat
 var rotatedArray = array.slice(rotationIndex).concat(array.slice(0, rotationIndex));
 
 return rotatedArray;
}
console.log(Rotate([1, 2, 3, 4, 5],2));

(function Rotate1(array,k){
     // Calculate the effective rotation index
 var rotationIndex = k % array.length;
  
 // Rotate the array using slice and concat
 var rotatedArray = array.slice(rotationIndex).concat(array.slice(0, rotationIndex));
 
 console.log(rotatedArray) ;

})([1, 2, 3, 4, 5],2)


//2. Programs in arrow functions?

//a. Print odd numbers in an array
var odd2 =(array)=>{
    var temp=[];
    for(i=0;i<array.length;i++){
        if(array[i]%2!=0){
            temp.push(array[i])
        }
    }
    return temp;
}
console.log(odd2([1,2,3,4,5,6,7,8,9,10]))

//b. Convert all the strings to title caps in a string array?
var convertToCaps2=(array)=>{
    return array.map(function(str) {
        return str
          .toLowerCase()
          .split(' ')
          .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' ');
      });
}
console.log(convertToCaps2(['hello world', 'javascript is fun', 'title case example']))

//c. Sum of all numbers in an array?
var sum2=(array)=>{
    var temp=0;
    for(i=0;i<array.length;i++){
        temp+=array[i];
    }
    return temp;
}
console.log(sum2([1,2,3,4]))

//d. Return all the prime numbers in an array?
var prime2=(array)=>{
    function isPrime(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }
    
      return array.filter((num) => isPrime(num));
}
console.log(prime2([1,2,3,4,5,6,7,8,9]))

//e. Return all the palindromes in an array?
var palin2=(array)=>{
    function isPalindrome(str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
      }
    
      return array.filter((str) => isPalindrome(str));
}
console.log(palin2(['level', 'hello', 'radar', 'world', 'deed', 'javascript']))