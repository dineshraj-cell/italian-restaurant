import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function HeaderComponent() {
  const amount = "0.00";

  useEffect(() => {
    const header = document.getElementById("header-panel");
    let lastScrollTop = 0;
    window.onscroll = function () {
      var scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop) {
        header.classList.add("header-animate");
      } else header.classList.remove("header-animate");
      lastScrollTop = scrollTop;
    };
  }, []);

  return (
    <header className="flex-center" id="header-panel">
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
