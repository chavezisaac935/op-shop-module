export default function QualityRadioInput({ setQty, selectedQty, qty }) {
  return (
    <div className="quality-selector">
      <input
        className="quality-selector__input"
        type="radio"
        id={`qty-${qty}`}
        name="qty"
        onChange={() => setQty(qty)}
        checked={selectedQty === qty}
      />
      <label className="quality-selector__label" htmlFor={`qty-${qty}`}>
        {qty}
      </label>
    </div>
  );
}
