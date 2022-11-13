interface ShopOptions {
  [index: number]: OptionData;
}

interface CartOutput {
  checkoutItemName: string;
  typeLabel: string;
}

interface OptionData {
  purchaseType: string;
  itemQuantity: number;
  quantityExplainerText?: string;
  installmentHelperText?: string;
  strikethrough: string;
  pricePerUnit: string;
  unitLabel: string;
  price: string;
  cartOutput: CartOutput;
}

export type { ShopOptions, CartOutput, OptionData };
