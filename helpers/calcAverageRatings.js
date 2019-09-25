module.exports = ratings => {
  let totaler = Object.entries(ratings).reduce(
    (acc, [rating, count]) => {
      acc.count += count;
      acc.total += rating * count;
      return acc;
    },
    { count: 0, total: 0 }
  );
  return totaler.total / totaler.count;
};
