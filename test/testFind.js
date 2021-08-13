const items=require("../array");
const find=require("../find");

const cb = ( x ) => x === 1 ? true : false;
console.log(find(items,cb));