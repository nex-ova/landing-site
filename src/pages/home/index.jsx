import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import AboutUs from "../../componenet/aboutus";
import Marquee1 from "../../componenet/marquee1";
import Marquee2 from "../../componenet/marquee2";
import Medical from "../../componenet/medical";
import Whychoose from "../../componenet/whychoose";
import Pricing from "../../componenet/pricing";
import TestiSwiper from "../../componenet/testiswiper";
import BrandSwiper from "../../componenet/brandswiper";
import Blog from "../../componenet/blog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import CountUp from "react-countup";
import { ourServices } from "../../constant/alldata";
import { stepProcess } from "../../constant/alldata";

function Index() {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-text">
                <span>
                  <i className="fa-solid fa-heart" />
                  Solutions for Smarter Healthcare
                </span>
                <h1 class="main-heading-text">
                  Automate Routine, Elevate <span>Care</span>
                </h1>
                <p>
                  We are dedicated to transforming healthcare operations by
                  eliminating time-consuming manual tasks through secure,
                  HIPAA-compliant automation. Our compassionate team of experts
                  empowers you to focus on what truly matters - delivering
                  outstanding patient care.
                </p>
                <div className="experience">
                  <Link to={"/contact"} className="btn">
                    <span>
                      Get Started
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                  <ul className="experience-team">
                    <li>
                      <img src={IMAGES.team1} alt="img" />
                    </li>
                    <li>
                      <img src={IMAGES.team2} alt="img" />
                    </li>
                    <li>
                      <img src={IMAGES.team3} alt="img" />
                    </li>
                    <li>
                      <Link to={"#"}>+</Link>
                    </li>
                  </ul>
                  <div>
                    <h6>30+ Years</h6>
                    <span>Healthtech Experts</span>
                  </div>
                </div>
                <img src={IMAGES.shape3} alt="img" className="shaps-3" />
              </div>
              <div className="counter">
                <div>
                  <h2 data-max="800">
                    <span>
                      <CountUp end={800} duration={5} />+
                    </span>
                  </h2>
                  <span>Hours Automated</span>
                </div>
                <div>
                  <h2 data-max="3">
                    <span>
                      <CountUp end={3} duration={5} />
                      M+
                    </span>
                  </h2>
                  <span>Transactions Processed</span>
                </div>
                <div>
                  <h2 data-max="150">
                    <span>
                      <CountUp end={150} duration={5} />+
                    </span>
                  </h2>
                  <span>Satisfied Clients</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img">
                <img src={IMAGES.heroimage} alt="img" />
                <ul className="shaps">
                  <li>
                    <img src={IMAGES.shape1} alt="img" />
                  </li>
                  <li>
                    <img src={IMAGES.shape2} alt="img" />
                  </li>
                  <li>
                    <img src={IMAGES.shape4} alt="img" />
                  </li>
                  <li>
                    <img src={IMAGES.shape5} alt="img" />
                  </li>
                  <li>
                    <img src={IMAGES.shape6} alt="img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gap">
        <div className="container">
          <div className="heading ">
            <span># Our Services</span>
            <h2>Our Services.</h2>
          </div>
          <Swiper
            className="swiper services-slider"
            slidesPerView={4}
            spaceBetween={0}
            loop={true}
            speed={1000}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2000,
            }}
            modules={[Navigation, Autoplay, FreeMode]}
            breakpoints={{
              10: {
                slidesPerView: 1,
              },
              556: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {ourServices.map((data, i) => (
              <SwiperSlide key={i}>
                <div className={`services ${data.columnstand}`}>
                  <i> {data.icon} </i>
                  <h4>
                    <Link to={"#"}>{data.title}</Link>
                  </h4>
                  <p>{data.descriptions}</p>
                  <Link to={"#"}>
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button">
              <div className="swiper-button-next">
                <i className="fa-solid fa-arrow-right" />
              </div>
              <div className="swiper-button-prev">
                <i className="fa-solid fa-arrow-left" />
              </div>
            </div>
          </Swiper>
        </div>
      </section>
      <section className="gap no-top">
        <AboutUs />
      </section>
      <Marquee1 />
      <Marquee2 />
      {/* <Medical /> */}
      <Whychoose />

      <section className="working-process-section">
        <div className="container">
          <div className="heading two">
            <span># Working Process</span>
            <h2>From Consultation to Care.</h2>
          </div>
          <div className="row">
            {stepProcess.map((data, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="working-process">
                  <div className="working-process-img">
                    <img src={IMAGES.workingprocess1} alt="img" />
                    <img
                      src={IMAGES.workingprocess2}
                      alt="img"
                      className="color-img"
                    />
                    <span>{data.number}</span>
                  </div>
                  <h3>{data.title}</h3>
                  <p>{data.descriptions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={IMAGES.workingprocessline}
          alt="img"
          className="working-process-line"
        />
      </section>
      <TestiSwiper />
      <div className="container">
        <BrandSwiper />
      </div>
      <section className="gap section-blog">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="heading">
                <span># blog</span>
                <h2>Our Medical Blog.</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn-left">
                <Link to={"#"} className="btn">
                  <span>
                    View All Blog
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <Blog />
          </div>
        </div>
        <ul className="shaps">
          <li>
            <img src={IMAGES.shape7} alt="img" />
          </li>
          <li>
            <img src={IMAGES.shape8} alt="img" />
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
export default Index;
