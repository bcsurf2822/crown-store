import { createSelector } from "reselect";

import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";
import { RootState } from "../store";
// create selector memoizes selectors

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

// 2 params: imput / export selector
// input selector : what do i want as part of the params that im to use to prod what the selector will return back
//  what are the slice that i want from redux so taht i can use them to prod something new outside

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// what we are saying here is that as long as the cat arr does not change do not re run this method, just give back prev value

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
