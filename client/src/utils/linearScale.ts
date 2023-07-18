export const linearScale = (domain: [number, number], range: [number, number]) => {
  return (value: number) => {
    if (value < domain[0]) {
      return range[0];
    }

    if (value > domain[1]) {
      return range[1];
    }

    const domainDiff = domain[1] - domain[0];
    const rangeDiff = range[1] - range[0];
    const adjustedValue = value - domain[0];

    return (adjustedValue * rangeDiff) / domainDiff + range[0];
  };
};
