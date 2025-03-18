import { createSelector } from "reselect";

// create selector memoizes selectors

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  // 2 params: imput / export selector
  // input selector : what do i want as part of the params that im to use to prod what the selector will return back
  //  what are the slice that i want from redux so taht i can use them to prod something new outside
  [selectCategoryReducer],

  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  // what we are saying here is that as long as the cat arr does not change do not re run this method
  (categories) =>
    categories.reduce((accumaltor, category) => {
      const { title, items } = category;
      accumaltor[title.toLowerCase()] = items;
      return accumaltor;
    }, {})
);
