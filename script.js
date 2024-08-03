/*Pseudocode:
1. create empty html and js files
2. add description to ReadMe file
3. create user input prompt for two flavors and console log the input
4. split the users input into an array of strings
5. create a function to loop through the array and get a count of each flavor in the array

*/

//prompt user for yogurt flavors and write to the console
const userInput = prompt(
    "Please enter the flavors of each frozen yogurt sold today, separated by a comma:"
  );
  console.log(userInput);

//take user input and create a string array of the input values
  const stringArray = userInput.split(",");
  console.log(stringArray);

//function to loop through and get a count of each flavor sold that day
/*function countFlavors(stringArray) {
    let flavorCount = {};
    for(let i = 0; i < stringArray.length; i++) {
        if(!flavorCount[stringArray[i]]) {
            flavorCount[stringArray[i]] = 1;
        } else {
            flavorCount[stringArray[i]] += 1;
        }
    }
    return flavorCount;
}
    console.log(flavorCount);*/

const flavorCounts = {};
stringArray.forEach((i) => {
    flavorCounts[i] = (flavorCounts[i] || 0) + 1;
});
console.log(flavorCounts);
