import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (map) => {
  return createAction(CATEGORIES_ACTION_TYPES.CREATE_CATEGORIES_MAP, map);
};
