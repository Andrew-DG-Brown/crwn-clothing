import CategoryItems from "../directory-item/directory-item.component";
import { CategoriesContainer } from "./category-list.styles";

function CategoryList() {
  return (
    <CategoriesContainer>
      <CategoryItems />
    </CategoriesContainer>
  );
}

export default CategoryList;
