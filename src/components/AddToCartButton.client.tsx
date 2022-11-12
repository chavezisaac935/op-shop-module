import { useEffect } from 'react';
import styles from './index.module.scss';
import { OptionData } from './interfaces';


export default function AddToCartButton({ selectedItem, setCart, cart, children }) {
  const shoppingCartArray = cart as Array<OptionData>;
  const GROUP = {
    key: 'purchaseType',
    value: 'onetime',
    sumKey: 'itemQuantity',
  }

  let optionToString = (opt: OptionData): string => {
    // Return the built string
    return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${opt.itemQuantity}`;
  }

  let totalQtyOptionToString = (opt: OptionData, qty: number): string => {
    // Return the built string
    return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${qty}`;
  }
  // Define header structure
  const headerOutput = "Item Name | Type | Qty";
  let groupableFound = false;

  let cartToString = (cart: OptionData[]) => {
    let totalItemQty = cart.filter((groupableCartItem) => groupableCartItem[GROUP.key] === GROUP.value)
                           .reduce((acc, next)=> acc += next[GROUP.sumKey], 0);

    return cart.reduce((outputString, cartItem) => {
      if(cartItem[GROUP.key] === GROUP.value){
        if(!groupableFound){
          groupableFound = true;
        } else {
          return outputString;
        }
      }
      return `${outputString}\n${cartItem[GROUP.key] === GROUP.value ? totalQtyOptionToString(cartItem, totalItemQty) : optionToString(cartItem)}`
    },'');
  }

  let addToShoppingCart = () => {
      const updatedCart = [...shoppingCartArray, selectedItem];
      setCart(updatedCart);
      return updatedCart;
  }

  let cartButtonClickHandler = () => {
    alert(cartToString(addToShoppingCart()));
  }
  
  return (
    <button
      onClick={() => { cartButtonClickHandler() }}
      className={styles.button}>
      {children}
    </button>);
}