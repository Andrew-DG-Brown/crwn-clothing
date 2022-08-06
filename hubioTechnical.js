// [1, 4, 2]

//next num = 5

//case 2: [1, 2, 3] missing is 4

const missingNum = (array) => {
  let missing = null;

  array.sort().forEach((num, index) => {
    const numShouldBe = index + 1;

    if (numShouldBe !== num) missing = numShouldBe;
  });

  if (!missing) {
    return array.length + 1;
  }

  return missing;
};
