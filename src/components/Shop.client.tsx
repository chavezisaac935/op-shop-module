import { useState } from 'react';
import styles from './index.module.scss';
import AddToCartButton from './AddToCartButton.client';
import {ShopOptions, OptionData} from './interfaces';

export default function Shop({shopOptions}) {
  
  const [purchaseType, setPurchaseType] = useState<string>("subscribe");
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [shoppingCart, setShoppingCart] = useState<OptionData[]>(new Array);

  const AFTERPAY_LOGO: string = '<img src="src/assets/logo-afterpay-colour@2x.png"/>';
  const AFTERPAY_REGEX: RegExp = /{{ afterpay }}/gm;

  const optionDataArray = shopOptions as Array<OptionData>;
  
  let selectionData = (aPurchaseType: string, aQuantity: number): OptionData => { return optionDataArray.find(option => (option.purchaseType === aPurchaseType && option.itemQuantity === aQuantity)); }
  let currentSelection: OptionData = selectionData(purchaseType, itemQuantity);

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
    <AddToCartButton selectedItem={currentSelection} setCart={setShoppingCart} cart={shoppingCart} strikethrogh={currentSelection.strikethrough} price={currentSelection.price}/>

  </div>
}
