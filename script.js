/*Pseudocode:
1. create empty html and js files
2. add description to ReadMe file
3. create user input prompt for two flavors and console log the input
4. split the users input into an array of strings
5. loop through the array and get a count of each flavor in the array
    I want the function to loop through the [array] and check each index of the array, 
    I want the function to check if the flavor index matches any of the other indexes,
    if not, count it as 1 else count the flavor as +1 to the existing count.
6. create the table of results
*/

//prompt user for yogurt flavors and write to the console
const userInput = prompt(
  "Please enter the flavors of each frozen yogurt sold today, separated by a comma:","vanilla,choc,mango,vanilla,vanilla,choc,mint,cherry"
  );
  console.log(userInput);

//take user input and create an array of flavors from the input values
const flavorArray = userInput.split(",");
  console.log(flavorArray);

// loop through and get a count of each flavor sold that day
let flavorCount = {};
    
for(let i = 0; i < flavorArray.length; i++) {
    if(flavorCount[flavorArray[i]]) {
        flavorCount[flavorArray[i]] += 1;
    } else {
        flavorCount[flavorArray[i]] = 1;
    }
 }
console.table(flavorCount);

//The above loop returns the expected table with a count of each flavor ordered. 
//The function below is an attempt to wrap the loop in a function, however the function returns a list of each index and the flavor of  that index position.
//This function needs additional work to return the table of flavor counts correctly.

function countFlavors(flavorArray) {
	let flavorCount = {};
	for(let i = 0; i < flavorArray.length; i++) {
    if(flavorCount[flavorArray[i]]) {
        flavorCount[flavorArray[i]] += 1;
    } else {
        flavorCount[flavorArray[i]] = 1;
    }
    console.table(flavorCount);
 }
 return flavorCount;
 }
 
 






 