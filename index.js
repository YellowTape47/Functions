function printName(name) {
  name = "Haider";
  console.log(name);
}

function printAge(birth_year) {
  age = 2024 - birth_year;
  console.log(age);
}

function printAgeAndName(name, age1) {
  age = 2024 - age1;
  console.log(`Hello ${name} you are ${age} years old`);
}

function printHello(name, language) {
  //   if (language == "en") {
  //     console.log(`Hello ${name}`);
  //   } else if (language == "es") {
  //     console.log(`Hola ${name}`);
  //   } else if (language == "fr") {
  //     console.log(`Bonjour ${name}`);
  //   } else if (language == "tr") {
  //     console.log(`Merhaba ${name}`);
  //   }

  switch (language) {
    case "en":
      console.log(`Hello ${name}`);
      break;

    case "es":
      es = console.log(`Hola ${name}`);
      break;

    case "fr":
      console.log(`Bonjour ${name}`);
      break;

    case "tr":
      console.log(`Merhaba ${name}`);
      break;
  }
}

function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else if ((num1 = num2)) {
    console.log(
      `First value which is ${num1} is equal to the Second value which is ${num2}`
    );
  }
}

printName("Haider");
printAge(2000);
printAgeAndName("Haider", 2000);
printHello("Haider", "es");
printMax(5, 3);
