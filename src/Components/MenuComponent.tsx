import React from "react";

function MenuComponent() {
  return (
    <section className="flex-center menu">
      <div className="view-content menu-container">
        <div className="menu-card">
          <div className="menu-item">
            <div className="menu-item-section-area">
              <a className="menu-item-title">{`Lasagna`}</a>
              <div className="menu-item-cost">{`$19.00 CAD`}</div>
              <div className="menu-item-desc">{`Spinach pasta, tomato sauce, fresh mozzarella, fresh basil.`}</div>
            </div>
            <div className="menu-item-section-image">
              <div
                className="menu-item-section-image-container"
                style={{ background: `url("/assets/lasagna.png")` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuComponent;
