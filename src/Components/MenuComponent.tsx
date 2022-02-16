import React, { useEffect, useState } from "react";
import { useCategory } from "../contexts/CategoryContext";
import { MENU } from "../dataset";
import { Menu } from "../Interface/MenuInterface";
import MenuItemModal from "./MenuItemModal";

function MenuComponent() {
  const activeCategory = useCategory();
  const [openMenuDialog, setOpenMenuDialog] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<Menu | {}>({});
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(
      MENU.filter((item: Menu) => item.category_id === activeCategory.id)
    );
  }, [activeCategory]);

  const titleToImageName = (title: String) => {
    return title.toLowerCase().replace(/\s/g, "");
  };

  const handleMenuDialogOpen = (item: Menu) => {
    setOpenMenuDialog(true);
    setSelectedMenuItem(item);
  };

  const handleMenuDialogClose = () => {
    setOpenMenuDialog(false);
  };

  return (
    <section className="flex-center menu">
      <div className="view-content menu-container">
        {menuItems.map((item: Menu, index: any) => {
          return (
            <div
              key={`menu-item-${index}`}
              className="menu-card"
              onClick={() => handleMenuDialogOpen(item)}
            >
              <div className="menu-item">
                <div className="menu-item-section-area">
                  <h2 className="menu-item-title">{item.food}</h2>
                  <div className="menu-item-cost">{item.rate}</div>
                  <div className="menu-item-desc">{item.description}</div>
                </div>
                <div className="menu-item-section-image">
                  <div
                    className="menu-item-section-image-container"
                    style={{
                      background: `url("/assets/${titleToImageName(
                        item.food
                      )}.png")`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MenuItemModal
        open={openMenuDialog}
        handleClose={handleMenuDialogClose}
        data={selectedMenuItem}
      />
    </section>
  );
}

export default MenuComponent;
