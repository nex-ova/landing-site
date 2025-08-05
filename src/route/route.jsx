import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/home";
import WhatWeDo from "../pages/whatWeDo/whatWeDo";
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
  { path: "/what-we-do", element: <WhatWeDo /> },

  { path: "/contact", element: <Contact /> },
];

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
