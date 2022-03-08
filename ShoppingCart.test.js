const addItem = require("./ShoppingCart");

describe("Add Items to Shopping Cart",() => {
  test("Add item with barcode 1001",() => {
    expect(addItem(1001)).toEqual(expect.arrayContaining([
     expect.objectContaining({barcode:1001,quantity:1})
    ]))
  })

  test("Increment the quantity of item with barcode 1001 ",() => {
    expect(addItem(1001)).toEqual(expect.arrayContaining([
     expect.objectContaining({barcode:1001,quantity:2})
    ]))
  })

  test("Add item with barcode 2002",() => {
    expect(addItem(2002)).toEqual(expect.arrayContaining([
     expect.objectContaining({barcode:2002})
    ]))
  })
});
