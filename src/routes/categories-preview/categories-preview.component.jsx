import { Fragment } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { categoriesMapSelector } from "../../store/categories/categories.selector";

import CatagoryPreview from "../../components/catagory-preview/catagory-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesMapSelector);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CatagoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
