function organizePeopleData(data) {
    const result = {
        females: [],
        males: []
    };

    data.forEach(entry => {
        const [fullName, age, gender] = entry.split(", ").map(item => item.trim());
        const [firstName, secondName] = fullName.split(" ");
        const person = {
            "second-name": secondName,
            "age": parseInt(age)
        };
        
        if (gender === "female") {
            result.females.push({[firstName]: person});
        } else if (gender === "male") {
            result.males.push({[firstName]: person});
        }
    });

    return result;
}

const peopleData = [
    "ngendahimana wEmmy, 26, male",
    "patern, 23, male",
    "joseph, 25, male",
    "latitha, 25, female",
    "ruth, 22, female",
    "Adadi, 26, male",
    "mugisha, 24, male",
    "xavier, 35, male"
];

const organizedData = organizePeopleData(peopleData);
console.log(organizedData);
