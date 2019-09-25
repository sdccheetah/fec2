// Sort array of objects
// this function takes two inputs
// the specific object key that will be used to compare and
// direction (default direction is descending) otherwise, "ascending" has to be provided
// returns the sorting function that can be used elsewhere

module.exports = (key, direction = "descending") => {
  return function compare(a, b) {
    const keyA = a[key];
    const keyB = b[key];
    let comparison = 0;
    if (keyA > keyB) {
      comparison = -1;
    } else if (keyA < keyB) {
      comparison = 1;
    }
    return comparison * (direction === "ascending" ? -1 : 1);
  };
};
