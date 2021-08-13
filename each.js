const each=(items, cb)=> {
  for ( let i=0;i<items.length;i++) {
      let value=items[i];
      cb(value,i);
  }
}

module.exports=each;