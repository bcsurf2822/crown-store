import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";
import "./shop.styles.scss"

export default function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
