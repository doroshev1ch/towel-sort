
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = matrix || [];
  for (let i = 1; i < array.length; i+=2){
    array[i] = array[i].reverse()
  }
  return array.flat()
  
}

