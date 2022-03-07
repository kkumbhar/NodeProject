const test_data = require("./TestData");

// Array to store the cart items
let shopping_items=[];

/*
* This function is used to add an item to cart.
*/
const addItem = (barcode) => {
  const item = test_data.find((item)=> item.barcode === barcode);
  const isItemAvailable = shopping_items.length > 0 && shopping_items.find((cartItem)=> cartItem.barcode === item.barcode);
  if(item && !isItemAvailable) {
    shopping_items.push({...item,quantity:1,totalPrice:item.price*1});
  } else if(shopping_items.length>0){
    shopping_items=shopping_items.map((item)=>{
      if(item.barcode === barcode){
        item.quantity++;
        item.totalPrice = item.price * item.quantity;
      }
      return item;
    });
  }
  return shopping_items;
}

module.exports = addItem;