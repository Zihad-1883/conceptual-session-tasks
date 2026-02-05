// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }

// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

// Test case 2
// Input: { ict: 90, biology: 90, chemistry: 70 }
// Output: { total: 250, average: 83.33, highest: "ict", lowest: "chemistry" }







const marks = { ict: 90, biology: 90, chemistry: 70 };

function analyzeMarks(marksObj){

    let highest = -Infinity;
    let lowest = Infinity;
    let total = 0;
    let highestSubject = null;
    let lowestSubject = null;

    for(let subject in marks){

        let mark = marks[subject];
        total += mark;

        if(mark > highest){
            highest = mark;
            highestSubject = subject;
        }

        else if(mark < lowest){
            lowest = mark;
            lowestSubject = subject;
        }
    }
    
    
    const average = total / Object.keys(marks).length;
    return{
        total,
        average,
        highestSubject,
        lowestSubject,
    };
}

const ans = analyzeMarks(marks);
console.log(ans);