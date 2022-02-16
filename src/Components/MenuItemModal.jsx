import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CATEGORY } from "../dataset";
import { titleToImageName } from "../utils";

export default function MenuItemModal({ open, handleClose, data }) {
  const [cost, setCost] = useState(1);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    open && (
      <div className="dialog">
        <div className="dialog-overlay" onClick={handleClose}></div>
        <div className="dialog-modal">
          <div className="dialog-header">
            <h2 className="dialog-header-title">
              {CATEGORY.find((item) => item.id === data.category_id).category}
            </h2>
            <button
              className="btn btn-icon dialog-header-close"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </button>
          </div>
          <div className="dialog-content">
            <div className="dialog-menu-content">
              <div className="dialog-menu-content-text">
                <h2 className="dialog-menu-content-title">{data.food}</h2>
                <small className="dialog-menu-content-rate">{data.rate}</small>
                <div className="dialog-menu-content-quantity">
                  <label>Quantity</label>
                  <div className="quantity-control">
                    <button className="btn btn-icon">
                      <RemoveIcon fontSize="small" />
                    </button>
                    <input
                      type="number"
                      value={cost}
                      maxLength="1"
                      pattern="\d*"
                      onChange={(e) => {
                        if (e.target.value.length === 2) return false;
                        setCost(e.target.value);
                      }}
                    ></input>
                    <button className="btn btn-icon">
                      <AddIcon fontSize="small" />
                    </button>
                  </div>
                </div>
                <div>
                  <button className="dialog-menu-content-cart-button">
                    Add to Cart
                  </button>
                </div>
                <p>{data.description}</p>
              </div>
              <div className="dialog-menu-content-image">
                <img
                  alt=""
                  src={`/assets/${titleToImageName(data.food)}.png`}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
