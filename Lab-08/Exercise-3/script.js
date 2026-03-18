class Course {
    constructor(courseName,instructor){
        this.courseName = courseName;
        this.instructor = instructor;
    }
    displayCourse(){
        return `Course Name : ${this.courseName}, Instructor: ${this.instructor}`;
    }
}

function enroll() {
    let courseName = document.getElementById("courseName").value;
    let instructor = document.getElementById("instructor").value;

    let seatsAvaialble = (document.getElementById("seatsAvailable").value);
    console.log(seatsAvaialble);

    let course = new Course(courseName,instructor);

    let enrolledCourse = new Promise((resolve,reject) => {
        if(seatsAvaialble>0){
            resolve("Enrollment Successful");
        }else{
            reject("Course Full. Seats not avaialble");
        }
    });


    //display
    enrolledCourse
    .then(msg => {
        document.getElementById("output").innerHTML = `
            <p>${course.displayCourse()}</p>
            <p>${msg}</p>
        `;
    })
    .catch(err => {
        document.getElementById("output").innerHTML = `
            <p>${course.displayCourse()}</p>
            <p>${err}</p>
        `;
    });
}