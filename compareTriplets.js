function compareTriplets(a, b) {
  // let arra = a[0];
  // let arrb = b[0];
  let aCounter = 0;
  let bCounter = 0;
  let outputArr = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aCounter++;
      outputArr.push(aCounter);
    }
    if (a[i] < b[i]) {
      bCounter++;
      outputArr.push(bCounter);
    } else if (a[i] === b[i]) {
      aCounter--;
      bCounter--;
    }
  }

  console.log(outputArr);
  return outputArr;
}
compareTriplets([5, 6, 7], [3, 6, 10]);
