import React from "react";
import AddToCartButton from "./AddToCartButton.client";
import '../components/index.scss';

export default {
    component: AddToCartButton,
    title: "Add to Cart Button"
}

const Template = args => <AddToCartButton {...args} />;

export const StrikeThrough = Template.bind({});
StrikeThrough.args = {
    selectedItem: {
        purchaseType: 'onetime',
        itemQuantity: 1,
        quantityExplainerText: '',
        installmentHelperText: '{{ afterpay }} available for orders above $45',
        strikethrough: '',
        pricePerUnit: '$39.99',
        unitLabel: '/BOTTLE',
        price: '$39.99',
        cartOutput: {
          checkoutItemName: 'MENO - Menopause Vitamin Capsules',
          typeLabel: 'One time'
        }
    },
    cart: [],
    setCart: function(obj) {
        this.cart = this.cart.push(obj);
        return '';
    },
    children: <>Add to Cart - <span className='cart-cta__text-strikethrough'>35.60</span>30</>
}

export const PriceOnly = Template.bind({});
PriceOnly.args = {
    selectedItem: {
        purchaseType: 'onetime',
        itemQuantity: 1,
        quantityExplainerText: '',
        installmentHelperText: '{{ afterpay }} available for orders above $45',
        strikethrough: '',
        pricePerUnit: '$39.99',
        unitLabel: '/BOTTLE',
        price: '$39.99',
        cartOutput: {
          checkoutItemName: 'MENO - Menopause Vitamin Capsules',
          typeLabel: 'One time'
        }
    },
    cart: [],
    setCart: function(obj) {
        this.cart = this.cart.push(obj);
        return '';
    },
    children: <>Add to Cart <span>$39.99</span></>
}