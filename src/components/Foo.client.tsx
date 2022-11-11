import { useState } from 'react';
import styles from './index.module.scss';
import InlineImage from './InlineImage.client';


export default function Foo() {

  interface ShopOptions {
    [index: number]: OptionData
  }

  interface CartOutput {
    checkoutItemName: string,
    typeLabel: string,
    quantity: number
  }
  
  interface OptionData {
    purchaseType: string,
    itemQuantity: number,
    quantityExplainerText?: string,
    installmentHelperText?: string,
    strikethrough: string,
    pricePerUnit: string,
    unitLabel: string,
    price: string
    cartOutput: CartOutput,
  }

  const shopOptions: ShopOptions = [
    {
      purchaseType: 'subscribe',
      itemQuantity: 1,
      quantityExplainerText: "1 bottle ships every 1 month",
      installmentHelperText: '',
      strikethrough: '$39.99',
      pricePerUnit: '$34.99',
      unitLabel: '/BOTTLE',
      price: '$34.99',
      cartOutput: {
        checkoutItemName: 'MENO - Menopause Vitamin Capsules',
        typeLabel: 'Sub (ships every month)',
        quantity: 1
      }
    }, {
      purchaseType: 'subscribe',
      itemQuantity: 2,
      quantityExplainerText: "2 bottles ship every 2 months",
      installmentHelperText: '',
      strikethrough: '$79.98',
      pricePerUnit: '$31.99',
      unitLabel: '/BOTTLE',
      price: '$63.98',
      cartOutput: {
        checkoutItemName: 'MENO - Menopause Vitamin Capsules',
        typeLabel: 'Sub (ships every 2 months)',
        quantity: 2
      }
    }, {
      purchaseType: 'subscribe',
      itemQuantity: 3,
      quantityExplainerText: "Congrats, you’ve selected our best value!<br> 3 bottles ship every 3 months",
      installmentHelperText: '',
      strikethrough: '$120',
      pricePerUnit: '$30',
      unitLabel: '/BOTTLE',
      price: '$90',
      cartOutput: {
        checkoutItemName: 'MENO - Menopause Vitamin Capsules',
        typeLabel: 'Sub (ships every 3 months)',
        quantity: 3
      }
    }, {
      purchaseType: 'onetime',
      itemQuantity: 1,
      installmentHelperText: '{{ afterpay }} available for orders above $45',
      strikethrough: '',
      pricePerUnit: '$39.99',
      unitLabel: '/BOTTLE',
      price: '$39.99',
      cartOutput: {
        checkoutItemName: 'MENO - Menopause Vitamin Capsules',
        typeLabel: 'One time',
        quantity: 1
      }
    }, {
      purchaseType: 'onetime',
      itemQuantity: 2,
      installmentHelperText: 'Only $17.50 with {{ afterpay }} <br/> in 4 interest-free payments',
      strikethrough: '$79.98',
      pricePerUnit: '$34.99',
      unitLabel: '/BOTTLE',
      price: '$69.98',
      cartOutput: {
        checkoutItemName: 'MENO - Menopause Vitamin Capsules',
        typeLabel: 'One time',
        quantity: 2
      }
    }, {
      purchaseType: 'onetime',
      itemQuantity: 3,
      installmentHelperText: 'Only $24.75 with {{ afterpay }} <br/>in 4 interest-free payments',
      strikethrough: '$120',
      pricePerUnit: '$33',
      unitLabel: '/BOTTLE',
      price: '$99',
      cartOutput: {
        checkoutItemName: 'MENO - Menopause Vitamin Capsules',
        typeLabel: 'One time',
        quantity: 3
      }
    },
  ]
  const [purchaseType, setPurchaseType] = useState<string>("subscribe");
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [shoppingCart, setShoppingCart] = useState<OptionData[]>(new Array);

  const AFTERPAY_LOGO: string = '<img src="src/assets/logo-afterpay-colour@2x.png"/>';
  const AFTERPAY_REGEX: RegExp = /{{ afterpay }}/gm;

  const optionDataArray = shopOptions as Array<OptionData>;
  const shoppingCartArray = shoppingCart as Array<OptionData>;
  
  let selectionData = (aPurchaseType: string, aQuantity: number): OptionData => { return optionDataArray.find(option => (option.purchaseType === aPurchaseType && option.itemQuantity === aQuantity)); }
  let currentSelection: OptionData = selectionData(purchaseType, itemQuantity);

  let cartButtonClickHandler = () => {
     
    let output = "Item Name | Type | Quantity \n";

    output = output + addToShoppingCart(currentSelection).map((option) =>{console.log(optionToString(option)); return optionToString(option)}).join('\n')
    
    alert(output);
  }

  let addToShoppingCart = (option: OptionData):OptionData[] => {
    let arr = [...shoppingCartArray, option];
    setShoppingCart(arr);
    return arr;
  }

  let optionToString = (opt: OptionData):string => {
    // Return the built string
    return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${opt.cartOutput.quantity}`;
  }

  return <div className={styles.wrapper}>
    <div>
      <h2>1. Select Purchase Type</h2>
      <div>
        <input type="radio" id="subscribe" name='type' onChange={() => setPurchaseType("subscribe")} checked={purchaseType === "subscribe"} />
        <label htmlFor="subscribe">
          <div>
            <h3>Subscribe & Save</h3>
            <span>Easy to cancel, anytime</span>
            <span><strong>Free Shipping Always</strong></span>
            <span className='price'>{selectionData("subscribe", itemQuantity).pricePerUnit}</span>
            <span className='unit'>{selectionData("subscribe", itemQuantity).unitLabel}</span>

          </div>
        </label>
      </div>
      <div>
        <input type="radio" id="onetime" name='type' onChange={() => setPurchaseType("onetime")} checked={purchaseType === "onetime"} />
        <label htmlFor="onetime">
          <div>
            <h3>One Time</h3>
            <span>One Time Purchase</span>
            <span className='price'>{selectionData("onetime", itemQuantity).pricePerUnit}</span>
            <span className='unit'>{selectionData("onetime", itemQuantity).unitLabel}</span>
          </div>
        </label>
      </div>
    </div>
    <div>
      <h2>2. Quantity</h2>
      <div>
        <input type="radio" id="one" name='qty' onChange={() => setItemQuantity(1)} checked={itemQuantity === 1} />
        <label htmlFor="one">1</label>
      </div>
      <div>
        <input type="radio" id="two" name='qty' onChange={() => setItemQuantity(2)} checked={itemQuantity === 2} />
        <label htmlFor="two">2</label>
      </div>
      <div>
        <input type="radio" id="three" name='qty' onChange={() => setItemQuantity(3)} checked={itemQuantity === 3} />
        <label htmlFor="three">3</label>
      </div>
      <p dangerouslySetInnerHTML={{__html: currentSelection.quantityExplainerText}}></p>

    </div>

    <p className={styles.pillLogo} dangerouslySetInnerHTML={{ __html: currentSelection?.installmentHelperText.replace(AFTERPAY_REGEX, AFTERPAY_LOGO) }}></p>

    <button onClick={() => {cartButtonClickHandler()}} className={styles.button}>Add to Cart - {<span className={styles.strikethrough}>{currentSelection.strikethrough}</span>} {currentSelection.price}</button>

  </div>
}
