interface ShopData {
  [index: number]: CartItem;
}

interface CartOutput {
  checkoutItemName: string;
  typeLabel: string;
}

interface CartItem {
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

export type { ShopData, CartOutput, CartItem };
