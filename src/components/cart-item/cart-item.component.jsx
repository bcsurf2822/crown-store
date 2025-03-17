import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
} from "./cart-item.styles";

export default function CartItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName as="span">{name}</ItemName>
        <ItemPrice as='span'>
          {quantity} x ${price}
        </ItemPrice>
      </ItemDetails>
    </CartItemContainer>
  );
}
