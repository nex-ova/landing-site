import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/home";
import Index2 from "../pages/home/index-2";
import Index3 from "../pages/home/index-3";
import About from "../pages/about/about";
import Portfolio from "../pages/rearch/portfolio";
import PortfolioDetails from "../pages/rearch/portfolio-details";
import Services from "../pages/page/services";
import ServicesDeatails from "../pages/page/services-details";
import Testimonials from "../pages/page/testimonials";
import PricingTable from "../pages/page/pricing-table";
import Faq from "../pages/page/faq";
import OurBlog from "../pages/blog/our-blog";
import BlogDetails from "../pages/blog/blog-details";
import Contact from "../pages/contact/contact";
import Scroll from "../componenet/scroll";
import ScrollTopButton from "../componenet/scrolltotop";
import Appiontment from "../componenet/apponiment";

const rootdata = [
    { path: "/", element: <Index /> },
    { path: "/index", element: <Index /> },
    { path: "/index-2", element: <Index2 /> },
    { path: "/index-3", element: <Index3 /> },
    { path: "/about", element: <About /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/portfolio-details", element: <PortfolioDetails /> },
    { path: "/services", element: <Services /> },
    { path: "/services-details", element: <ServicesDeatails /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/pricing-table", element: <PricingTable /> },
    { path: "/faq", element: <Faq /> },
    { path: "/our-blog", element: <OurBlog /> },
    { path: "/blog-details", element: <BlogDetails /> },
    { path: "/contact", element: <Contact /> },
    { path: "/apponiment", element: <Appiontment /> },
]

function Root() {
    return (
        <BrowserRouter>
            <Scroll />
            <Routes>
                {rootdata.map((data, i) => (
                    <Route key={i} path={data.path} element={data.element} />
                ))}
            </Routes>
            <ScrollTopButton />
        </BrowserRouter>
    );
}
export default Root;