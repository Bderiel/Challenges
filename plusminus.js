//https://www.hackerrank.com/challenges/plus-minus/submissions/code/48042105
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var p = 0;
    var n = 0;
    var z = 0;
    for(var i = 0; i < arr.length; i ++){
      if (arr[i] === 0) {
        z += (1 / arr.length);
      }
      if (arr[i] < 0){
        n += (1 / arr.length);
      }
      if (arr[i]>0){
      p += (1 / arr.length);
      }
   }
console.log(p);
console.log(n);
console.log(z);
}
