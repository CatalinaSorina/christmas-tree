export const getBranches = () => {
  const branches = [];
  for (let i = 1; i < 15; i++) {
    for (let j = 1; j <= i * 2; j++) {
      const direction = (30 / i) * j;
      const rotate = i >= j ? direction + 90 : direction + 20;
      const skewY = i >= j ? direction : direction + 120;
      branches.push({
        transform: `rotate(${rotate}deg)
        translate(${i * 10}px, ${j}px)
        skewY(${skewY}deg)`
      });
    }
  }

  return branches;
};
