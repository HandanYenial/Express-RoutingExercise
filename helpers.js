//Step1: Write a function to find mean
//Mean: the average of the array
//1. Add up the numbers in the array
//2. Divide the sum to the length of the array.

//const array = [1,2,3,4,5,1,2,3,3,3,3,4,5];

function mean(array){ //function mean which takes an array
    let sum = 0; // we'll initialize it to 0
    for(let num of array){ // if it is an array or string let num of array, if it is an object let num in obj
        sum += num; // we just found the sum
    }
    return sum / array.length; // so we divided the sum with the length of the array
    
}
//console.log(mean(array));

//Step2: Find Median
//Median: Middle element in a sorted array
//1. Sort the array(smallest to largest)
//2. Check the data points of the array if it is even or odd.
//3. If the data points of the array is odd, the median is the middle data point in the list
//If the number of data points is even, the median is the average of the two middle data points
//in the list.

function median(array){
    array = array.sort((a,b) => a-b ) //sort is a built in js method takes a callback a.b and we want to return a-b
                                      //so this will sort the array
        if(array.length %2 !==0 ){
            return array[Math.floor(array.length/2)];
        } else {
            let mid1 = array[array.length/2];
            let mid2 = array[array.length/2-1];
            return(mid1+mid2) / 2;
        }
}

//console.log(median(array));

//Step 3: Find Mode
//Mode: The element in the array appears most frequestly.
//1. Find the number of times that each element appear.

function mode(array){
    const arrayObject = {}; //at first I'll create an object so {key:value} key will be the actually number
    //and value will be the frequency of that number
    
    array.forEach(num => {
        if(!arrayObject[num])   // if there isn't anything at this value in my given array object (meaning if there isn't a 1)
        arrayObject[num] = 0;  //if there isn't an arrayObject num, then equal it to 0  (say I'm counting the 1's and there isn't any 1)                                       
        arrayObject[num]++    // if there is an arrayObject[num]then increment it by 1.(I'm counting the 1's and there are 3 ones so, it'll increment by 1 everytime.)
        //return arrayObject;  
    });
    //now I have my object so I'll check which key is the most frequently appear
    let result = []; //first initialize an empty array so we can  push the most frequesnt key here
    let max = 0;     //set initial max value to 0

    for(let key in arrayObject){ // now I'll make a loop in keys
        if(arrayObject[key] > max){ //if the ey of arrayObject is greater than the mex(which is set to 0)
            result = [key]; //result will be an array with the key
            max = arrayObject[key]; //and the max value will be the key of ArrayObject.
        } else if (arrayObject[key] === max){ //
            result.push(key) //just push that key to the result array.
        }

        }// if we have an array like[1,1,2,2] there will not be a mode, same a s[1,2,3,4,5]
        if (Object.keys(arrayObject).length == result.length){
            result=[];
        }
        return result;
}

//console.log(mode(array));


