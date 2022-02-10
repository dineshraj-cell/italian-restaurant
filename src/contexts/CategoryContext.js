import React, { createContext, useState } from "react";
import { useContext } from "react";
import { CATEGORY } from "../dataset";

const CategoryProvider = createContext();
const CategoryUpdateProvider = createContext();

export function useCategory() {
  return useContext(CategoryProvider);
}

export function useCategoryUpdate() {
  return useContext(CategoryUpdateProvider);
}

function CategoryContext({ children }) {
  const [activeCategory, setActiveCategory] = useState(CATEGORY[0]);

  const updateActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <CategoryProvider.Provider value={activeCategory}>
      <CategoryUpdateProvider.Provider value={updateActiveCategory}>
        {children}
      </CategoryUpdateProvider.Provider>
    </CategoryProvider.Provider>
  );
}

export default CategoryContext;
