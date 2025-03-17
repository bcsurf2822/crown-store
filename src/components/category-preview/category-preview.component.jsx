import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from "./category-preview.styles";

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
