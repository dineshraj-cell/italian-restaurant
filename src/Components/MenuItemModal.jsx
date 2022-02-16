import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function MenuItemModal({ open, handleClose, data }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    open && (
      <div className="dialog">
        <div className="dialog-overlay" onClick={handleClose}></div>
        <div className="dialog-modal">
          <div className="dialog-header">
            <h2 className="dialog-header-title">Title</h2>
            <button
              className="btn btn-icon dialog-header-close"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </button>
          </div>
          <div className="dialog-content"></div>
        </div>
      </div>
    )
  );
}
