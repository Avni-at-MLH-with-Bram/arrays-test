/* SHOPPING LIST TEST
 * Every day, you are sent to buy 5 items.
 * As you find them on the shelves, you add them to your smartphone,
 * along with their price, so you can make sure you have enough money.
 * Sometimes you will buy more than 1 item. 
 * The program should display the list of items, quantities and prices
 * The program should tell you you much the total cost is.
 * Use stubs to test as you go. 
 */

/* GLOBAL VARIABLES */


/* MAIN
 * 1. Create an array from a string list
 * 2. Create a 2D array from a 1D array to include number of items and price.
 * 3. Calculate the total of the prices of all the items. 
 * 4. Display the list and the total
 */
function main() {
   let items = "gallon milk,dozen eggs,link sausage,ounce cheese,stick butter";
   let shoppingList = makeList(items);
   let prices = "6.49,4.49,4.89,0.44,1.80";
   let pricesArray = addPrices(shoppingList,prices);
   let message = calculateTotal(pricesArray);
   alert(message);
}

/* 1. Function makeList(items)
 * Use a method which can SPLIT the items string into array elements and store that as itemsArray 
 * Console.log the itemsArray before you return it using TOSTRING before you return it. 
 * Total lines in my code: 5
 * @param: list of items, separated by commas
 * @return: itemsArray
 */


/* 2. Function addPrices(shoppingList)
 * Create a 1D priceList array by SPLITTING a string called prices
 * Create a 2D array called pricesArray where you will store items and prices. 
 * Use a FOR LOOP based on the length of shoppingList[] 
 * Inside the loop, create an itemPrice subarray (create it inside the loop because you want it empty)
 * Push the shoppingList item into that itemPrice subarray
 * Push the pricesArray item with the same index into that itemPrice subArray
 * Push the itemPrice subarray into the pricesArray 
 * You might want to console.log the pricesArray after the loop before you return it.
 * Total lines in my code: 12
 * @param: shoppingList, prices
 * @return: pricesArray
 */



/* 3. Function calculateTotal(pricesArray)
 * Create a variable called total, set to 0.
 * Create a variable called message, with first line as "Items to buy:" plus a LINE BREAK
 * Use a FOR LOOP to add each new message line with the item name, $, the price and a line break.
 * PARSE the price as a FLOAT, and add it to the total. 
 * After the loop is done, round the total using total.toFixed(2)
 * Next, add "Total = " and the rounded total to the message
 * No need to console.log the message - you will be returning and alerting it. 
 * Total lines in my code: 11
 * Return the message. 
 * @param = pricesArray
 * @return = message
 */ 

