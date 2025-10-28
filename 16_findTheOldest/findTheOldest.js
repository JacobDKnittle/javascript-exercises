const findTheOldest = function(people) {
    
    let ages = people.map((person) => (person.yearOfDeath || 2025) - person.yearOfBirth);
    let oldestAgeIndex = 0;
    let oldestAge = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > oldestAge){
            oldestAge = ages[i];
            oldestAgeIndex = i;
        }
    }

    return people[oldestAgeIndex];
};


const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    console.log(findTheOldest(people).name);
// Do not edit below this line
module.exports = findTheOldest;
