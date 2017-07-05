//https://www.hackerrank.com/challenges/compare-the-triplets/problem
function solve(a0, a1, a2, b0, b1, b2){
    a=0;
    b=0;
    alice=[a0,a1,a2];
    bob=[b0,b1,b2];
    for(var i=0;i<=3;i++){
      if(alice[i]>bob[i]) {
        a++;
      }if(bob[i]>alice[i]){
        b++;
      }

    }
    console.log(a+' '+b);
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));



}
