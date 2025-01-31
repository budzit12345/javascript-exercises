const removeFromArray = function(y,...args){
  let newArray = [];
y.forEach((items) => {
  if(!args.includes(items)) {
    newArray.push(items)
  }
  
});
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;