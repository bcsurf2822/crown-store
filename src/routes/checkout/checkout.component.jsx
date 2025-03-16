import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export default function Checkout() {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  return (
    <div>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
