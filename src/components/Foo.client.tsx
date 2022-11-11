import { useState } from 'react';
import styles from './index.module.scss';


export default function Foo() {

  interface ShopStates{
    [index: number]: ProductSelectionData,
  }

  interface ProductSelectionData{
    purchaseType: string,
    itemQuantity: number,
    strikethrough: string,
    price: number
  }

  const shopData: ShopStates = [
      {
        purchaseType: 'subscribe',
        itemQuantity: 1,
        strikethrough: '39.99',
        price: 34.99,
      },{
        purchaseType: 'subscribe',
        itemQuantity: 2,
        strikethrough: '79.98',
        price: 63.98,
      },{
        purchaseType: 'subscribe',
        itemQuantity: 3,
        strikethrough: '120',
        price: 90,
      },{
        purchaseType: 'onetime',
        itemQuantity: 1,
        strikethrough: '',
        price: 39.99,
      },{
        purchaseType: 'onetime',
        itemQuantity: 2,
        strikethrough: '79.98',
        price: 69.98,
      },{
        purchaseType: 'onetime',
        itemQuantity: 3,
        strikethrough: '120',
        price: 99.00,
      }
  ]
  const [purchaseType, setPurchaseType] = useState<string>("subscribe");
  const [itemQuantity, setItemQuantity] = useState<number>(1);

  const shopDataArray = shopData as Array<any>;
  let selectionData =  (aPurchaseType, aQuantity) => {return shopDataArray.find(price => (price.purchaseType === aPurchaseType && price.itemQuantity === aQuantity));}

  return <div className={styles.wrapper}>

    <h2>1. Select Purchase Type</h2>
    <div>
      <input type="radio" id="subscribe" name='type' onChange={() => setPurchaseType("subscribe")} checked={purchaseType === "subscribe"} />
      <label htmlFor="subscribe">
        <div>
          <h3>Subscribe & Save</h3>
          <span>Easy to cancel, anytime</span>
          <span><strong>Free Shipping Always</strong></span>
          <span className='price'>${selectionData("subscribe", itemQuantity).price/itemQuantity}</span>
          <span className='unit'>/BOTTLE</span>

        </div>
      </label>
    </div>
    <div>
      <input type="radio" id="onetime" name='type' onChange={() => setPurchaseType("onetime")} checked={purchaseType === "onetime"} />
      <label htmlFor="onetime">
        <div>
          <h3>One Time</h3>
          <span>One Time Purchase</span>
          <span><strong>Free Shipping Always</strong></span>
          <span className='price'>${selectionData("onetime", itemQuantity).price/itemQuantity}</span>
          <span className='unit'>/BOTTLE</span>
        </div>
      </label>
    </div>
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

    <button>Add to Cart - {selectionData(purchaseType, itemQuantity).price}</button>
  </div>;
}
