// eslint-disable-next-line import/no-unresolved
<<<<<<< Updated upstream
import { OptionData } from "./interfaces";
=======
import { CartItem } from "./interfaces";
>>>>>>> Stashed changes

const GROUP = {
  key: "purchaseType",
  value: "onetime",
  sumKey: "itemQuantity",
};

<<<<<<< Updated upstream
const optionToString = (opt: OptionData): string => {
=======
const optionToString = (opt: CartItem): string => {
>>>>>>> Stashed changes
  // Return the built string
  return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${opt.itemQuantity}`;
};

<<<<<<< Updated upstream
const totalQtyOptionToString = (opt: OptionData, qty: number): string => {
=======
const totalQtyOptionToString = (opt: CartItem, qty: number): string => {
>>>>>>> Stashed changes
  // Return the built string
  return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${qty}`;
};

<<<<<<< Updated upstream
const cartToString = (cart: OptionData[]) => {
=======
const cartToString = (cart: CartItem[]) => {
>>>>>>> Stashed changes
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
