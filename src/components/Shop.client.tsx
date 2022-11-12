import { useState } from 'react';
import styles from './index.module.scss';
import AddToCartButton from './AddToCartButton.client';
import {OptionData} from './interfaces';
import QualityRadioInput from './qualityRadioInput.client';
import PurchaseTypeSelector from './PurchaseTypeSelector.client';

export default function Shop({shopOptions}) {
  
  const [purchaseType, setPurchaseType] = useState<string>("subscribe");
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [shoppingCart, setShoppingCart] = useState<OptionData[]>(new Array);

  const AFTERPAY_LOGO: string = '<img src="src/assets/logo-afterpay-colour@2x.png"/>';
  const AFTERPAY_REGEX: RegExp = /{{ afterpay }}/gm;

  const optionDataArray = shopOptions as Array<OptionData>;
  
  let selectionData = (aPurchaseType: string, aQuantity: number): OptionData => { return optionDataArray.find(option => (option.purchaseType === aPurchaseType && option.itemQuantity === aQuantity)); }
  let currentSelection: OptionData = selectionData(purchaseType, itemQuantity);
  let {quantityExplainerText, installmentHelperText, price, strikethrough} = currentSelection;
  return <div className={styles.wrapper}>
    
    <div>
      <h2>1. Select Purchase Type</h2>
      <PurchaseTypeSelector setType={setPurchaseType} selectedType={purchaseType} optData={shopOptions} selectedQty={itemQuantity}/>
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
      <QualityRadioInput setQty={setItemQuantity} selectedQty={itemQuantity} qty={1}/>
      <QualityRadioInput setQty={setItemQuantity} selectedQty={itemQuantity} qty={2}/>
      <QualityRadioInput setQty={setItemQuantity} selectedQty={itemQuantity} qty={3}/>

      <p dangerouslySetInnerHTML={{__html: quantityExplainerText}}></p>

    </div>

    <p className={styles.pillLogo} dangerouslySetInnerHTML={{ __html: installmentHelperText.replace(AFTERPAY_REGEX, AFTERPAY_LOGO) }}></p>

    <AddToCartButton selectedItem={currentSelection} setCart={setShoppingCart} cart={shoppingCart}>
      Add to Cart - {<span className={styles.strikethrough}>{strikethrough}</span>} {price}  
    </AddToCartButton>

  </div>
}
