import React, { useState } from "react";
import { CATEGORY, MENU } from "../dataset";
import { Category } from "../Interface/MenuInterface";

function CategoriesComponent() {
  const [activeCategory, setActiveCategory] = useState(CATEGORY[0]);

  const handleCategoryClick = (item: Category) => {
    setActiveCategory(item);
  };

  return (
    <section className="flex-center category">
      <div className="view-content category-container">
        {CATEGORY.map((item, index) => {
          return (
            <div
              onClick={() => {
                handleCategoryClick(item);
              }}
              key={`categories-${index}`}
              className={`category-title ${
                activeCategory.id === item.id && `category-active`
              }`}
            >
              <div>
                {item.category}
                <span className="category-count">
                  {MENU.filter((menu) => menu.category_id === item.id).length}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategoriesComponent;
