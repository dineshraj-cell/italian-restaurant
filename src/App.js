import "./styles/style.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function App() {
  const amount = "0.00";
  return (
    <div className="container">
      <header className="flex-center">
        <div className="view-content nav">
          <h1>Giallo</h1>
          <div className="nav-tools">
            <button className="btn btn-icon">
              <SearchIcon />
            </button>
            <button className="btn flex-center ml-half btn-icon">
              <LocalMallOutlinedIcon />
              <span className="total-amount ml-half">{` $${amount} CAD`}</span>
            </button>
          </div>
        </div>
      </header>
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
        <section className="flex-center category">
          <div className="view-content category-container">
            <div className="category-title category-active">
              <div>
                Fresh meals <span className="category-count">6</span>
              </div>
            </div>
            <div className="category-title">
              <div>
                Pasta <span className="category-count">16</span>
              </div>
            </div>
            <div className="category-title">
              <div>
                Drinks & Desserts <span className="category-count">4</span>
              </div>
            </div>
            <div className="category-title">
              <div>
                Merchandise <span className="category-count">6</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>Footer Area</footer>
    </div>
  );
}

export default App;
