
function sum(numbers){
    let result=0;// function which will calculate sum of numbers within an array
    for (let i=0; i<numbers.length;i++){
        result+=numbers[i];
    }
    return result;
}
function findMin(numbers){// function s which will return minimum value within an array
    let min=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]<min){
            min=numbers[i];
        }
    }
    return min;

}
let solutions=sum([1,2,4]);
console.log(solutions);
let mini=findMin([1,2,3,4,0]);
console.log(mini);

//functions which will displays numbers which are in arrays which are in exercises
function displayNumbers(row){
    let min=row[0];
    for(let i=1;i<row.length;i++){
        if(row[i]<min){
            min=row[i];

        }
    }
    return min;
}
function sumNumbers(nums){
    sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=displayNumbers(nums[i]);
    }
    return sum;

}
let arrays=[[1,2,3,4],[0,1,2,3],[0,0,2,3]

];
let result=sumNumbers(arrays);
console.log(result);