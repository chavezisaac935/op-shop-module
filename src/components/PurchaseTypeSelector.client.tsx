export default function PurchaseTypeSelector({
  setType,
  selectedType,
  type,
  children,
}) {
  return (
    <div>
      <input
        type="radio"
        id={type}
        name="type"
        onChange={() => setType(type)}
        checked={selectedType === type}
      />
      <label htmlFor={type}>
        <div>{children}</div>
      </label>
    </div>
  );
}
