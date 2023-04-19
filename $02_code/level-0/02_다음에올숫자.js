// #1
const solution = (common) => {
  // 등차 수열
  if (common[common.length-1] - common[common.length-2] === common[common.length-2] - common[common.length-3])
    return common[common.length-1] + (common[common.length-1] - common[common.length-2]); // an + an - d
  // 등비 수열
  else 
    return common[common.length-1] * (common[common.length-1] / common[common.length-2]); // an * an / d
};



// #2
const solution_2 = c => c[1]-c[0] === c[2]-c[1] ? c[c.length-1] + c[1] - c[0] : c[c.length-1] * c[1] / c[0]