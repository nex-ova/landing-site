"use client";

import { FC } from "react";
import { Fade } from "react-awesome-reveal";

const data = [
  {
    id: 1,
    title: "Revenue Cycle Management",
    quote:
      "RCM process is essential for a healthcare practice to maintain financial viability by improving cash cycle. RPA can be a efficient and effective tool that can streamline RCM processes while saving cost and time. ",
    image: "/images/use-cases/1.webp",
  },
  {
    id: 2,
    title: "Appointment Scheduling",
    quote:
      "RPA robot can automate the patient data collection and processing workflows and select the optimal appointment time for the patient based on their diagnosis, doctor availability, location and protocols",
    image: "/images/use-cases/2.webp",
  },

  {
    id: 3,
    title: "Pre Authorization ?",
    quote:
      "Pre-authorization is an integral part of claim management. It is required to assess the medical necessity and cost-of-care ramifications. Any error can lead to claim denial. RPA bot can expedite manual entry, verification & monitoring with high accuracy",
    image: "/images/use-cases/3.webp",
  },
  {
    id: 4,
    title: "Claim Filing",
    quote:
      "RPA is revolutionizing claims filing in the U.S. healthcare system by automating repetitive, rule-based tasks, significantly reducing processing times and minimizing errors.",
    image: "/images/use-cases/4.webp",
  },
  {
    id: 5,
    title: "Claims Aging Report",
    quote:
      "RPA bots can automate claims tracking process by constantly checking for claim status across payer portals and generating corresponding reports.",
    image: "/images/use-cases/5.webp",
  },
  {
    id: 6,
    title: "Cash Receipt Posting",
    quote:
      "The accounts team deals with a plethora of reconciliations every month. One such highly rule-based repetitive task is receipt posting. The bot can easily perform this activity for you by reconciling bank ledgers and internal books to update information in your account system. ",
    image: "/images/use-cases/6.webp",
  },
  {
    id: 7,
    title: "Invoice Processing",
    quote:
      "RPA solution ensures that invoices are smoothly validated and approved with automated checks and minimizing or completely removing user intervention, to deliver high efficacy and efficiency for healthcare providers ",
    image: "/images/use-cases/7.webp",
  },

  {
    id: 8,
    title: "Billing reconciliation for home care",
    quote:
      "Homecare business demands an integrated ecosystem to ensure right service is billed to right customer for right number of hours in the right shift. Subsequently, this directly affects your payroll engine that compensates caregivers precisely. RPA can help you augment this highly transactional process to deliver accurate results. ",
    image: "/images/use-cases/8.webp",
  },

  {
    id: 9,
    title: "Caregiver On-boarding",
    quote:
      "HR teams work with multi level integrations for on boarding new employees. RPA Automation shortens the HR checklist a lot and allows a software system to interact with each other. RPA can double-check HR compliance. ",
    image: "/images/use-cases/9.webp",
  },
  {
    id: 10,
    title: "Physician Credentialing",
    quote:
      "Credentialing caregiver and physician is an important process of HR function to ensure that the licenses and services rendered are in sync to state approved physician license. RPA also verifies the expiry date and renewal date of licenses to ensure compliance ",
    image: "/images/use-cases/10.webp",
  },
];

const UserCaseRight = ({ title, quote, image }) => {
  const renderRightImage = () => (
    <img
      src={image}
      alt={title}
      width={800}
      height={800}
      className="rounded img-fluid shadow"
      style={{
        transition: "transform 0.5s",
        cursor: "pointer",
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
  const renderRightText = () => (
    <>
      <h2 className="h1 fw-bold text-primary mb-4 text-center text-xl-start">
        <span
          style={{
            background: "linear-gradient(to right, #1d4ed8, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          {title}
        </span>
      </h2>
      <blockquote className="bg-light border-start border-4 border-primary p-4 mt-4 rounded shadow text-secondary text-justify">
        {quote}
      </blockquote>
    </>
  );
  return (
    <div className="my-5 px-3 px-md-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-xl-6 mb-4 mb-xl-0">
          <Fade
            className="d-none d-sm-block"
            direction="left"
            duration={500}
            triggerOnce={true}
          >
            {renderRightText()}
          </Fade>
          <div className="d-block d-sm-none">{renderRightText()}</div>
        </div>
        <div className="col-12 col-xl-6 d-flex justify-content-center">
          <Fade
            className="d-none d-sm-block"
            direction="right"
            duration={500}
            triggerOnce={true}
          >
            {renderRightImage()}
          </Fade>
          <div className="d-block d-sm-none">{renderRightImage()}</div>
        </div>
      </div>
    </div>
  );
};

const UserCaseLeft = ({ title, quote, image }) => {
  const renderLeftImage = () => (
    <img
      src={image}
      alt={title}
      width={800}
      height={800}
      className="rounded img-fluid shadow"
      style={{
        transition: "transform 0.5s",
        cursor: "pointer",
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
  const renderLeftText = () => (
    <>
      <h2 className="h1 fw-bold text-primary mb-4 text-center text-xl-start">
        <span
          style={{
            background: "linear-gradient(to right, #38bdf8, #1d4ed8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          {title}
        </span>
      </h2>
      <blockquote className="bg-light border-start border-4 border-primary p-4 mt-4 rounded shadow text-secondary text-justify">
        {quote}
      </blockquote>
    </>
  );
  return (
    <div className="my-5 px-3 px-md-5">
      <div className="row align-items-center justify-content-center flex-row-reverse flex-xl-row">
        <div className="col-12 col-xl-6 mb-4 mb-xl-0 d-flex justify-content-center">
          <Fade
            className="d-none d-sm-block"
            direction="left"
            duration={500}
            triggerOnce={true}
          >
            {renderLeftImage()}
          </Fade>
          <div className="d-block d-sm-none">{renderLeftImage()}</div>
        </div>
        <div className="col-12 col-xl-6">
          <Fade
            className="d-none d-sm-block"
            direction="right"
            duration={500}
            triggerOnce={true}
          >
            {renderLeftText()}
          </Fade>
          <div className="d-block d-sm-none">{renderLeftText()}</div>
        </div>
      </div>
    </div>
  );
};

export default function WhatWeDoUserCase() {
  return (
    <>
      <div className="d-none d-xl-block  container mt-5  ">
        {data.map((report, index) =>
          index % 2 === 0 ? (
            <UserCaseRight key={report.id} {...report} />
          ) : (
            <UserCaseLeft key={report.id} {...report} />
          )
        )}
      </div>
      <div className="d-block d-xl-none container mt-5">
        {data.map((report) => (
          <UserCaseLeft key={report.id} {...report} />
        ))}
      </div>
    </>
  );
}
