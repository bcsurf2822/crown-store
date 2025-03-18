import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  Arrow,
  CheckoutImage,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles.jsx";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity as="span">
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value as="span">{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price as="span">{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
