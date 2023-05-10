// #1
const solution = (c) => {
  // 등차 수열
  if (c[c.length-1] - c[c.length-2] === c[c.length-2] - c[c.length-3])
    return c[c.length-1] + (c[c.length-1] - c[c.length-2]); // an + an - d
  // 등비 수열
  else 
    return c[c.length-1] * (c[c.length-1] / c[c.length-2]); // an * an / d
}

// #2
const solution_02 = c => c[1]-c[0] === c[2]-c[1] ? c[c.length-1] + c[1] - c[0] : c[c.length-1] * c[1] / c[0]