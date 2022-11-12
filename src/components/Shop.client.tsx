import { useState } from 'react';
import styles from './index.module.scss';
import AddToCartButton from './AddToCartButton.client';
import { OptionData } from './interfaces';
import QualityRadioInput from './qualityRadioInput.client';
import PurchaseTypeSelector from './PurchaseTypeSelector.client';
import PurchaseTypeDisplay from './PurchaseTypeDisplay.client';

export default function Shop({ shopOptions }) {

  const [purchaseType, setPurchaseType] = useState<string>("subscribe");
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [shoppingCart, setShoppingCart] = useState<OptionData[]>(new Array);

  const AFTERPAY_LOGO: string = '<img src="src/assets/logo-afterpay-colour@2x.png"/>';
  const AFTERPAY_REGEX: RegExp = /{{ afterpay }}/gm;

  const optionDataArray = shopOptions as Array<OptionData>;

  let findOption = (aPurchaseType: string, aQuantity: number): OptionData => { return optionDataArray.find(option => (option.purchaseType === aPurchaseType && option.itemQuantity === aQuantity)); }
  let selectedOption: OptionData = findOption(purchaseType, itemQuantity);
  let { quantityExplainerText, installmentHelperText, price, strikethrough } = selectedOption;

  return <div className={styles.wrapper}>
    <div>
      <h2>1. Select Purchase Type</h2>
      <PurchaseTypeSelector setType={setPurchaseType} selectedType={purchaseType} type={"subscribe"}>
        <PurchaseTypeDisplay 
          title={"Subscribe & Save"}
          descrip={"Easy to cancel, anytime"}
          price={findOption("subscribe", itemQuantity).pricePerUnit}
          priceLabel={findOption("subscribe", itemQuantity).unitLabel} />
      </PurchaseTypeSelector>
      <PurchaseTypeSelector setType={setPurchaseType} selectedType={purchaseType} type={"onetime"}>
        <PurchaseTypeDisplay 
          title={"One Time"}
          descrip={"One Time Purchase"}
          price={findOption("onetime", itemQuantity).pricePerUnit}
          priceLabel={findOption("onetime", itemQuantity).unitLabel} />
      </PurchaseTypeSelector>
    </div>
    <div>
      <h2>2. Quantity</h2>
      <QualityRadioInput setQty={setItemQuantity} selectedQty={itemQuantity} qty={1} />
      <QualityRadioInput setQty={setItemQuantity} selectedQty={itemQuantity} qty={2} />
      <QualityRadioInput setQty={setItemQuantity} selectedQty={itemQuantity} qty={3} />
      {quantityExplainerText &&
        <p dangerouslySetInnerHTML={{ __html: quantityExplainerText }}></p>
      }
    </div>

    {installmentHelperText &&
      <p className={styles.pillLogo} dangerouslySetInnerHTML={{ __html: installmentHelperText.replace(AFTERPAY_REGEX, AFTERPAY_LOGO) }}></p>
    }

    <AddToCartButton selectedItem={selectedOption} setCart={setShoppingCart} cart={shoppingCart}>
      Add to Cart - {<span className={styles.strikethrough}>{strikethrough}</span>} {price}
    </AddToCartButton>

  </div>
}
