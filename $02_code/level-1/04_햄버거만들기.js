// #1 
const solution = (ingredients) => {
  let count = 0;
  let stack = [];

  for (let i = 0; i < ingredients.length; i++) {
    stack.push(ingredients[i]);

    if (stack.length >= 4 
				&& stack[stack.length - 4] === 1 
				&& stack[stack.length - 3] === 2 
				&& stack[stack.length - 2] === 3 
				&& stack[stack.length - 1] === 1) {
      stack.splice(stack.length - 4, 4);
      count++;
    }
  }

  return count;
};

// #2 
const solution_02 = (ingredient) => {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
      if (ingredient.slice(i, i + 4).join('') === '1231') {
          count++;
          ingredient.splice(i, 4);
          i -= 3;
      }
  }

  return count;
}