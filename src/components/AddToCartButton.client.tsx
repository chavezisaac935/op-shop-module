export default function AddToCartButton({
  onPress,
  label,
  strikethrough,
  price,
}) {
  return (
    <button className="cart-cta" onClick={() => onPress()}>
      {label}
      <span className="cart-cta__text-strikethrough">{strikethrough}</span>
      {price}
    </button>
  );
}
