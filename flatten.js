const flatten = (items) => {  
    const res = [];
    function removeArr(items) {    
      if (!Array.isArray(items)) {
        res.push(items);
      } else {
        for ( let i=0; i<items.length;i++) {
            removeArr(items[i]);
          }
      }
      return res;
    }
    return removeArr(items);
  };

  module.exports = flatten;