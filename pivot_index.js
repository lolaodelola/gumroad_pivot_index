// Find the index in an array where eveerything on the left, equals everything on the right.
// If that index doesn't exsist, return -1.
// If multiple indicies exsist, return the first.

function pivotIndex(arr) {
  const leftTotals = []
  let sum = 0

  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
    leftTotals.push(sum)
  }

  const total = leftTotals[leftTotals.length-1]

  for(let i = 0; i < arr.length; i++){
    const rightTotal = total - leftTotals[i]
    const leftTotal = leftTotals[i] - arr[i]
    if(rightTotal === leftTotal){
      return i
    }
  }

  return -1
}
