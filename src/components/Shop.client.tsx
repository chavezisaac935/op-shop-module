import { useState } from "react";
import "./index.scss";
import AddToCartButton from "./AddToCartButton.client";
import { OptionData } from "./interfaces";
import QualityRadioInput from "./qualityRadioInput.client";
import PurchaseTypeSelector from "./PurchaseTypeSelector.client";
import PurchaseTypeDisplay from "./PurchaseTypeDisplay.client";

export default function Shop({ shopOptions }) {
  const [purchaseType, setPurchaseType] = useState<string>("subscribe");
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [shoppingCart, setShoppingCart] = useState<OptionData[]>([]);

  const AFTERPAY_LOGO = "<img src='src/assets/logo-afterpay-colour@2x.png'/>";
  const AFTERPAY_REGEX = /{{ afterpay }}/gm;

  const optionDataArray = shopOptions as Array<OptionData>;

  const findOption = (aPurchaseType: string, aQuantity: number): OptionData => {
    return optionDataArray.find(
      (option) =>
        option.purchaseType === aPurchaseType &&
        option.itemQuantity === aQuantity
    );
  };
  const selectedOption: OptionData = findOption(purchaseType, itemQuantity);
  const { quantityExplainerText, installmentHelperText, price, strikethrough } =
    selectedOption;

  const GROUP = {
    key: "purchaseType",
    value: "onetime", 
    sumKey: "itemQuantity",
  };

  const shoppingCartArray = shoppingCart as Array<OptionData>;

  const optionToString = (opt: OptionData): string => {
    // Return the built string
    return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${opt.itemQuantity}`;
  };

  const totalQtyOptionToString = (opt: OptionData, qty: number): string => {
    // Return the built string
    return `${opt.cartOutput.checkoutItemName} | ${opt.cartOutput.typeLabel} | ${qty}`;
  };

  const cartToString = (cart: OptionData[]) => {
    // Define header structure
    const headerOutput = "Item Name | Type | Qty";
    let groupableFound = false;
    const totalItemQty = cart
      .filter(
        (groupableCartItem) => groupableCartItem[GROUP.key] === GROUP.value
      )
      .reduce((acc, next) => (acc += next[GROUP.sumKey]), 0);

    return (
      headerOutput +
      cart.reduce((outputString, cartItem) => {
        if (cartItem[GROUP.key] === GROUP.value) {
          if (!groupableFound) {
            groupableFound = true;
          } else {
            return outputString;
          }
        }
        return `${outputString}\n${
          cartItem[GROUP.key] === GROUP.value
            ? totalQtyOptionToString(cartItem, totalItemQty)
            : optionToString(cartItem)
        }`;
      }, "")
    );
  };

  const cartButtonClickHandler = () => {
    alert(cartToString(addToShoppingCart()));
  };

  const addToShoppingCart = () => {
    const updatedCart = [...shoppingCartArray, selectedOption];
    setShoppingCart(updatedCart);
    // Since React hooks are asynchronous it is important to return a copy of the updated cart
    return updatedCart;
  };

  return (
    <div className="shop-selection">
      <div>
        <h2 className="shop-section__section-title">1. Select Purchase Type</h2>
        <PurchaseTypeSelector
          setType={setPurchaseType}
          selectedType={purchaseType}
          type={"subscribe"}
        >
          <PurchaseTypeDisplay
            title={"Subscribe & Save"}
            descrip={"Easy to cancel, anytime"}
            price={findOption("subscribe", itemQuantity).pricePerUnit}
            priceLabel={findOption("subscribe", itemQuantity).unitLabel}
          />
        </PurchaseTypeSelector>
        <PurchaseTypeSelector
          setType={setPurchaseType}
          selectedType={purchaseType}
          type={"onetime"}
        >
          <PurchaseTypeDisplay
            title={"One Time"}
            descrip={"One Time Purchase"}
            price={findOption("onetime", itemQuantity).pricePerUnit}
            priceLabel={findOption("onetime", itemQuantity).unitLabel}
          />
        </PurchaseTypeSelector>
      </div>
      <div>
        <h2 className="shop-section__section-title">2. Quantity</h2>
        <QualityRadioInput
          setQty={setItemQuantity}
          selectedQty={itemQuantity}
          qty={1}
        />
        <QualityRadioInput
          setQty={setItemQuantity}
          selectedQty={itemQuantity}
          qty={2}
        />
        <QualityRadioInput
          setQty={setItemQuantity}
          selectedQty={itemQuantity}
          qty={3}
        />
        {quantityExplainerText && (
          <p dangerouslySetInnerHTML={{ __html: quantityExplainerText }}></p>
        )}
      </div>

      {installmentHelperText && (
        <p
          dangerouslySetInnerHTML={{
            __html: installmentHelperText.replace(
              AFTERPAY_REGEX,
              AFTERPAY_LOGO
            ),
          }}
        ></p>
      )}

      <AddToCartButton
        onPress={cartButtonClickHandler}
        label={"Add to Cart - "}
        strikethrough={strikethrough}
        price={price}
      />
    </div>
  );
}
