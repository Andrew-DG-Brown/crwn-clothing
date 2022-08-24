import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const categoriesMapSelector = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((accum, categoryObj) => {
      const { title, items } = categoryObj;

      accum[title.toLowerCase()] = items;
      return accum;
    }, {});
  }
);

export const selectAllProducts = createSelector(
  [selectCategories],
  (categoriesArray) =>
    categoriesArray.reduce((accum, category) => {
      return (accum = [...accum, ...category.items]);
    }, [])
);

export const selectCategoryTitles = createSelector(
  [selectCategories],
  (categoryArray) =>
    categoryArray.map((category) => {
      return category.title;
    })
);
