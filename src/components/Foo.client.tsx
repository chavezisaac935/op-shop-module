import { useState } from 'react';
import styles from './index.module.scss';

const prices = {
  subscribe: {
    qty: [
    {
      label: 1,
      strikethrough: '39.99',
      price: 34.99,
    },
    {
      label: 2,
      strikethrough: '79.98',
      price: 63.98,
    },
    {
      label: 3,
      strikethrough: '120',
      price: 90,
    },
  ]},
  onetime: {
    qty: [
    {
      label: 1,
      strikethrough: '',
      price: 39.99,
    },
    {
      label: 2,
      price: 69.98,
    },
    {
      label: 3,
      price: 99.00,
    },
  ]}
}

export default function Foo() {

  const [purchaseType, setPurchaseType] = useState("subscribe");
 
  const onChangePurchaseType = () => {

  }
  
  return <div className={styles.wrapper}>
    
    <h2>1. Select Purchase Type</h2>
    <div>
      <input type="radio" id="subscribe" name='type' onChange={() => setPurchaseType("subscribe")} checked={purchaseType === "subscribe"}/>
     <label htmlFor="subscribe">
      <div>
      <h3>Subscribe & Save</h3>
        <span>Easy to cancel, anytime</span>
        <span><strong>Free Shipping Always</strong></span>
        <span className='price'>$34.99</span>
        <span className='unit'>/BOTTLE</span>

      </div>
      </label> 
    </div>
    <div>
      <input type="radio" id="onetime" name='type' onChange={() => setPurchaseType("onetime")} checked={purchaseType === "onetime"}/>
      <label htmlFor="onetime">
        <div>
        <h3>One Time</h3>
        <span>One Time Purchase</span>
        <span><strong>Free Shipping Always</strong></span>
        <span className='price'>$39.99</span>
        <span className='unit'>/BOTTLE</span>
        </div>
      </label>
    </div>
    <h2>2. Quantity</h2>
    <div>
      <input type="radio" id="one" name='qty'/>
      <label htmlFor="one">1</label>
    </div>
    <div>
      <input type="radio" id="two" name='qty'/>
      <label htmlFor="two">2</label>
    </div>
    <div>
      <input type="radio" id="three" name='qty'/>
      <label htmlFor="three">3</label>
    </div>

    <button>Add to Cart - 39.99</button>
  </div>;
}
