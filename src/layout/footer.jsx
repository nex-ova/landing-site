import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import { mainFooterdata } from "../constant/alldata";
import SocialIcon from "../componenet/socialicon";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Footer() {
  let year = new Date().getFullYear();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_61hny88", "template_5f6jp4o", form.current, {
        publicKey: "aYOgb_ORYkjD-hXhl",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <footer className="gap no-bottom">
      <div className="container">
        <div className="subscribe">
          <div class="  w-50 ">
            <h2 class="fs-0">
              Stay Connected <br />
              With Us.
            </h2>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="email" name="email" placeholder="Enter Your Email" />
            <button className="btn">
              <span>Get Started</span>
            </button>
          </form>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footre-logo">
                <Link to="/" className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      alt="logo"
                      src={IMAGES.mainLogo}
                      className="me-3"
                      style={{
                        width: "48px",
                        height: "48px",
                        filter: "brightness(1.1)",
                        objectFit: "contain",
                        marginBottom: "2px",
                      }}
                    />
                    <span
                      className="app-name fs-2 fw-medium"
                      style={{
                        lineHeight: "1.2",
                        display: "inline-block",
                        paddingBottom: "1px",
                        //   border: "1px solid red",
                      }}
                    >
                      Vionix Care
                    </span>
                  </div>
                </Link>
                <p>
                  We are committed to delivering exceptional healthcare with
                  compassion, expertise, and innovation.
                </p>
                <SocialIcon />
              </div>
            </div>
            {mainFooterdata.map((item, index) => (
              <div className="col-lg-3 col-6" key={index}>
                <div className="footer-link">
                  <h5>{item.title}</h5>
                  <ul className="footer-link-list">
                    {item.links.map((item2, index2) => (
                      <li key={index2}>
                        <Link to={item2.url}>{item2.title2}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-lg-3 col-md-6">
              <div className="footer-link contact-footer">
                <h5>contact uS</h5>
                <ul className="footer-link-list">
                  <li>
                    <h6>
                      {" "}
                      <i> {SVGICONS.email} </i> email Address
                    </h6>
                    <Link to="mailto:team@vionixcare.com">
                      team@vionixcare.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © {year}{" "}
            <span>
              {" "}
              <Link to={"#"} target="_blank">
                VionixCare
              </Link>{" "}
              All Rights Reserved.
            </span>
          </p>
          <ul>
            <li>
              <Link to={"/terms"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link to={"/privacy"}>Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
