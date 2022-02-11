import React, { useRef, useState } from "react";

function FooterComponent() {
  const [emailAddress, setEmailAddress] = useState("");
  const inputRef = useRef(null);
  const onLabelClicked = () => {
    inputRef.current.focus();
    onInputFocus();
  };
  const onInputBlur = () => {
    if (emailAddress !== "") return;
    document.getElementById("email-label").classList.remove("email-focus");
  };
  const onInputFocus = () => {
    document.getElementById("email-label").classList.add("email-focus");
  };
  return (
    <footer className="flex-center">
      <div className="view-content footer-container">
        <div className="contact">
          <div className="contact-items">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-desc">
              1440 Amherst St,
              <br />
              Montreal, QC H2L 3L3
              <br />
              (855) 816-3857
            </p>
          </div>
          <div className="contact-items">
            <h1 className="contact-title newsletter">Newsletter</h1>
            <div className="newsletter-container">
              <div className="newsletter-item-input">
                <span id="email-label" onClick={onLabelClicked}>
                  Email Address
                </span>
                <input
                  ref={inputRef}
                  onBlur={onInputBlur}
                  onFocus={onInputFocus}
                  type="text"
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                ></input>
              </div>
              <div className="newsletter-item-button">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <small>{`© 2022, express-theme-bistro Powered by Shopify`}</small>
      </div>
    </footer>
  );
}

export default FooterComponent;
