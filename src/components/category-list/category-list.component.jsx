import DirectoryItems from "../directory-item/directory-item.component";
import { CategoriesContainer, TitleContainer } from "./category-list.styles";
import { Title, SeeAll } from "../catagory-preview/category-preview.styles";

function CategoryList() {
  return (
    <CategoriesContainer>
      <TitleContainer>
        <Title to="shop">Shop by categories</Title>
        <SeeAll to="shop">View</SeeAll>
      </TitleContainer>
      <DirectoryItems />
    </CategoriesContainer>
  );
}

export default CategoryList;
