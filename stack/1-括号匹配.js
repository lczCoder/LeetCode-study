const arr = "(({}))(){}[{}]";

// 方法一： 用Arrary模拟stack的特性
function isValid(s) {
  if (s.length % 2 === 1) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    if (x === "(" || x === "{" || x === "[") {
      stack.push(x);
    } else {
      let t = stack[stack.length - 1];
      if (
        (t === "(" && x === ")") ||
        (t === "{" && x === "}") ||
        (t === "[" && x === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const x = isValid(arr);
console.log("x", x);
