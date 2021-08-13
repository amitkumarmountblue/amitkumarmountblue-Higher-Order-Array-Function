function reduce(items, cb, startingValue) {
    let index;
    if(startingValue){
      index=startingValue;
    }else{
      index=0;
    }
    const value = items[index];
    let reduced = value;
    for ( let i = index+1; i < items.length; i++ ) {
      reduced = cb(reduced, items[i]);
    }
    return reduced;
  }

  module.exports=reduce;