const map=(items, cb)=> {
  let newArray = [];
  for ( let i=0;i<items.length;i++) {
    let value=items[i];
    newArray.push(cb(value));
  }
  return newArray;
}
module.exports=map;