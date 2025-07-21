import { Link } from "react-router-dom";

function SocialIcon() {
  return (
    <>
      <ul className="social-icon">
        <li>
          <Link to={"https://www.linkedin.com/"} target="blank">
            <i className="fa-brands fa-linkedin" />
          </Link>
        </li>
        <li>
          <Link to={"https://www.x.com/"} target="blank">
            <i className="fa-brands fa-x" />
          </Link>
        </li>
        <li>
          <Link to={"https://www.medium.com/"} target="blank">
            <i className="fa-brands fa-medium" />
          </Link>
        </li>
        <li>
          <Link to={"https://www.youtube.com/"} target="blank">
            <i className="fa-brands fa-youtube" />
          </Link>
        </li>
      </ul>
    </>
  );
}
export default SocialIcon;
