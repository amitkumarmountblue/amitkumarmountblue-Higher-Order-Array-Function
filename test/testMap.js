const items=require("../array");
const each=require("../map");

const result=each(items, (x)=>x);
console.log(result);