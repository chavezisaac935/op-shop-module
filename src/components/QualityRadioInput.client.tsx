export default function QualityRadioInput({setQty, selectedQty, qty}){
    return <div>
    <input type="radio" id={`qty-${qty}`} name='qty' onChange={() => setQty(qty)} checked={selectedQty === qty} />
    <label htmlFor={`qty-${qty}`}>{qty}</label>
  </div>;
}

