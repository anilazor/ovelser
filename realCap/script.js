"use strict";

console.log(realCap("vAldeMAR"));
function realCap(theName) {
  return theName.substring(0, 1).toUpperCase() + theName.substring(1).toLowercase();
}
