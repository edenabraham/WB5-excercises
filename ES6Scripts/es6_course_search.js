let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ]

    // USE: find() and filter() to answer these questions:

// Q1 - When does the PROG200 course start?
function isCourseIdPROG200(course) {
    if (course.CourseId == "PROG200") {
        return true;
    } else {
        return false;
    }
    // return course.CourseId == "PROG200";
}
let q1match = courses.find(isCourseIdPROG200); //identify the one matching object and return that object
console.log(q1match);// ^finds the course and <- pulled it out
console.log("Q1 when does the PROG200 course start? Answer: ");
console.log(q1match.StartDate);
//ALL IN ONE LINE?!?!?!
// console.log(courses.find(c => c.CourseId == "PROG200").StartDate);


// Q2 - What is the title of the PROJ500 course?
console.log("Q2 What is the title of the PROJ500 course?")
console.log(courses.find(c => c.CourseId == "PROJ500").Title);

// Q3 - What are the titles of the courses that cost $50 or less?

function isFiftyOrLess(c) {
    if(Number(c.Fee) <= 50){
        return true;
    }else{
        return false;
    };
}
console.log("Q3 What are the titles of the courses that cost $50 or less? Answer:");
let fiftyOrLessList = courses.filter(isFiftyOrLess); //identify all matching objects and the list of matches

//for (i = 0; i < fiftyOrLessList.length; i++) {
    //console.log(fiftyOrLessList[i].Title);   this is another way to answer Q3
//}

//ALL IN ONE OR TWO LINES?!?!?!?!
// let filteredList = courses.filter(c => c.Fee < 50);
// filteredList.forEach(c => console.log(c.Title));
courses.filter(c => Number(c.Fee) <= 50).forEach(c => console.log(c.Title));


// Q4 - What classes meet in "Classroom 1"?
console.log("Q4 What classes meet in Classroom 1? Answer:");
courses.filter(c => c.Location == "Classroom 1").forEach(c => console.log(c.Title));
