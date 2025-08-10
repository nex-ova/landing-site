"use client";
import { Fade } from "react-awesome-reveal";

const RightChoice = () => {
  const keyFeaturesData = {
    data: [
      [
        {
          imageUrl: "/images/bot/prioritized_patient_care.webp",
          title: "Prioritized Patient Care",
          description:
            "Dramatically reduces administrative burden, allowing practices to prioritize patient well-being.",
        },
        {
          imageUrl: "/images/bot/rapid_execution.webp",
          title: "Rapid Execution",
          description:
            "Executes tasks up to 5 times faster than human staff, ensuring no errors or delays.",
        },
      ],
      [
        {
          imageUrl: "/images/bot/24-7_support.webp",
          title: "24/7 Support",
          description:
            "Welly never takes a break—working tirelessly day and night.",
        },
        {
          imageUrl: "/images/bot/vision_support.webp",
          title: "Customizable Solutions",
          description:
            "Ensuring seamless integration with existing workflows and maximizing efficiency.",
        },
      ],
    ],
  };

  const renderLeftCard = (item) => (
    <div className="bg-white d-flex flex-column flex-sm-row align-items-center justify-content-center p-0 p-sm-3 pt-2 pt-sm-0 my-4 mx-4 my-sm-4 mx-sm-3 my-xl-5 mx-xl-4 rounded-3 shadow border border-light-theme-purple transition-all hover-scale">
      <img
        src={item.imageUrl}
        className="mt-2"
        alt=""
        height="150"
        width="150"
      />
      <div className="d-flex flex-column align-items-center align-items-sm-start my-2 my-sm-0 pb-3 pb-sm-0 ps-3">
        <h2 className="text-theme-blue pb-2 pb-sm-0 fs-3">{item.title}</h2>
        <p className="fw-light px-3 px-sm-0">{item.description}</p>
      </div>
    </div>
  );

  const renderRightCard = (item) => (
    <div className="bg-white d-flex flex-column flex-sm-row align-items-center justify-content-center p-0 p-sm-3 pt-2 pt-sm-0 my-4 mx-4 my-sm-4 mx-sm-3 my-xl-5 mx-xl-4 rounded-3 shadow border border-light-theme-purple transition-all hover-scale">
      <img
        src={item.imageUrl}
        className="mt-2"
        alt=""
        height="150"
        width="150"
      />
      <div className="d-flex flex-column align-items-center align-items-sm-start my-2 my-sm-0 pb-3 pb-sm-0 ps-3">
        <h2 className="text-theme-blue pb-2 pb-sm-0 fs-3">{item.title}</h2>
        <p className="fw-light px-3 px-sm-0">{item.description}</p>
      </div>
    </div>
  );

  return (
    <div className="  mb-5">
      <div className="container">
        <h2 className="text-center fw-semibold text-primary fs-1 mb-4">
          Why Welly is the Right Choice for Your Practice
        </h2>

        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            {keyFeaturesData.data[0].map((item, index) => (
              <div key={index}>
                <Fade
                  className="d-none d-sm-block"
                  key={index}
                  direction="up"
                  delay={100 * index}
                  triggerOnce={true}
                >
                  {renderLeftCard(item)}
                </Fade>
                <div className="d-block d-sm-none"> {renderLeftCard(item)}</div>
              </div>
            ))}
          </div>
          <div className="d-flex flex-column align-items-center mt-0 mt-sm-5">
            {keyFeaturesData.data[1].map((item, index) => (
              <div key={index}>
                <Fade
                  className="d-none d-sm-block"
                  direction="up"
                  delay={100 * index}
                  triggerOnce={true}
                >
                  {renderRightCard(item)}
                </Fade>
                <div className="d-block d-sm-none">
                  {" "}
                  {renderRightCard(item)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightChoice;
