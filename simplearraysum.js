//https://www.hackerrank.com/challenges/simple-array-sum/problem
function simpleArraySum(n, ar) {
  var total = 0
  for(var i = 0; i < n; i ++) {
    total += ar[i]
  }
  return total
}


function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = simpleArraySum(n, ar);
    process.stdout.write("" + result + "\n");

}
