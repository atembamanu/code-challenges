let count = 0;

function KaprekarsConstant(num) {
  if (num === 6174) {
    return count;
  }
  count++;
  let ascNum = sortDecOrAsc(num, "asc");
  let decNum = sortDecOrAsc(num);
  return KaprekarsConstant(decNum - ascNum);
}

function addZero(length, numArray) {
  switch (length) {
    case 3:
      numArray.push(0);
      break;
    case 2:
      numArray.push(0, 0);
      break;
    case 1:
      numArray.push(0, 0, 0);
      break;
    default:
      return;
  }
}

function sortDecOrAsc(num, order = "dec") {
  const numArray = num
    .toString()
    .split("")
    .map(i => Number(i));

  if (numArray.length < 4) {
    addZero(numArray.length, numArray);
  }

  if (order === "asc") {
    return Number(numArray.sort((a, b) => a - b).join(""));
  } else {
    return Number(numArray.sort((a, b) => b - a).join(""));
  }
}

KaprekarsConstant(2111);

function multiplesOfThreeAndFive() {
  let sum = 0;
  for (let i = 0; i <= 1000; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

multiplesOfThreeAndFive();
