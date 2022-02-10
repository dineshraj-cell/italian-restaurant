import React from "react";

function GiftCardComponent() {
  return (
    <section className="flex-center gift">
      <div className="view-content gift-container">
        <img className="gift-img" src="/assets/giftcard.png" alt=""></img>
        <div className="gift-content">
          <h2 className="gift-title">Gift Card</h2>
          <div className="gift-rate">$100.00 CAD</div>
          <button className="gift-button">Add To Cart</button>
          <div className="gift-desc">{`Gift card will be delivered by email and contain instructions to redeem them at the checkout. Our gift card have no additional processing fees.`}</div>
        </div>
      </div>
    </section>
  );
}

export default GiftCardComponent;
