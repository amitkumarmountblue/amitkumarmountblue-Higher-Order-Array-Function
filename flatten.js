const flatten = (items) => { 
  let flatArray=[];
  for(let i=0;i<items.length;i++){
    if(Array.isArray(items[i])){
      flatArray=flatArray.concat(flatten(items[i]));
    }else{
      flatArray.push(items[i]);
    }
  }
  return flatArray;
} 

  module.exports = flatten;