let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.round(Math.random()*10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function () {return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {return Math.round(Math.random()*10)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.round(Math.random()*10)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.round(Math.random()*10)}
};


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let animalBox = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

// Print out the relevant information about each animal.
// function crewReports (array) {
//    for(i = 0; i < array.length; i++){
//       console.log(`${array[i].name} is a ${array[i].species}. They are ${array[i].age} years old and ${array[i].mass} kilograms. Their ID is ${array[i].astronautID}.`);
//    }
// }

// crewReports(animalBox);

//Start an animal race!
let fitnessTest = function (array) {
   let totalMoves = 0, totalSpaces = 0;

   while(totalSpaces <= 20){
      totalSpaces = array.move() + totalSpaces;
      totalMoves += 1;
   }
   
   return `${array.name} took ${totalMoves} turns to take 20 steps.`
}


let race = animalBox.map(fitnessTest);

console.log(race)