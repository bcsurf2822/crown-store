import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock as="span">Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock as="span">Remove</HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </CheckoutContainer>
  );
}
