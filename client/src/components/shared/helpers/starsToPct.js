let percentages = Array(21)
  .fill(1)
  .map((item, i) => i * 5);
module.exports = stars => {
  if (stars === 5) {
    return 100;
  }
  let percent = (100 * stars) / 5;
  let preI = 0;
  while (percent > percentages[preI + 1]) {
    preI++;
  }
  let pre = percentages[preI];
  let post = percentages[preI + 1];
  let nearestPct = percent - pre < post - percent ? pre : post;
  return nearestPct;
};
