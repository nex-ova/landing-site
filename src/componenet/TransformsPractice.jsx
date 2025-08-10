"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

// For the hover effect, you'd add this to your global CSS file:
/*
  .hover-scale {
    transition: transform 0.3s ease-in-out;
  }

  .hover-scale:hover {
    transform: scale(1.05);
  }
*/

const TransformsPractice = () => {
  const expertiseItems = [
    {
      image: "/images/bot/billing_insurance.webp",
      altText: "Billing Insurance",
      title: "Automated Insurance Billing",
      description:
        "Vionix Care simplifies the billing process, aiming to efficiently handle insurance claims, which can significantly reduce administrative workloads for practices.",
    },
    {
      image: "/images/bot/seamless_accounting_data_integration.webp",
      altText: "Accounting",
      title: "Seamless Accounting Data Integration",
      description:
        "Vionix Care facilitates smooth data integration, streamlining data entry and claim processing, ensuring rapid transfers between systems for improved accuracy and efficiency.",
    },
    {
      image: "/images/bot/discover_hidden_benefits.webp",
      altText: "Benefit Discovery",
      title: "Discover Hidden Benefits",
      description:
        "Vionix Care helps identify overlooked benefits in Medicaid and vision insurance coverage, ensuring that patients receive all available advantages and enhancing their overall experience.",
    },
  ];

  // This function renders the introductory text.
  const renderText = () => (
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <h2 className="fs-2 fw-semibold text-primary mb-3">
          How Vionix Care Transforms Your Practice
        </h2>
        <p className="fs-5 text-muted mb-5">
          Vionix Care is designed to make a significant impact in the healthcare
          industry by offering innovative solutions that enhance operational
          efficiency. Here are some of the key features that Vionix Care
          provides:
        </p>
      </div>
    </div>
  );

  // This function renders a single feature card.
  const renderCard = (item) => (
    <div className="text-center h-100">
      <div className="d-flex justify-content-center mb-4">
        {/* Using a standard <img> tag with Bootstrap's responsive class */}
        <img
          src={item.image}
          alt={item.altText}
          width="250"
          height="250"
          className="img-fluid hover-scale"
        />
      </div>
      <h3 className="fs-4 fw-semibold text-primary mb-3">{item.title}</h3>
      <p className="text-secondary">{item.description}</p>
    </div>
  );

  return (
    <div className="bg-light py-5">
      <div className="container text-center">
        {/* The Fade component now wraps the text directly, so it works on all screens */}
        <Fade direction="up" triggerOnce={true}>
          {renderText()}
        </Fade>

        {/* This is the Bootstrap grid system: a 'row' containing 'col'umns */}
        <div className="row justify-content-center g-4">
          {expertiseItems.map((item, index) => (
            // col-lg-4 means it will take up 1/3 of the width on large screens and stack on mobile
            <div className="col-md-6 col-lg-4" key={index}>
              {/* The Fade component wraps the card, ensuring the animation is always applied */}
              <Fade direction="up" delay={50 * index} triggerOnce={true}>
                {renderCard(item)}
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformsPractice;
