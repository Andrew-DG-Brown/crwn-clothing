export const categoriesMapSelector = (state) =>
  state.categories.categories.reduce((accum, categoryObj) => {
    const { title, items } = categoryObj;

    accum[title.toLowerCase()] = items;
    return accum;
  }, {});
