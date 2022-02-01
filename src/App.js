import "./styles/style.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function App() {
  const amount = "0.00";
  return (
    <div className="container">
      <header className="center-align">
        <div className="view-content nav">
          <h1>Giallo</h1>
          <div className="nav-tools">
            <button className="btn btn-icon">
              <SearchIcon />
            </button>
            <button className="btn center-align ml-half btn-icon">
              <LocalMallOutlinedIcon />
              <span className="total-amount ml-half">{` $${amount} CAD`}</span>
            </button>
          </div>
        </div>
      </header>
      <main>Main Component</main>
      <footer>Footer Area</footer>
    </div>
  );
}

export default App;
