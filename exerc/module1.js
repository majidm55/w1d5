var list = [];

module.exports = {
 addToList: function (argument) {
    list.push(argument);
    // console.log(list);
  },

sortedList: function () {
 list.sort(function(a, b) {
   return a-b;
})
 return list;
}

}


