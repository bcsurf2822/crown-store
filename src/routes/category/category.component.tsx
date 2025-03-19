import { useParams } from "react-router-dom";
import "./category.styles.js";

import { Fragment, useEffect, useState } from "react";

import ProductCard from "../../components/product-card/product-card.component.jsx";
import { CategoryContainer, CategoryTitle } from "./category.styles.js";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector.js";
import Spinner from "../../components/spinner/spinner.component.jsx";

type CategoryRouteParams = {
  category: string;
};
export default function Category() {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
}
