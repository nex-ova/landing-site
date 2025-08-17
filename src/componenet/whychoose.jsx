import { whyChooseUs } from "../constant/alldata";
import { IMAGES } from "../constant/theme";

function Whychoose() {
  return (
    <>
      <section className="gap">
        <section className="meets-expertise">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="choose-img">
                  <figure>
                    <img src={IMAGES.chooseus} alt="img" />
                  </figure>
                  <div className="circle-img">
                    <img alt="img" src="/favicon.png" />
                    <img
                      alt="img"
                      src={IMAGES.circleimage}
                      className="circle"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="heading">
                  <span># Why Choose Us</span>
                  <h2>Where Compassion Meets Expertise.</h2>
                  <p>
                    At Vionix-Care, we empower healthcare teams to excel,
                    combining deep industry expertise with caring,
                    human-centered technology. Our priority is making your
                    operations smoother, safer, and more focused on what matters
                    most: your patients.
                  </p>
                </div>
                {whyChooseUs.map((data, i) => (
                  <div className="choose-us" key={i}>
                    <i> {data.svg} </i>
                    <div>
                      <h4>{data.title}</h4>
                      <p>{data.descriptions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default Whychoose;
