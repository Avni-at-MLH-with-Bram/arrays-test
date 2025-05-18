/* SHOPPING LIST TEST
 * Every day, you are sent to buy 5 items.
 * As you find them on the shelves, you add them to your smartphone,
 * along with their price, so you can make sure you have enough money.
 * Sometimes you will buy more than 1 item. 
 * The program should tell you you much the total cost is.
 */

/* GLOBAL VARIABLES */
let items = "pint of milk, dozen eggs, link of sausage, ounce of cheese, stick of butter";
let quantities = 1,
let shopArray = [];
let pricesArray = [];

/* MAIN
 * Use global variables above to:
 * 1. Create an array from a string list
 * 2. Create a 2D array from a 1D array to include number of items and price.
 * 3. Find the index of an item and enter number of items and price
 * 4. Total up the prices of all items. 
 */
function main() {
   makeList(items);
   shopArray = makePricesArray();
   pricesArray = enterPrice(item);
   let message = "The total is $";
   message += showTotal(pricesArray);
   alert(message);
}

/* Function makeList(items)
 * Populate an array from a list of items 
 * Using a method which can SPLIT a string into array elements. 
 * @param: list of items, separated by commas
 * @return: shopArray []

/* 2. for loop and array with toString */

/* Same function, using previous code, BUT:
 * build shopArray variable for the shopping list
 * adjust loop to work with the array index values (start at 0)
 * ask for next list item and push it to the shopArray
 * no need to add a line break after
 * at end of loop, alert the list title, followed by
 * the list with toString() method (it won't have line breaks)*/

/* 3. for loop and array with join method 

/* Same function, using previous code, BUT:
 * the at end, alert list with array.join() method with line breaks 
 * instead of commas */
 /* 4. 2D Arrays: add Pricing */

/* Same function, using previous code, but THIS TIME add prices
 * When someone enters an item, prompt them also to enter a price separating by comma (like milk, 1.99)])   
 * Convert that entry to an itemPrice array by using string.split() and use a comma as delimiter
 * Push the itemPrice array to shopArray
 */

/* 5. Total up the prices */
function makeList() {
    let total = 0;
    let next = "";
    let shopArray = [];
    let shoppingList = " To Buy: \n";
    for (let item = 1;item<=2;item++) {
       next = prompt("item "+item+" name "); 
       shopArray.push(next.split(","));
    }
    for (let item = 1;item<=2;item++) {
       total += parseFloat(shopArray[item-1][1]);
    }
   let message = (shoppingList + shopArray.join("\n"));
    message += "\nTotal is " + total;
    alert(message);
 }
/* Same function, using previous code, but THIS TIME total the prices.
 * After you have built the array, create a NEW loop that adds the price 
 * of each item to a total. Do this before the alert. 
 * Save the first alert content as message. 
 * Add total as a line below message, then alert the message. 
 */
