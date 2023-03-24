// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
function mergeSortTopDown(num){
    if(num.length<=1){
        return num
    }
    const middle=Math.floor(num.length/2)
    const left=num.slice(0,middle)
    const right=num.slice(middle)
    return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right))
}
function mergeTopDown(left,right){
    const num3=[];
    while(left.length && right.length ){
        if (left <=right) {
        num3.push(left.shift())
    }
    else{
        num3.push(right.shift())
    }
    return num3.concat(left.slice()).concat(right.slice())
}

}
function binary(num3,target){
let left=0;
    let right =num3.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (num3[middle] ===target){
            return middle
        }
        else if(num3[middle]< target){
            left=middle + 1;

        }
        else{
            right= middle - 1;
        }
    }
    return null
    }
    let num = [45,12,6,89,2,5]

        let num4=mergeSortTopDown(num)
let target=6;
console.log(binary(num4,target))

// Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56]
let arr1=arr.sort(function(a,b)
{return a-b})
console.log(arr1.reverse())


// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];
function mergeSortTopDown(arr2){
    if(arr2.length<=1){
        return arr2
    }
    const middle=Math.floor(arr2.length/2)
    const left=arr2.slice(0,middle)
    const right=arr2.slice(middle)
    return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right))
}
function mergeTopDown(left,right){
    const arr5=[];
    while(left.length && right.length ){
        if (left <=right) {
        arr5.push(left.shift())
    }
    else{
        arr5.push(right.shift())
    }
    return arr5.concat(left.slice()).concat(right.slice())
}

}
function binary(arr5,target){
let left=0;
    let right =arr5.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (arr5[middle] ===target){
            return middle
        }
        else if(arr5[middle]< target){
            left=middle + 1;

        }
        else{
            right= middle - 1;
        }
    }
    return null
    }
    let arr2 = [1,4,78,2,67,3];
    let array=mergeSortTopDown(arr2)
let target2=34;
console.log(binary(array,target2))