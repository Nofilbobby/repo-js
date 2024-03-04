//Q1
    var studentNames = [];
//Q2
    let studentNames = [];
//Q3
    let studentNames = ["lion"];
//Q4
    let studentNames = [2];
//Q5
    let studentNames = [true];
//Q6
let studentNames = [true , "lion",1];
//Q7
let studentScores = [56, 89, 45, 90, 78, 34, 12, 67];

studentScores.sort(function(a, b) {
  return a - b;
});

console.log(studentScores);


var queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.shift()); 
console.log(queue.shift()); 
console.log(queue.shift()); 