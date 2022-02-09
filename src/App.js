import "./styles/style.css";
import HeaderComponent from "./Components/HeaderComponent.tsx";
import CategoriesComponent from "./Components/CategoriesComponent.tsx";
import MenuComponent from "./Components/MenuComponent.tsx";

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
        <CategoriesComponent />
        <MenuComponent />
      </main>
      <footer>Footer Area</footer>
    </div>
  );
}

export default App;
