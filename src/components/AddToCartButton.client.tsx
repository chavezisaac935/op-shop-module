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
  
  let cartToString = (cart: OptionData[]) => {
    // Define header structure
    const headerOutput = "Item Name | Type | Qty";
    let groupableFound = false;
    let totalItemQty = cart.filter((groupableCartItem) => groupableCartItem[GROUP.key] === GROUP.value)
                           .reduce((acc, next)=> acc += next[GROUP.sumKey], 0);

    return headerOutput + cart.reduce((outputString, cartItem) => {
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
      // Since React hooks are asynchronous it is important to return a copy of the updated cart
      return updatedCart;
  }

  let cartButtonClickHandler = () => {
    alert(cartToString(addToShoppingCart()));
  }
  
  return (
    <button 
      className='cart-cta'
      onClick={() => { cartButtonClickHandler() }}>
      {children}
    </button>);
}