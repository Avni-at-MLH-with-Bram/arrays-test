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
var items = "gallon of milk, dozen eggs, link of sausage, ounce of cheese, stick of butter";

/* MAIN
 * Use global variables above to:
 * 1. Create an array from a string list
 * 2. Create a 2D array from a 1D array to include number of items and price.
 * 3. Find the index of an item and enter number of items and price
 * 4. Total up the prices of all items. 
 */
function main() {
   let shoppingList = makeList(items);
   let pricesArray = addPrices(shoppingList);
   let message = calculateTotal(pricesArray);
   alert(message);
}

/* 1. Function makeList(items)
 * Populate an array from a list of items 
 * Using a method which can SPLIT a string into array elements. 
 * You might want to console.log the itemsArray before you return it. 
 * @param: list of items, separated by commas
 * @return: itemsArray[]
 */
function makeList(items){
   return itemsArray;
}

/* 2. Function addPrices(shoppingList)
 * Use a string variable (which you will SPLIT) to create a 1D priceList array
 * from a 1D array passed as an argument (shoppingList)
 * Create an array called pricesArray where you will store items and prices. 
 * Use a FOR LOOP to create each 2-item subarray from a shoppingList item and the 
 * item in pricesArray with the same INDEX OF that item in shoppingList array. 
 * After you create each subarray, PUSH it to the pricesArray you will return. 
 * You might want to console.log this subArray each time. 
 * @param: shopArray
 * @return: pricesArray
 */
function addPrices(shoppingList){
   let prices = "6.49,4.49,4.89,0.44,1.80";
   return pricesArray;
}

/* 3. Function calculateTotal(pricesArray)
 * Create a variable called total, set to 0.
 * Create a variable called message, with first line as "Items to buy " plus a LINE BREAK
 * Use a FOR LOOP to add each new message line with the item name, $, the price and a line break.
 * PARSE the price as a FLOAT, and add it to the total. 
 * After the loop is done, add "Total = " and the total to the message
 * Return the message. 
 * @param = pricesArray
 * @return = message
 */ 
function calculateTotal(pricesArray){
   return message;
}
