import React from "react";

function FooterComponent() {
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
                <input type="text" placeholder="Email address"></input>
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
