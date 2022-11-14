/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
import { useState } from "react";

import AddToCartButton from "./AddToCartButton.client";
import { CartItem } from "./interfaces";
import QualityRadioInput from "./qualityRadioInput.client";
import PurchaseTypeSelector from "./PurchaseTypeSelector.client";
import shoppingFunction from "./cart-helper";

export default function Shop({ shopData }) {
  const [purchaseType, setPurchaseType] = useState<string>("subscribe");
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [shoppingCart, setShoppingCart] = useState<CartItem[]>([]);

  const shoppingCartArray = shoppingCart as Array<CartItem>;

  const AFTERPAY_LOGO = "<img src='src/assets/logo-afterpay-colour@2x.png'/>";
  const AFTERPAY_REGEX = /{{ afterpay }}/gm;

  const optionDataArray = shopData as Array<CartItem>;

  const findOption = (aPurchaseType: string, aQuantity: number): CartItem => {
    return optionDataArray.find(
      (option) =>
        option.purchaseType === aPurchaseType &&
        option.itemQuantity === aQuantity
    );
  };

  const selectedOption: CartItem = findOption(purchaseType, itemQuantity);
  const { quantityExplainerText, installmentHelperText, price, strikethrough } =
    selectedOption;

  const cartButtonClickHandler = () => {
    alert(shoppingFunction.cartToString(addToShoppingCart()));
  };

  const addToShoppingCart = () => {
    const updatedCart = [...shoppingCartArray, selectedOption];
    setShoppingCart(updatedCart);
    // Since React hooks are asynchronous it is important to return a copy of the updated cart
    return updatedCart;
  };

  return (
    <div className="shop-selection">
      <div className="shop-selection__input">
        <div className="shop-selection__section shop-selection__section--type">
          <h2 className="shop-selection__section-title">
            1. Select Purchase Type
          </h2>
          <PurchaseTypeSelector
            title={"Subscribe & Save"}
            descrip={"Easy to cancel, anytime"}
            price={findOption("subscribe", itemQuantity).pricePerUnit}
            priceLabel={findOption("subscribe", itemQuantity).unitLabel}
            onPress={() => setPurchaseType("subscribe")}
            selectedOption={purchaseType}
            thisOptionType={"subscribe"}
          />
          <PurchaseTypeSelector
            title={"One Time"}
            descrip={"One Time Purchase"}
            price={findOption("onetime", itemQuantity).pricePerUnit}
            priceLabel={findOption("onetime", itemQuantity).unitLabel}
            onPress={() => setPurchaseType("onetime")}
            selectedOption={purchaseType}
            thisOptionType={"onetime"}
          />
        </div>
        <div className="shop-selection__section shop-selection__section--qty">
          <h2 className="shop-selection__section-title">2. Quantity</h2>
          <div className="shop-selection__qty-radiogroup">
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
          </div>
        </div>
        {quantityExplainerText ? (
          <p dangerouslySetInnerHTML={{ __html: quantityExplainerText }}></p>
        ) : null}
      </div>

      {installmentHelperText ? (
        <p
          dangerouslySetInnerHTML={{
            __html: installmentHelperText.replace(
              AFTERPAY_REGEX,
              AFTERPAY_LOGO
            ),
          }}
        ></p>
      ) : null}

      <AddToCartButton
        onPress={cartButtonClickHandler}
        label={"Add to Cart - "}
        strikethrough={strikethrough}
        price={price}
      />
    </div>
  );
}
