import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import { menudata } from "../constant/alldata";
import SocialIcon from "../componenet/socialicon";
import { useEffect, useState } from "react";

function Header2() {
    const [show, setShow] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleclick = () => {
        setShow(!show)
    };
    const [isActive, setIsActive] = useState(null);
    function menuHandler(index) {
        if (isActive == index) {
            setIsActive(null)
        } else {
            setIsActive(index)
        }
    }
    const [search, setSearch] = useState(false);
    const addBodyClass = () => {
        setSearch(!search);
    };

    return (
        <header className="position-relative">  
            <div className="header-two-top">
                <div className="container">
                    <div className="top-bar">
                        <div className="col-lg-8">
                            <div className="contact-header">
                                <div>{SVGICONS.address3} <p>8502 Preston Rd. Inglewood</p> </div>
                                <div>{SVGICONS.phone3} <Link to="callto:01321392132">013 354 213 - 92132</Link>
                                </div>
                                <div>{SVGICONS.time} <p>Sunday - Thurs 9 AM - 8 PM</p> </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <SocialIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`sticky-header main-bar-wraper two ${isSticky ? 'is-fixed' : ''}`}>
                <div className="main-bar">
                    <div className="container">
                        <div className="bottom-bar">
                            <div className="two-bar">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="logo">
                                        <Link to="/">
                                            <img alt="logo" src={IMAGES.logo} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link to={"#"} id="mobile-menu" className="menu-start" onClick={() => handleclick(show)}>
                                <i className="fa-solid fa-bars" />
                            </Link>
                            <nav className="navbar">
                                <ul className="navbar-links">
                                    {menudata.map((item, index) => {
                                        let menuClassName = item.classChange;
                                        if (menuClassName === 'navbar-dropdown menu-item-children') {
                                            return (
                                                <li key={index} className={menuClassName}>
                                                    <Link to={item.link}>{item.title}</Link>
                                                    {item.subMenu && (
                                                        <ul className="sub-menu">
                                                            {item.subMenu.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link to={subItem.link}>{subItem.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li key={index} className="navbar-dropdown">
                                                    <Link to={item.link}>{item.title}</Link>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </nav>
                            <div className="header-menu-right">
                                <div className="header-search-button search-box-outer" onClick={() => addBodyClass(search)}>
                                    <Link to={"#"} id="show">
                                        <svg enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6h-332.8c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128h-460.8c-14.138 0-25.6 11.463-25.6 25.6 0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6h-230.4c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"></path></svg>
                                    </Link>
                                </div>
                                <Link to={"/apponiment"} className="btn"><span>Book Appointment<i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className={`mobile-nav ${show ? 'open' : ''}`} id="mobile-nav">
                        <div className="res-log">
                            <Link to="/">
                                <img alt="logo" src={IMAGES.logo} />
                            </Link>
                        </div>
                        <ul>
                            {menudata.map((item, i) => {
                                let menuClassName = item.classChange2;
                                if (menuClassName === 'menu-item-has-children') {
                                    return (
                                        <li key={i} className={`menu-item-has-children ${i == isActive ? 'active' : ''}`} onClick={() => menuHandler(i)}>
                                            <Link to={item.link}>{item.title}</Link>
                                            {item.subMenu && (
                                                <ul className="sub-menu">
                                                    {item.subMenu.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link to={subItem.link}>{subItem.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={i}>
                                            <Link to={item.link}>{item.title}</Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <Link to={"#"} id="res-cross" onClick={() => setShow(false)}></Link>
                    </div>
                    <div id="lightbox" className={`lightbox clearfix ${search ? 'opacity-100 d-block' : 'opacity-0 d-none'}`}>
                        <div className="white_content" >
                            <Link onClick={() => addBodyClass(search)} to={"#"} className="textright" id="close"><i className="fa-regular fa-circle-xmark" /></Link>
                            <h2>Excellence in Healthcare Rooted in Trust.</h2>
                            <h4 className="des">For years, we’ve dedicated ourselves to delivering exceptional.</h4>
                            <figure>
                                <img src={IMAGES.about1} alt="image" />
                            </figure>
                            <h3>Get in touch</h3>
                            <p className="num"><i>{SVGICONS.phone4}</i><Link to="callto:(+380)503184707">(+380) 50 318 47 07</Link></p>
                            <p className="num"><i>{SVGICONS.address4}</i>65 Allerton Street 901 N Pitt Str, Suite 170, VA 22314, USA</p>
                            <div className="social-medias">
                                <Link to={"https://www.facebook.com/"} target="blank">Facebook</Link>
                                <Link to={"https://www.twitter.com/"} target="blank">Twitter</Link>
                                <Link to={"https://www.instagram.com/"} target="blank">Linkedin</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header2;