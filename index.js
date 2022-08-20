const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
  },
];
// iterate through and console the property seleceted
function firstNamePrinter(collection) {
  for (const user of collection) {
    console.log(user.favoriteColor);
  }
}
// firstNamePrinter(users);

// iterate through and find key with some value
function blueFilter(collection) {
  for (const user of collection) {
    if (user.favoriteColor === "Red") {
      console.log(`${user.firstName} favourite color is not blue`);
    }
  }
}
//blueFilter(users);

function animalFilter(collection, attribute, animal) {
  for (const user of collection) {
    if (user[attribute] === animal) {
      console.log(`${user.firstName}'s favorite animal  is ${animal}`);
    }
  }
}
//animalFilter(users,"favoriteAnimal" ,"Penguin");
function filter(collection, attribute1, value1, attribute2, value2) {
  for (const user of collection) {
    if (user[attribute1] === value1 && user[attribute2] === value2) {
      console.log(user.firstName);
    }
  }
}
//filter(users,"favoriteAnimal","Jaguar","favoriteColor", "Blue")
// function filter(collection) {
//   for (const user of collection) {
//     if (likesElephants(user)) {
//       console.log(user.firstName);
//     }
//   }
// }
// function likesElephants(user) {
//   return user["favoriteAnimal"] === "Elephant";
// }
// filter(users);

// filter to take a callback

function filter(collection, cb) {
  for (const user of collection) {
    if (cb(user)) {
      console.log(
        user.firstName,
        user.lastName + " likes the following stuff " + user.favoriteColor,
        user.favoriteAnimal
      );
    }
  }
}
//filter(users, function (user) {
//return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
//});

filter(users, function (user) {
  return user.favoriteColor === "Red" && user.favoriteAnimal === "Jaguar";
});

/// pure and impure function
// pure => can be predicted ie does not change any value or return differnt values
// impure => can't be predicted in that it changes sth or returns sth different ie incrimenting in a fuction or mutilating an array

// <<<<<<<<<<<<<<~~~~~~~~~~~~~~~~~~~~~~~~~ filter() function as a pure function that returns a new array containing the filtered elements:

function filter(collection, cb) {
  const newCollection = [];

  for (const user of collection) {
    if (cb(user)) {
      newCollection.push(user);
    }
  }

  return newCollection;
}
const bluePenguinUsers = filter(users, function (user) {
  return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
});

//console.log(bluePenguinUsers);

// <<<<<<<<<<~~~~~~~~~ using arrayprtotype.filter()

[
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46,
].filter(function (num) {
  //console.log(num > 23); console.log true and false
  return num > 23;
});

