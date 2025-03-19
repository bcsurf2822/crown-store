import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingImage,
} from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

export default function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingImage src={ShoppingIcon} className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
