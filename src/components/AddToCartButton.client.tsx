import styles from './index.module.scss';
import { OptionData } from './interfaces';


export default function AddToCartButton({ selectedItem, setCart, cart, children }) {

  const shoppingCartArray = cart as Array<OptionData>;
  const GROUP_BY = {
    match_key: 'purchaseType',
    match_value: 'onetime',
    additive_key: 'itemQuantity',
  }

  // const summarizeItemsBy = () => {
  //   let existingItem = cart.find((cartItem)=>cartItem[GROUP_BY.match_key] === GROUP_BY.match_value)
  // };

  let optionToString = (opt: OptionData): string => {
    // Return the built string
    return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${opt.itemQuantity}`;
  }

  let addToShoppingCart = (itemToAdd: OptionData): OptionData[] => {
    let existingItem = cart.find((cartItem)=>cartItem[GROUP_BY.match_key] === GROUP_BY.match_value)
    if(itemToAdd[GROUP_BY.match_key] === GROUP_BY.match_value && existingItem) {
      existingItem[GROUP_BY.additive_key] = existingItem[GROUP_BY.additive_key] + itemToAdd[GROUP_BY.additive_key];
        return cart;
    } else{
      let arr = [...shoppingCartArray, itemToAdd];
      setCart(arr);
      return arr;
    }
  }

  let cartButtonClickHandler = () => {
    let output = "Item Name | Type | Quantity \n";
    output = output + addToShoppingCart(selectedItem).map((option) => { console.log(optionToString(option)); return optionToString(option) }).join('\n')
    alert(output);
  }
  
  return (
    <button
      onClick={() => { cartButtonClickHandler() }}
      className={styles.button}>
      {children}
    </button>);
}