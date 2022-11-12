export default function PurchaseTypeDisplay({title, descrip, strongDescrip="", price, priceLabel}) {
    return (
        <>
        <h3>{title}</h3>
        <p>{descrip}<br /><span>{strongDescrip}</span></p>
        <span className='price'>{price}</span>
        <span className='unit'>{priceLabel}</span>
        </>
    );
}