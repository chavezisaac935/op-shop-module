import {OptionData} from './interfaces';


export default function PurchaseTypeSelector({setType, selectedType, optData, selectedQty}) {
    const optionDataArray = optData as Array<OptionData>;
    
    let selectionData = (aPurchaseType: string, aQuantity: number): OptionData => { return optionDataArray.find(option => (option.purchaseType === aPurchaseType && option.itemQuantity === aQuantity)); }
    return <div>
        <input type="radio" id="subscribe" name='type' onChange={() => setType("subscribe")} checked={selectedType === "subscribe"} />
        <label htmlFor="subscribe">
            <div>
                <h3>Subscribe & Save</h3>
                <span>Easy to cancel, anytime</span>
                <span><strong>Free Shipping Always</strong></span>
                <span className='price'>{selectionData("subscribe", selectedQty).pricePerUnit}</span>
                <span className='unit'>{selectionData("subscribe", selectedQty).unitLabel}</span>

            </div>
        </label>
    </div>;
}