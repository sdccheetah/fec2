module.exports = ratings => {
  let total = Object.values(ratings).reduce((acc, count) => {
    acc += count;
    return acc;
  }, 0);
  return Object.entries(ratings).reduce(
    (acc, [rating, freq]) => {
      acc[rating] = freq / total;
      return acc;
    },
    { 1: 0 / total, 2: 0 / total, 3: 0 / total, 4: 0 / total, 5: 0 / total }
  );
};
