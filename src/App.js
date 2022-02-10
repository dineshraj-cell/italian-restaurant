import "./styles/style.css";
import HeaderComponent from "./Components/HeaderComponent.tsx";
import CategoriesComponent from "./Components/CategoriesComponent.tsx";
import MenuComponent from "./Components/MenuComponent.tsx";
import React from "react";
import CategoryContext from "./contexts/CategoryContext";
import GiftCardComponent from "./Components/GiftCardComponent.tsx";
import FooterComponent from "./Components/FooterComponent.tsx";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <main className="main-container">
        <section className="flex-center banner">
          <div className="view-content banner-container">
            <div className="banner-content">
              <h2 className="banner-title">{`Traditional fresh pasta since 1978.`}</h2>
            </div>
            <div className="banner-content">
              <img
                className="banner-img"
                src="/assets/newpastaficed.png"
                alt=""
              ></img>
            </div>
          </div>
        </section>
        <CategoryContext>
          <CategoriesComponent />
          <MenuComponent />
        </CategoryContext>
        <GiftCardComponent />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
