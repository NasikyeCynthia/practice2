// We store the points of the 5 subjects done in UACE exams
let subject1 = 5;
let subject2 = 3;
let subject3 = 4;
let gp = 1;
let ict = 1;
// We add the points and find the total
points = subject1 + subject2 + subject3 +gp +ict;
// Using an if statement we makesure certain conditions are fulfilled for the student to qualify for a particular course
if(points >= 7){
    console.log(`With ${points} points, you are eligible for BSIT and Data Science.`)
}else{
    console.log(`With ${points} points, choose Social Science`)
}

