import styles from './index.module.scss';
import {OptionData} from './interfaces';


export default function AddToCartButton({selectedItem, setCart, cart, children}){


    const shoppingCartArray = cart as Array<OptionData>;


    let optionToString = (opt: OptionData):string => {
        // Return the built string
        return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${opt.cartOutput.quantity}`;
      }
    
    let addToShoppingCart = (option: OptionData):OptionData[] => {
      let arr = [...shoppingCartArray, option];
      setCart(arr);
      return arr;
    }
    
    let cartButtonClickHandler = () => {
        let output = "Item Name | Type | Quantity \n";
        output = output + addToShoppingCart(selectedItem).map((option) =>{console.log(optionToString(option)); return optionToString(option)}).join('\n')
        alert(output);
      }
    return <button 
        onClick={() => {cartButtonClickHandler()}} 
        className={styles.button}>
            {children}
    </button>;
}