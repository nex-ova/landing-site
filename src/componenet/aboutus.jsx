import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function AboutUs() {
  const [percentage, setPercentage] = useState(93);
  const [percentages, setPercentages] = useState(97);
  return (
    <>
      <div className="container">
        <div className="heading ">
          <span># About Us</span>
          <h2>About Us.</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="about-img hover-img">
              <figure>
                <img src={IMAGES.about1} alt="img" />
              </figure>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-text heading ">
              <h2>Transparent, collaborative, and solution-driven approach</h2>
              <p>
                At Vionix-Care, we empower healthcare organizations to achieve
                greater excellence through automation rooted in trust,
                expertise, and innovation. Our mission is to help medical teams
                and clinics deliver outstanding patient care - not by replacing
                the human touch, but by removing repetitive, manual barriers
                that slow you down.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-5">
            <div className="about-text">
              <ul className="list-style">
                <li>
                  Transforming healthcare operations through secure,
                  HIPAA-compliant automation
                </li>
                <li>
                  Supporting caregivers with technology that’s compassionate,
                  reliable, and intuitive
                </li>
                <li>
                  Setting the highest standards in every workflow and solution
                  we provide
                </li>
                <li>
                  Dedicated to measurable improvements in public health outcomes
                </li>
              </ul>
              <Link to={"/contact"} className="btn two">
                <span>
                  Contact Us
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-img hover-img w-100">
              <figure>
                <img src={IMAGES.about2} alt="img" />
              </figure>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="progressbar-text">
                  <div className="progressbar">
                    <div
                      style={{ position: "relative", width: 150, height: 150 }}
                    >
                      <CircularProgressbar
                        value={percentage}
                        strokeWidth={6}
                        styles={buildStyles({
                          pathColor: "#5050f4",
                          trailColor: "#5454FF10",
                          textColor: "#000",
                        })}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontWeight: "600",
                          fontSize: "40px",
                          color: "#000",
                          fontFamily: "Poppins",
                        }}
                      >
                        {percentage}%
                      </div>
                    </div>
                  </div>
                  <h2 className="pt-3">Error Reduction</h2>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="progressbar-text pt-4">
                  <div className="progressbar">
                    <div
                      style={{ position: "relative", width: 150, height: 150 }}
                    >
                      <CircularProgressbar
                        value={percentages}
                        strokeWidth={6}
                        styles={buildStyles({
                          pathColor: "#5050f4",
                          trailColor: "#5454FF10",
                          textColor: "#000",
                        })}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontWeight: "600",
                          fontSize: "40px",
                          color: "#000",
                          fontFamily: "Poppins",
                        }}
                      >
                        {percentages}%
                      </div>
                    </div>
                  </div>
                  <h2 className="pt-3">Retention Rate</h2>
                </div>
              </div>
            </div>
            {/* <div className="progressbar-text">
                                    <div className="progressbar">
                                        <div style={{ position: 'relative', width: 150, height: 150 }}>
                                            <CircularProgressbar
                                                value={percentage}
                                                strokeWidth={6}
                                                styles={buildStyles({
                                                    pathColor: '#5050f4',
                                                    trailColor: '#5454FF10',
                                                    textColor: '#000',
                                                })}
                                            />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    fontWeight: '600',
                                                    fontSize: '40px',
                                                    color: '#000',
                                                    fontFamily: 'Poppins',
                                                }}
                                            >
                                                {percentage}%
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="pt-3">qualified doctors</h2>
                                </div>
                                <div className="progressbar-text pt-4">
                                    <div className="progressbar">
                                    <div style={{ position: 'relative', width: 150, height: 150 }}>
                                            <CircularProgressbar
                                                value={percentages}
                                                strokeWidth={6}
                                                styles={buildStyles({
                                                    pathColor: '#5050f4',
                                                    trailColor: '#5454FF10',
                                                    textColor: '#000',
                                                })}
                                            />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    fontWeight: '600',
                                                    fontSize: '40px',
                                                    color: '#000',
                                                    fontFamily: 'Poppins',
                                                }}
                                            >
                                                {percentages}%
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="pt-3">Open communication</h2>
                                </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
