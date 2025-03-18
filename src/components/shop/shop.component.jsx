import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import Category from "../../routes/category/category.component";
import { CategoriesProvider } from "../../contexts/categories.context";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categories.action";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      console.log("Categ Arr: ", categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    //invoked method at bottom here
    getCategoriesMap();
  }, []);
  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </CategoriesProvider>
  );
}
