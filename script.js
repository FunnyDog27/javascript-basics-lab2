let number = 4

if (number > 5) {
    console.log("The number is positive");
} else if (number < 5) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

let day = 5
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 8) {
    console.log(i);
    i++;
}

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 9);

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}

let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}
