import { Link } from "react-router-dom";
import PageBanner from "../../componenet/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import SocialIcon from "../../componenet/socialicon";
import emailjs from "@emailjs/browser";
import { IMAGES } from "../../constant/theme";

import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const SERVICE_ID = "service_i0xbo2q";
    const TEMPLATE_ID_USER = "template_328cj7p";
    const TEMPLATE_ID_TEAM = "template_scoidnd";
    const PUBLIC_KEY = "o_uNrehO-GWKjrLxk";

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, formData, PUBLIC_KEY);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_TEAM,
        {
          ...formData,
          teamEmail: "team@vionixcare.com",
        },
        PUBLIC_KEY
      );

      setStatus("✅ Emails sent successfully!");
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("❌ Failed to send emails. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <PageBanner title="contact us" image={IMAGES.bannrimg3} />
      <section className="gap blog-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10495.78281604864!2d2.304888758683584!3d48.87831160329632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fb641eaf103%3A0xb7a1684db74eda09!2sEurope%2C%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1738944002772!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading pb-4">
                <span># Get In Touch</span>
                <h2>Stay Connected. </h2>
              </div>
              <form
                className="appiontment contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write a comment..."
                      required
                    ></textarea>

                    <button className="btn" type="submit" disabled={loading}>
                      <span>
                        {loading ? "Sending..." : "Submit Now"}
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </button>
                    {status && <p style={{ marginTop: "10px" }}>{status}</p>}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="contact-information">
                <h3>Contact Information :</h3>
                <ul className="information-list">
                  <li>
                    <span>Email Address</span>
                    <Link to="mailto:team@vionixcare.com">
                      team@vionixcare.com
                    </Link>
                  </li>
                </ul>
                <SocialIcon />
              </div>

              <div className="scan-me-box  z-2 mt-4 px-3  border ">
                <div className="d-flex flex-column py-4 flex-sm-row align-items-center gap-3 px-3">
                  <div className="w-100 w-sm-50 d-flex justify-content-center">
                    <img
                      src="/images/scan-me.webp"
                      alt="QR Code"
                      width="220"
                      height="120"
                      className="rounded-3 img-fluid"
                    />
                  </div>
                  <div className="w-100 w-sm-50 d-flex flex-column align-items-center align-items-sm-start justify-content-between">
                    <div className="pt-0">
                      <p className="text-white fw-medium text-center text-sm-start mb-3">
                        <span className="fw-bold">Have a query? </span>
                        Book an appointment with us!
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://calendar.app.google/n4XscXZpMNpqmDW59"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scan-me-btn"
                      >
                        <span>Schedule Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Contact;
