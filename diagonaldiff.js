//https://www.hackerrank.com/challenges/diagonal-difference/problem
function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var diag = 0
    var diag2 = 0
    for(var i= 0;i<n;i++){
      diag += a[i][i];
      diag2 += a[i][n-i-1];
    }
console.log(Math.abs(diag - diag2));
}
