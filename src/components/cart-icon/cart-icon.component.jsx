import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingImage,
} from "./cart-icon.styles";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingImage src={ShoppingIcon} className="shopping-icon" />
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
}
