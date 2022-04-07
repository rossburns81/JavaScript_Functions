console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let num = 1; num <= count; num++) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
}

printOdds(10)
printOdds(100)
printOdds(5)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age, name = "stranger") {
    if (!parseInt(age) && age !== 0){
        console.log(`You didn't give me a valid age.`);
    } else {
        if (age >= 16) {
        console.log(`Congrats ${name}! You are old enough to drive!`);
    } else {
        console.log(`Sorry ${name}. You must wait ${16 - age} year(s) until you can drive.`);
    } 
    }
}

checkAge(21, "Ben")
checkAge(16)
checkAge(14, "Seth")
checkAge()
checkAge("twelve")
 

  // Exercise 3 Section
  console.log("EXERCISE 3:\n==========\n");

function describePointLocation(x, y) {
    if (y == 0 || x == 0) {
        // point is on an axis
    let axisLocation;
    if (y == 0 && x == 0) {
        axisLocation = "both axes";
        } else if (x == 0) {
        axisLocation = "x axis";
        } else if (y == 0) {
        axisLocation = "y axis";
        } 

        console.log(`Point is on ${axisLocation}.`);
    } else {
        // determine what quadrant
    let quadrant = 4;

    if (x > 0 && y > 0) {
        // quad 1
        quadrant = 1;
    } else if (x < 0 && y > 0) {
        // quad 2
        quadrant = 2;
    } else if (x < 0 && y < 0) {
        // quad 3
        quadrant = 3;           
    }

console.log(`Point is in quadrant ${quadrant}.`);
    }
}

describePointLocation(0,1);
describePointLocation(1,0);
describePointLocation(0,0);
describePointLocation(21, 61);
describePointLocation(-1,101);
describePointLocation(-91, -1);
describePointLocation(1, -51);


  // Exercise 4 Section
  console.log("EXERCISE 4:\n==========\n");

function describeTriangle(sideA, sideB, sideC) {
    // Is the triangle valid?
    if (sideA + sideB > sideC) {
        console.log("Valid triangle");
        // determine type of triangle
        if (sideA == sideB && sideA == sideC) {
            console.log("Equilateral triangle");
    } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
            console.log("Isosceles triangle");
    } else {
            console.log("Invalid triangle");
    }
}
}

describeTriangle(1, 2, 3);
describeTriangle(1, 2, 2);
describeTriangle(3, 3, 3);
describeTriangle(3, 4, 6);

  // Exercise 5 Section
  console.log("EXERCISE 5:\n==========\n");

  const dataReport = (dataLimit, day, usage) => {
      const cycleLength = 30;
      let avgDailyUse = usage / day;
      let avgSuggestedUse = dataLimit / cycleLength;
      let estimatedUse = (cycleLength - day) * avgDailyUse;
      let status;
      let feedback;
      
      

      if (avgDailyUse > avgSuggestedUse) {
          status = "EXCEEDING";
          feedback = `exceed your data plan by ${estimatedUse} GB`;
      } else if (avgDailyUse < avgSuggestedUse) {
          status = "UNDER"
          feedback = 'lose ${estimatedUse} GB';
      } else {
          status = "ON TRACK WITH";
          feedback = `use all of your data`;
      }
     
      // usage / day == average daily usage
     // datalimit / cycleLength == average daily usage without running over
     // ((cycleLength - day) * (usage / day)) - dataLimit
     
     let output = `${day} day(s) used, ${cycleLength - day} day(s) remaining\n
        Average dialy use: ${avgDailyUse.toFixed(2)} GB/day.\n
        You are ${status} your average daily use (${avgDailyUse.toFixed(2)} GB/day). 
        Continuing this usage rate, you'll ${feedback}.`

    if (status !== "ON TRACK WITH") {
        let correctedDailyUse = (dataLimit - usage) / (cycleLength - day);
        output += `\nTo use all of your data without going over, use no more than ${correctedDailyUse.toFixed(2)} GB/day.`;
    }

        console.log(output)
  }

  dataReport(50, 5, 4)
  dataReport(50,15, 34)
  dataReport(50,15, 25)
