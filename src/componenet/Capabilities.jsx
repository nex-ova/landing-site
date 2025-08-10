"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

// For the hover effect, you can add this class to your global CSS file.
/*
  .hover-scale {
    transition: transform 0.3s ease-in-out;
  }

  .hover-scale:hover {
    transform: scale(1.05);
  }
*/

const Capabilities = () => {
  const skillsData = [
    {
      id: 1,
      items: [
        "Vionix Care integrates effortlessly with a wide range of complex medical systems, including Electronic Medical Records (EMRs) and billing software, ensuring a cohesive workflow across platforms.",
        "Easily trainable and quickly deployable, Vionix Care adapts to your unique workflows, allowing for minimal disruption during implementation.",
      ],
    },
    {
      id: 2,
      items: [
        "Vionix Care manages data entry and transfers with precision, ensuring fast, accurate, and reliable information flow throughout your practice.",
        "From insurance eligibility checks to claim submissions and payment reconciliation, Vionix Care automates the entire insurance process, reducing manual effort and enhancing accuracy.",
      ],
    },
    {
      id: 3,
      items: [
        "Vionix Care automatically imports diagnostic images into your EMR systems, significantly reducing the potential for manual errors and improving workflow efficiency.",
        "Vionix Care is proficient in various data exchange standards such as HL7, EDI, X12, DICOM, SOAP, XML, JSON, and other standard APIs, ensuring compatibility with existing systems.",
      ],
    },
  ];

  // Renders the introductory text section
  const renderText = () => (
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <h2 className="fs-2 fw-semibold text-primary">
          Vionix Care Capabilities at a Glance
        </h2>
        <p className="fs-5 text-muted mt-3 mb-5">
          Vionix Care is equipped with a diverse array of capabilities designed
          to streamline operations and enhance efficiency in your practice.
          Here’s a snapshot of what Vionix Care can do:
        </p>
      </div>
    </div>
  );

  // Renders a single capability card
  const renderCard = (skill) => (
    <div className="bg-white d-flex align-items-center h-100 p-4 rounded-4 shadow-lg border border-light-theme-purple hover-scale">
      {/* Bootstrap handles list styling by default. Added margin to list items for spacing. */}
      <ul className="list-unstyled text-start text-secondary ps-3">
        {skill.items.map((item, index) => (
          <li key={index} className="mb-3 lh-lg position-relative">
            <span className="position-absolute" style={{ left: "-1.5rem" }}>
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className=" py-5 px-4">
      <div className="container text-center">
        <Fade direction="up" triggerOnce={true}>
          {renderText()}
        </Fade>

        <div className="row justify-content-center g-4">
          {skillsData.map((skill, index) => (
            // KEY CHANGE: Added d-flex and align-items-stretch to the column
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              key={skill.id}
            >
              <Fade
                className="w-100" // Ensure Fade wrapper takes full width
                direction="up"
                delay={50 * index}
                triggerOnce={true}
              >
                {renderCard(skill)}
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
