  
  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */
 const nums = [0,1,2,3,4];

 let sum = nums.reduce((acc, curr) => {
   console.log("Accumulator:", acc,
                "Current value:", curr,
                "Total::",acc + curr);
              return acc + curr;},);
  console.log(sum);

  let shortsum = nums.reduce((acc, curr) => acc + curr);
  console.log(shortsum);

// Summing an array of numbers:


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];
let sumyrsExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience,0); // 0 is the initial value of the accumulator
console.log(sumyrsExperience);

// Totaling a specific object property


// Grouping by a property, and totaling it too */
//{Developer:12, Designer:4}
/* So at this point in the function, the accumulator  is an empty object and curr is the first team  
member in the array. So, if I want to create a  property in my object for Developer, I need to get  
curr.profession. */
let experienceByProffesion = teamMembers.reduce((acc, curr) => {
let key = curr.profession; //create a property for the object
if (!acc[key]){  //check if the key already exists in the object
  acc[key] = curr.yrsExperience; /*If it doesn’t yet exist, I’ll set it equal to curr.yrsExperience.
   This means the first time  we see a new profession, that property will  
  be added into the accumulator and its value  will be set to the team member’s experience.  */
} else {
  acc[key] += curr.yrsExperience; //Otherwise, if the key does already exist, it’s as  simple as adding the current member’s experience  
}
return acc;
}, {});
console.log(experienceByProffesion);
