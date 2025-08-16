import AboutUs from "../../componenet/aboutus";
import Marquee1 from "../../componenet/marquee1";
import Marquee2 from "../../componenet/marquee2";
import Medical from "../../componenet/medical";
import PageBanner from "../../componenet/pagebanner";
import Pricing from "../../componenet/pricing";
import PrivacyPolicy from "../../componenet/Privacy&Policy";
import TermsOfUse from "../../componenet/TermsOfUse";
import TestiSwiper from "../../componenet/testiswiper";
import WhatWeDoUserCase from "../../componenet/whatWeDoUserCase";
import Whychoose from "../../componenet/whychoose";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function Privacy() {
  return (
    <>
      <Header />
      <PageBanner title="Privacy & Policy" image={IMAGES.bannrimg5} />
      <PrivacyPolicy />

      <Footer />
    </>
  );
}
export default Privacy;
