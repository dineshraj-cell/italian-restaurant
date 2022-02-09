import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function HeaderComponent() {
  const amount = "0.00";

  return (
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
  );
}

export default HeaderComponent;
