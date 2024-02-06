setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age");
            else
                resolve(student);
        }, 500);
    });
}

let student = { name: "Eric" };

// Calling the function with a positive age 
setStudentAgeApi(student, 20)
    .then((result) => {
        console.log("Student's age has been set successfully.");
        console.log(result); 
    })
    .catch((error) => {
        console.error("Error:", error); 
    });

// Calling the function with a negative age 
setStudentAgeApi(student, -5)
    .then((result) => {
        console.log("Student's age has been set successfully.");
        console.log(result); 
    })
    .catch((error) => {
        console.error("Error:", error); 
    });
