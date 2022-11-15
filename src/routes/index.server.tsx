// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-unresolved */
import Shop from "../components/Shop.client";
import { ShopData } from "../assets/interfaces";

export default function Home() {
  const shopData: ShopData = [
    {
      purchaseType: "subscribe",
      itemQuantity: 1,
      quantityExplainerText: "1 bottle ships every 1 month",
      installmentHelperText: "",
      strikethrough: "$39.99",
      pricePerUnit: "$34.99",
      unitLabel: "/BOTTLE",
      price: "$34.99",
      cartOutput: {
        checkoutItemName: "MENO - Menopause Vitamin Capsules",
        typeLabel: "Sub (ships every month)",
      },
    },
    {
      purchaseType: "subscribe",
      itemQuantity: 2,
      quantityExplainerText: "2 bottles ship 2 months",
      installmentHelperText: "",
      strikethrough: "$79.98",
      pricePerUnit: "$31.99",
      unitLabel: "/BOTTLE",
      price: "$63.98",
      cartOutput: {
        checkoutItemName: "MENO Capsules - 2 Bottle Subscription",
        typeLabel: "Sub (ships 2 months)",
      },
    },
    {
      purchaseType: "subscribe",
      itemQuantity: 3,
      quantityExplainerText:
        "Congrats, you’ve selected our best value!<br> 3 bottles ship every 3 months",
      installmentHelperText: "",
      strikethrough: "$120",
      pricePerUnit: "$30",
      unitLabel: "/BOTTLE",
      price: "$90",
      cartOutput: {
        checkoutItemName: "MENO Capsules - 3 Bottle Subscription",
        typeLabel: "Sub (ships 3 months)",
      },
    },
    {
      purchaseType: "onetime",
      itemQuantity: 1,
      quantityExplainerText: "",
      installmentHelperText: "{{ afterpay }} available for orders above $45",
      strikethrough: "",
      pricePerUnit: "$39.99",
      unitLabel: "/BOTTLE",
      price: "$39.99",
      cartOutput: {
        checkoutItemName: "MENO - Menopause Vitamin Capsules",
        typeLabel: "One time",
      },
    },
    {
      purchaseType: "onetime",
      itemQuantity: 2,
      quantityExplainerText: "",
      installmentHelperText:
        "Only <span class='strong'>$17.50</span> with {{ afterpay }} <br/> in 4 interest-free payments",
      strikethrough: "$79.98",
      pricePerUnit: "$34.99",
      unitLabel: "/BOTTLE",
      price: "$69.98",
      cartOutput: {
        checkoutItemName: "MENO - Menopause Vitamin Capsules",
        typeLabel: "One time",
      },
    },
    {
      purchaseType: "onetime",
      itemQuantity: 3,
      quantityExplainerText: "",
      installmentHelperText:
        "Only <span class='strong'>$24.75</span> with {{ afterpay }} <br/>in 4 interest-free payments",
      strikethrough: "$120",
      pricePerUnit: "$33",
      unitLabel: "/BOTTLE",
      price: "$99",
      cartOutput: {
        checkoutItemName: "MENO - Menopause Vitamin Capsules",
        typeLabel: "One time",
      },
    },
  ];

  return (
    <div>
      <Shop shopData={shopData} />
    </div>
  );
}
