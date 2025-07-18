import { useRef } from "react";
import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../../constant/theme";
import Footer2 from "../../layout/footer2";
import Header2 from "../../layout/header2";
import BrandSwiper from "../../componenet/brandswiper";
import ThumbSwiper from "../../componenet/thumbswiper";
import CountUp from "react-countup";
import { blog2, portfoliodata, servicedata2, teamdata } from "../../constant/alldata";
import SocialIcon from "../../componenet/socialicon";
import emailjs from '@emailjs/browser';

function Index2() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_61hny88', 'template_5f6jp4o', form.current, { publicKey: 'aYOgb_ORYkjD-hXhl', })
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            },
            );
        e.target.reset()
    };
    return (
        <>
            <Header2 />
            <section className="hero-section hero-style-two" style={{ backgroundImage: `url(${IMAGES.bghero})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-text">
                                <div className="circle-image">
                                    <img src={IMAGES.circleimage2} alt="img" />
                                    <i className="fa-solid fa-arrow-right" />
                                </div>
                                <h1><span>Stay</span> Informed And Healthy </h1>
                                <p>we are dedicated to putting your health at the forefront of everything we do. Our compassionate team of healthcare.</p>
                                <div className="experience">
                                    <Link to={"/about"} className="btn"><span>Read More<i className="fa-solid fa-arrow-right" /></span></Link>
                                    <ul className="experience-team">
                                        <li><img src={IMAGES.team1} alt="img" /></li>
                                        <li><img src={IMAGES.team2} alt="img" /></li>
                                        <li><img src={IMAGES.team3} alt="img" /></li>
                                        <li><Link to={"#"}>+</Link></li>
                                    </ul>
                                    <div>
                                        <h6>2000+</h6>
                                        <span>Experience Team</span>
                                    </div>
                                </div>
                                <img src={IMAGES.twoshap} alt="img" className="shaps-3" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-img">
                                <img src={IMAGES.heroimg2} alt="img" />
                                <div className="counter">
                                    <div>
                                        <h2 data-max="500"><span><CountUp end={500} duration={5} />+</span></h2>
                                        <span>Patients Served</span>
                                    </div>
                                    <div>
                                        <h2 data-max="2"><span><CountUp end={2} duration={5} />M+</span></h2>
                                        <span>Reports Delivered</span>
                                    </div>
                                    <div>
                                        <h2 data-max="100"><span><CountUp end={100} duration={5} />+</span></h2>
                                        <span>Expert Specialists</span>
                                    </div>
                                </div>
                                <ul className="shaps">
                                    <li><img src={IMAGES.shape9} alt="img" /></li>
                                    <li><img src={IMAGES.shape10} alt="img" /></li>
                                    <li><img src={IMAGES.shape4} alt="img" /></li>
                                    <li><img src={IMAGES.shape5} alt="img" /></li>
                                    <li><img src={IMAGES.shape6} alt="img" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gap">
                <div className="container">
                    <div className="row row-two g-4">
                        {servicedata2.map((data, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="services-two">
                                    <i>{data.icon}</i>
                                    <h3><Link to={"#"}> {data.title} </Link></h3>
                                    <p>our Primary Care Services are designed to be the foundation of your health.</p>
                                    <span>{data.number}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="gap no-top section-about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-two-img">
                                <div className="circle-img">
                                    <img alt="img" src={IMAGES.chooseuslogo} />
                                    <img alt="img" src={IMAGES.circleimage} className="circle" />
                                </div>
                                <img src={IMAGES.abouttwo} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading">
                                <span># About Us</span>
                                <h2>Compassionate Care Trusted Expertise</h2>
                                <p>we believe healthcare is about more than just treatments—it’s about understanding, empathy, and trust. Our experienced team is dedicated to providing care that prioritizes your needs and ensures your journey to health is as comfortable as possible.</p>
                            </div>
                            <div className="about-text-two">
                                <div className="d-flex">
                                    <i> {SVGICONS.ourhigh}</i>
                                    <h3>Our highly skilled doctors</h3>
                                </div>
                                <div className="d-flex">
                                    <i> {SVGICONS.dedecated}</i>
                                    <h3>Dedicated to supporting </h3>
                                </div>
                            </div>
                            <div className="skill-wrapper">
                                <div className="skill-focus">
                                    <span>Community Focus</span>
                                    <span>80%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                </div>
                            </div>
                            <div className="about-service">
                                <Link to={"/about"} className="btn"><span>More About Us<i className="fa-solid fa-arrow-right" /></span></Link>
                                <div>
                                    <i>{SVGICONS.call}</i>
                                    <div>
                                        <span>Call Service</span>
                                        <Link to="callto:0133592132">013 354 213 - 92132</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio-section gap" style={{ backgroundImage: `url(${IMAGES.graph})` }}>
                <div className="container">
                    <h2>Portfolio</h2>
                    <div className="row g-4">
                        {portfoliodata.map((data, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="portfolio">
                                    <div className="portfolio-img">
                                        <img src={data.image} alt="img" />
                                        {SVGICONS.square}
                                    </div>
                                    <Link to={"/portfolio-details"}><i className="fa-solid fa-arrow-right" /></Link>
                                    <div className="portfolio-text">
                                        <span>{data.span}</span>
                                        <Link to={"/portfolio-details"}>{data.title}</Link>
                                    </div>
                                </div>
                            </div>  
                        ))}
                    </div>
                    <div className="btn-center">
                        <Link to={"/portfolio"} className="btn"><span>View All Project<i className="fa-solid fa-arrow-right" /></span></Link>
                    </div>
                </div>
            </section>
            <section className="appiontment-section gap no-bottom" style={{ backgroundImage: `url(${IMAGES.bgline2})` }}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="heading">
                                <span># Get In Touch</span>
                                <h2>Stay Connected for Better Health</h2>
                            </div>
                            <form className="appiontment" ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" name="name" placeholder="Your Name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" name="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="number" name="number" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-lg-6">
                                    <select className="form-select form-select-lg mb-3 bs-select" aria-label="Large select example">
                                            <option selected>Select Doctor</option>
                                            <option defaultValue="1">Dr. Include John</option>
                                            <option defaultValue="2">Dr.David</option>
                                            <option defaultValue="3">Dr.Robert</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="massg" placeholder="Write A Message..."></textarea>
                                        <button className="btn"><span>Book An Appiontment <i className="fa-solid fa-arrow-right" /></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="appiontment-img">
                                <img alt="img" src={IMAGES.appiontment} />
                                <div className="emergency-call">
                                    <i>{SVGICONS.call2} </i>
                                    <div>
                                        <span>Emergency Call</span>
                                        <Link to="callto:0133592132">013 354 213 - 92132</Link>
                                    </div>
                                </div>
                                <ul className="shaps">
                                    <li><img src={IMAGES.shape1} alt="img" /></li>
                                    <li><img src={IMAGES.shape4} alt="img" /></li>
                                    <li><img src={IMAGES.shape5} alt="img" /></li>
                                    <li><img src={IMAGES.shape6} alt="img" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container gap">
                <BrandSwiper />
            </div>
            <section>
                <div className="container">
                    <div className="heading two">
                        <span># Team Member</span>
                        <h2>The Faces of Exceptional</h2>
                    </div>
                    <div className="row g-4 row-two">
                        {teamdata.map((data, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="team hover-img">
                                    <div className="team-img">
                                        <figure>
                                            <img src={data.image} alt="img" />
                                        </figure>
                                        <SocialIcon />
                                    </div>
                                    <div className="team-text">
                                        <div>
                                            <span>{data.title}</span>
                                            <h4><Link to={"#"}>{data.name}</Link></h4>
                                        </div>
                                        <Link to={"#"}><i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ThumbSwiper />
            <section className="gap no-top">
                <div className="container">
                    <div className="heading two">
                        <span># Our Blog</span>
                        <h2>Insights for a Healthier</h2>
                    </div>
                    <div className="row g-4">
                        {blog2.map((data, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="blog-two-style hover-img">
                                    <figure>
                                        <img src={data.img} alt="img" />
                                    </figure>
                                    <ul className="mental-health">
                                        <li>Mental Health</li>
                                        <li><Link to={"#"}>Nov 25,2025</Link></li>
                                    </ul>
                                    <h4><Link to={"#"}> {data.title}</Link></h4>
                                    <Link to={"/blog-details"} className="btn"><span>Read More<i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer2 />
        </>
    );
}
export default Index2;