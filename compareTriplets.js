
//  accurate solution
function compareTriplets(a, b) {
  let aCounter = 0;
  let bCounter = 0;
  let outputArr = [];

  if (a[0] > b[0]) {
    aCounter++;
  } else if (a[0] < b[0]) {
    bCounter++;
  }

  if (a[1] > b[1]) {
    aCounter++;
  } else if (a[1] < b[1]) {
    bCounter++;
  }
  if (a[2] > b[2]) {
    aCounter++;
  } else if (a[2] < b[2]) {
    bCounter++;
  }

  outputArr.push(aCounter, bCounter);

  return outputArr;
}
compareTriplets([17, 28, 30], [99, 16, 8]);


// some wrong solutions
function compareTriplets(a, b) {
  // let arra = a[0];
  // let arrb = b[0];
  let aCounter = 0;
  let bCounter = 0;
  let outputArr = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] !== b[j]) {
        if (a[i] > b[j]) {
          aCounter++;
          bCounter--;
          outputArr.push(aCounter);
        }
        if (a[i] < b[j]) {
          aCounter--;
          bCounter++;
          outputArr.push(bCounter);
        }
      }
      if (a[i] === b[j]) {
        bCounter == aCounter;
        outputArr.push(aCounter);
        outputArr.push(bCounter);
      }
    }
  }

  console.log(outputArr);
  return outputArr;
}
