const items=require("../array");
const each=require("../each");

const cb = (x,idx) => console.log(x, idx);
each(items, cb);
