import React, { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import {
  Footer,
  Image,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles.jsx";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name as="span">{name}</Name>
        <Price as="span">{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
}
