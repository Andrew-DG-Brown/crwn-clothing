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

// Screen problem

//store current num in global
//loop through 2d array and store first 500 in file 1,rest in file 2
//for the subsequent array, find difference of 500 from the previous

const screenArray = (twoDimArray) => {
  const width = 1919;
  const height = 1079;

  for (let i = 0; i <= height; i++) {
    twoDimArray[i].map((el, index) => {});
  }
};
