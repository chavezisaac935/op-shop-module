// eslint-disable-next-line import/no-unresolved
import { OptionData } from "./interfaces";

const GROUP = {
  key: "purchaseType",
  value: "onetime",
  sumKey: "itemQuantity",
};


const optionToString = (opt: OptionData): string => {
  // Return the built string
  return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${opt.itemQuantity}`;
};

const totalQtyOptionToString = (opt: OptionData, qty: number): string => {
  // Return the built string
  return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${qty}`;
};

const cartToString = (cart: OptionData[]) => {
  // Define header structure
  const headerOutput = "Item Name | Type | Qty";
  let groupableFound = false;
  const totalItemQty = cart
    .filter((groupableCartItem) => groupableCartItem[GROUP.key] === GROUP.value)
    .reduce((acc, next) => (acc += next[GROUP.sumKey]), 0);

  return (
    headerOutput +
    cart.reduce((outputString, cartItem) => {
      if (cartItem[GROUP.key] === GROUP.value) {
        if (!groupableFound) {
          groupableFound = true;
        } else {
          return outputString;
        }
      }
      return `${outputString}\n${
        cartItem[GROUP.key] === GROUP.value
          ? totalQtyOptionToString(cartItem, totalItemQty)
          : optionToString(cartItem)
      }`;
    }, "")
  );
};



export default { cartToString };
