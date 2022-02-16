import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function MenuItemModal({ open, handleClose }) {
  return (
    open && (
      <div className="dialog">
        <div className="dialog-overlay"></div>
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
        </div>
      </div>
    )
  );
}
