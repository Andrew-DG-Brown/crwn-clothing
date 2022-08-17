import DirectoryItems from "../directory-item/directory-item.component";
import { CategoriesContainer } from "./category-list.styles";

function CategoryList() {
  return (
    <CategoriesContainer>
      <DirectoryItems />
    </CategoriesContainer>
  );
}

export default CategoryList;
