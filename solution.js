const SolutionInterface = require('./SolutionInterface');
const api = require('./API');

module.exports = class Solution extends SolutionInterface {
  constructor() {
    super();

   // create an array with all the values
    var array = [];
    for (var i = 0; i < api.getNumDays(); i++) {
        array[i]= api.getPriceOnDay(i);
    }

    for (var i = 0; i < 10; i++) {
       
       array[i]=Math.floor(Math.random() * 10) 
    }
        
    //find the maximun profit as well the minIndex which represents the buy day
    var minPrice = array[0]
    var maxProfit = array[1] - array[0]
    var minIndex = 0;
           
    for (var i = 1, length = array.length; i < length; ++i) {  
        if (array[i] - minPrice > maxProfit) {
            maxProfit = array[i] - minPrice
        }
    if (array[i] < minPrice && i !== length - 1) {
        minPrice = array[i]
        minIndex = i
      }
    }
  
  }
  
  /**
   * Return the day which you buy gold. The first day has number zero. This method is
   * called first, and only once.
   * 
   * 
   * @return {number (integer)}
   */

  getBuyDay() {
    //the minIndex is of course our buy date
    var day = minIndex;
    return day;
  }

  /**
   * Return the day to sell gold on. This day has to be after (greater than) the buy
   * day. The first day has number zero (although this is not a valid sell day). This
   * method is called second, and only once.
   * 
   * 
   * @return {number (integer)}
   */
  getSellDay() {
       
    var day;
    // subtracting the minPrice which is the price we buy from the day we sell should equal the maxProfit 
    for(var i=0; i< array.length ; i++) {
      if (array[i] - minPrice === maxProfit){
        day = i
      }
    }
    
    return day;
  }

  
  

}