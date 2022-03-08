const inventory = require("./TestData");

// Array to store the cart items
let shopping_items=[];

/*
* This function is used to add an item to cart.
*/
const addItem = (barcode) => {
  const item = getItemFromInventory(barcode);
  const isItemAvailable = isItemAlreadyAvailableInCart(item);

  if ( item && !isItemAvailable ) {
    shopping_items.push({...item,quantity:1,totalPrice:item.price*1});
    return shopping_items;
  } else if ( shopping_items.length > 0 ) {
    let cartItems=shopping_items.map((item)=>{
      if(item.barcode === barcode){
        item.quantity++;
        item.totalPrice = item.price * item.quantity;
      }
      return item;
    });
    return cartItems;
  }
}

const getItemFromInventory = (barcode) => {
  return inventory.find((item)=> item.barcode === barcode);
}

const isItemAlreadyAvailableInCart = (item) => { 
  return shopping_items.length > 0 && shopping_items.find((cartItem)=> cartItem.barcode === item.barcode);
}

module.exports = addItem;