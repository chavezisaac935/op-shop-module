export default function PurchaseTypeSelector({
  onPress,
  selectedOption,
  thisOptionType,
  title,
  descrip,
  strongDescrip,
  price,
  priceLabel,
}) {
  return (
    <div className="type-selector">
      <input
        className="type-selector__radio"
        type="radio"
        id={thisOptionType}
        name="type of purchase"
        onChange={onPress}
        checked={selectedOption === thisOptionType}
      />
      <label
        htmlFor={thisOptionType}
        className="type-selector__label-container"
      >
        <div className="type-selector__radio-container">
          <div className="input-indicator"></div>
        </div>
        <div className="type-selector__label">
          <h3 className="type-selector__label-title">{title}</h3>
          <p className="type-selector__label-description">
            {descrip}
            <br />
            <span className="type-selector__strong-description">
              {strongDescrip}
            </span>
          </p>
        </div>
        <div className="type-selector__price">
          <span className="type-selector__price-ammount">{price}</span>
          <span className="type-selector__price-unit">{priceLabel}</span>
        </div>
      </label>
    </div>
  );
}
