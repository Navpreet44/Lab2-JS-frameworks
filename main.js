//Importing functions.js using import statement 
import * as myModule from "./functions.js"

//calling wellcomeMessage function with a string(firstname)
myModule.welcomeMessage("Gagan");

//calling distanceConverter function with double value and printing it 
const distance=myModule.distanceConverter
console.log(distance(5.5))

//calling square function with 3 parameters and printing it
const square= myModule.square
console.log(square(2,10,5))

//printing advancedFunction with cube function as parameter and 10 as number
console.log(myModule.advancedFunction(myModule.cube,10))