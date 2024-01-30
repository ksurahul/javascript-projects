//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.
// let numArray = function (arr){
//     let min = 0;

//     for(i = 0; i < arr.length; i++){

//         if(arr[i] < arr[i+1]){
//             min = arr[i];
//             console.log(min);
//         }

//     }
//     return min
// }

// assume that nums has atleast one number in the array
// assume that there can be negative numbers
function numArray(nums) {
    let min = nums[0];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num < min) {
            min = num;
        }
    }

    return min;
}

let min = numArray(nums1);
console.log(min);