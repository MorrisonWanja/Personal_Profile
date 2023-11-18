
const s=["C,A,B,A,B,D,"]
function solution(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (stack.length > 0) {
        const [prevChar, prevIndex] = stack[stack.length - 1];
  
        if ((prevChar === 'A' && char === 'B') || (prevChar === 'C' && char === 'D')) {
          stack.pop();
        } else {
          stack.push([char, i]);
        }
      } else {
        stack.push([char, i]);
      }
    }
  
    const result = stack.map(([char]) => char).join('');
    return result;
  }
console.log(solution(s))