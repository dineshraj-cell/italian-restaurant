import React, { useEffect } from "react";

function InformationComponent() {
  const elementInView = (el: Element, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutOfView = (el: Element) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element: Element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element: Element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    const scrollElements = document.querySelectorAll(
      ".information-section-content"
    );
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutOfView(el)) {
        hideScrollElement(el);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  }, []);

  return (
    <section className="flex-center information">
      <div className="view-content">
        <section className="information-section">
          <div className="information-section-content slide-left">
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
          <div className="information-section-content slide-right">
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
          <div className="information-section-content slide-left">
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
