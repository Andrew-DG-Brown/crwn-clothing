import CategoryList from "../../components/category-list/category-list.component";
import { ImageSlider } from "../../components/image-slider/image-slider.component";

import { getTestData } from "../../utils/firebase/firebase.utils";

import { useEffect, useState } from "react";

const Home = () => {
  const [test, setTest] = useState("");

  useEffect(() => {
    setTest(getTestData("test"));
  }, []);

  console.log(test);
  return (
    <div>
      {/* <ImageSlider />*/}
      <CategoryList />
    </div>
  );
};

export default Home;
