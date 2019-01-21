// Find the index in an array where eveerything on the left, equals everything on the right.
// If that index doesn't exsist, return -1.
// If multiple indicies exsist, return the first.

function pivotIndex(arr) {
  var leftTotals = []
  var sum = 0

  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
    leftTotals.push(sum)
  }

  var total = leftTotals[leftTotals.length-1]

  for(let i = 0; i < arr.length; i++){
    var rightTotal = total - leftTotals[i]
    var leftTotal = leftTotals[i] - arr[i]
    if(rightTotal === leftTotal){
      return i
    }
  }

  return -1
}
