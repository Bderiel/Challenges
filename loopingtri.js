// http://eloquentjavascript.net/02_program_structure.html Looping Triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

function getTri(n) {
  var tri = '';
  for(var i = 0; i < n; i++){
    console.log(tri += '#')
  }

}

getTri(7)  //Test Case
