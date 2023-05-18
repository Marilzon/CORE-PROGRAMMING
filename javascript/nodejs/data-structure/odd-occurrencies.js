const vector = [...Array(50).keys()];

function generatorHappyArray(arr) {
  const randomVector = [];

  for (value of arr) {
    randomVector.push((Math.random(1, 5) * value).toFixed(0));
  }

  return randomVector;
}

function findSameValues(arr) {
  const count = arr.reduce((acc, value) => {
    return { ...acc, [value]: (acc[value] || 0) + 1 };
  }, {});

  console.log(count);
  return count;
}

findSameValues(generatorHappyArray(vector));
