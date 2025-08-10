"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

// Add this class to your global CSS file for the hover effect.
/*
  .hover-scale-border {
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .hover-scale-border:hover {
    transform: scale(1.05);
    border-color: #0d6efd !important; // Bootstrap's primary blue color
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important; // Bootstrap's shadow-lg
  }
*/

const GettingStarted = () => {
  const stepsData = [
    {
      number: 1,
      title: "Customized Automation",
      description:
        "Our dedicated team collaborates with your practice to develop tailored automation solutions that address your unique needs and goals.",
    },
    {
      number: 2,
      title: "Focus on ROI",
      description:
        "We prioritize delivering a positive return on investment, ensuring Welly pays for itself many times over.",
    },
    {
      number: 3,
      title: "Seamless Onboarding and Support",
      description:
        "Benefit from comprehensive training and ongoing support to make sure Welly integrates smoothly and performs flawlessly from day one.",
    },
  ];

  // Renders the main heading
  const renderText = () => (
    <div className="text-center mb-5">
      <h2 className="fs-2 fw-semibold text-primary">
        Getting Started with Welly is Simple
      </h2>
    </div>
  );

  // Renders a single step card
  const renderCard = (item) => (
    <div
      key={item.number}
      className="bg-white d-flex align-items-center p-3 rounded-4 shadow-lg border hover-scale-border"
    >
      {/* This creates the numbered circle */}
      <div
        className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle fw-bold shadow-sm me-4 flex-shrink-0"
        style={{ width: "2.5rem", height: "2.5rem" }}
      >
        {item.number}
      </div>
      <div>
        <h3 className="fw-bold fs-5 mb-1">{item.title}</h3>
        <p className="text-muted mb-0">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-5">
      <div className="container">
        {/* FIX: The Fade component wraps the text directly to ensure animation on all screens */}
        <Fade direction="up" triggerOnce={true}>
          {renderText()}
        </Fade>

        {/* This is a Bootstrap row with two columns that stack on mobile */}
        <div className="row align-items-center justify-content-center g-5 mt-4">
          {/* Image Column */}
          <div className="col-lg-6">
            <Fade direction="up" triggerOnce={true}>
              <img
                src="/images/square-apply.webp"
                alt="A visual representation of the Welly process"
                className="img-fluid rounded-3"
              />
            </Fade>
          </div>

          {/* Steps/Cards Column */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {stepsData.map((item, index) => (
                // FIX: Each card is wrapped in its own Fade component
                <Fade
                  key={item.number}
                  direction="up"
                  delay={100 * index}
                  triggerOnce={true}
                >
                  {renderCard(item)}
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
