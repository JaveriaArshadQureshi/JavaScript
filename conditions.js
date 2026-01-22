//condition statements 
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}   
// Output: You are an adult.
let score = 85;
if (score >= 90) {
    console.log("Grade: A");    
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}                                                           
// Output: Grade: B
let day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");         
        break;
    case "Tuesday":
        console.log("Second day of the week.");
        break;
    case "Wednesday":
        console.log("Middle of the week.");
        break;
    case "Thursday":
        console.log("Almost weekend.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    case "Saturday":
        console.log("Weekend starts!");
        break;
    case "Sunday":
        console.log("Rest day.");
        break;
    default:
        console.log("Invalid day");
}