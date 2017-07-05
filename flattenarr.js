//Write a function, flatten, that accepts a two-dimensional array as its argument and returns a flattened one-dimensional copy of the array.
function flatten(arr) {
  flat = [];
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i]));
      for (var j = 0; j < arr[i].length; j++) {
        flat.push(arr[i][j])
      }
    else {
      flat.push(arr[i]);
    }

   }
return flat;
}
console.log(flatten([1,[2,3],4])); //test case
