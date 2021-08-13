const items=require("../array");
const reduce=require("../reduce");

const cb = ( reduced, value ) => reduced += value;
console.log(reduce(items, cb,0));