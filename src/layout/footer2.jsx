import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import { footerdata, lightgallerydata, lightgallerydata2 } from "../constant/alldata";
import SocialIcon from "../componenet/socialicon";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgZoom from 'lightgallery/plugins/zoom';

function Footer2() {
    let year = new Date().getFullYear();
    return (
        <footer className="footer-two gap" style={{ backgroundImage: `url(${IMAGES.footerbg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footre-logo">
                            <Link to={"/"}><img src={IMAGES.logo2} alt="img" /></Link>
                            <p>we are committed to delivering exceptional healthcare with compassion, expertise, and innovation. Our dedicated.</p>
                            <Link to={"#"}><img src={IMAGES.buttonfooter} alt="img" /></Link>
                        </div>
                    </div>
                    {footerdata.map((item, index) => (
                        <div className="col-lg-3 col-6" key={index}>
                            <div className="footer-link">
                                <h5>{item.title}</h5>
                                <ul className="footer-link-list">
                                    {item.links.map((item2, index2) => (
                                        <li key={index2}><Link to={item2.url}><i className="fa-solid fa-chevron-right" />{item2.title2}</Link></li>
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
                                    <h6> <i>  {SVGICONS.address2}  </i> Address</h6>
                                    <span>1901 Thornridge Cir. Shiloh</span>
                                </li>
                                <li>
                                    <h6> <i> {SVGICONS.phone2}  </i>Phone Number</h6>
                                    <Link to="callto:013221392132">013 354 213 - 92132</Link>
                                </li>
                                <li>
                                    <h6> <i> {SVGICONS.email2} </i> email Address</h6>
                                    <Link to="mailto:info123@gmail.com">info123@gmail.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row align-items-end footer-two-bottom">
                    <div className="col-lg-7">
                        <div className="copyright">
                            <p>Copyright © {year} <span> <Link to={"https://dexignlab.com/"} target="_blank" className="text-white">Dexignlab.</Link> </span> All Rights Reserved.</p>
                            <SocialIcon />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="instagram-img">
                            <h3>Instagram</h3>
                            <LightGallery
                                speed={500}
                                zoom={true}
                                thumbnail={true}
                                autoplay={true}
                                autoplayDelay={3000}
                                plugins={[lgThumbnail, lgZoom, lgAutoplay]}
                                selector='.lightimg'
                            >
                                <ul className="gap-2">
                                    {lightgallerydata2.map((data, i) => (
                                        <li key={i}>
                                            <Link to={data.image} data-fancybox="gallery" className="lightimg">
                                                <figure>
                                                    <img src={data.image} alt="gallery" className="w-100"/>
                                                </figure>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </LightGallery>
                        </div>
                    </div>
                </div>
            </div>
            <img src={IMAGES.linefooter} alt="img" className="footer-line" />
        </footer>
    );
}
export default Footer2;