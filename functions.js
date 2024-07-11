//Utility file constains functions as required

// First function to show a welcome message taking first name as input.
export function welcomeMessage(firstname)
{
    if(typeof firstname==='string')// Condition to check if user enter correct first name
    {
    console.log(`Hello ${firstname}, you are in best javascript learning series.`)
    }
    else{
        console.log(`The ${firstname} you entered is not valid,please enter a valid firstname.`)// Error message
    }
}

//Second function to convert kilometers in meters taking double as inout
export function distanceConverter(kilometers)
{   
    let result;
    if(typeof kilometers==='number'&& !Number.isInteger(kilometers))// to check if user enter a double value
    {
    result= kilometers*1000
    return result
    }
    else{
        return`You must enter a double value.`//error message
    }
    
}

//Third function to take any number of parameters and return square of all the parameters
export function square(...num)
{   
    let squareArray=[]
    let mybool=true
    //Iterate through all the parameters to make sure all of these are numbers
    for(let n of num)
        {
           if(typeof n !=='number')
           {
            mybool= false
            break
           }
           
        }
    if(mybool==true)//If all of these are numbers, push square of numbers in new array
    {
        for(let n of num)
        {
            squareArray.push( n*n)
            
        }
        return squareArray
    }
    else{
       return `Please enter a valid number`//Error message
    }
    
}
//Function to return cube of a message 
export function cube(num)
{   
    if(typeof num=='number')// check if input is number
    {
    return Math.pow(num,3)
    }
    else{
        return `Please enter a valid number`// error message
    }
}
//advanced function takes a function and a number as parameter
export function advancedFunction (mathOperation, value)
{
    return mathOperation(value)
}