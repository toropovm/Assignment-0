function countOfAllBooleans(arr) {
  // Insert code here;
    let count = 0;

    for (let i = 0; i < arr.length; i++){
      if (typeof(arr[i]) == "boolean"){
        count++;
      }
    }
    return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;