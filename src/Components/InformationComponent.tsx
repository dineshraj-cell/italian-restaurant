import React from "react";

function InformationComponent() {
  return (
    <section className="flex-center information">
      <div className="view-content">
        <section className="information-section">
          <div className="information-section-content">
            <div>
              <h2>Handmade daily</h2>
              <p>{`Every day, our team of skilled artisans congregate in our kitchen to make pasta by hand. We use ethically sourced eggs and flour to obtain the best quality pasta.`}</p>
            </div>
          </div>
          <img
            className="information-section-image"
            alt=""
            src="/assets/handmadedaily.png"
          ></img>
        </section>
        <section className="information-section reverse">
          <div className="information-section-content">
            <div>
              <h2>Family tradition</h2>
              <p>{`Every dish has a purpose and story. We believe in the importance of respecting traditional methods so that our product remains true and integral.`}</p>
            </div>
          </div>
          <img
            className="information-section-image"
            alt=""
            src="/assets/familytradition.png"
          ></img>
        </section>
        <section className="information-section">
          <div className="information-section-content">
            <div>
              <h2>Local pick up</h2>
              <p>{`Our meals and pantry items are available for pick up at our South Street location Monday-Saturday 12-6pm.`}</p>
            </div>
          </div>
          <img
            className="information-section-image"
            alt=""
            src="/assets/localpickup.png"
          ></img>
        </section>
      </div>
    </section>
  );
}

export default InformationComponent;
