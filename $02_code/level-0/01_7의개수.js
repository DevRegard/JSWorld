// #1
const solution = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    while (num > 0) {
      if (num % 10 === 7)
        count++;
      
      num = Math.floor(num / 10);
    }
  }
  return count;
} 

// #2
const solution_02 = (array) => array.join().split("").filter((el)=>{return el=="7"}).length