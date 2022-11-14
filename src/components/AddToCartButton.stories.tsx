// eslint-disable-next-line import/no-unresolved
import AddToCartButton from "./AddToCartButton.client";

export default {
  component: AddToCartButton,
  title: "Add to Cart Button",
  args: {
    onPress: () => alert("Cart Information"),
    label: "Add to cart - ",
    strikethrough: "$43.00",
    price: "$39.99",
  },
};

const Template = (args) => <AddToCartButton {...args} />;

export const StrikeThrough = Template.bind({});

export const PriceOnly = Template.bind({});
PriceOnly.args = {
  strikethrough: "",
};
