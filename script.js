// Task - 3 | JAVASCRIPT
function findInputs(...inputs) {
  // console.log(inp1)
  let input_array = [];
  for (let input of inputs) {
    input_array.push(document.getElementById(input).value);
  }

  console.log(input_array);
}
