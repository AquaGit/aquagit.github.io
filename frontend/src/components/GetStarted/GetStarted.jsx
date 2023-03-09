import "./GetStarted.scss";
import image from "../assets/images/getstarted.png";

const GetStarted = () => {
  return (
    <div className="getstarted">
      <div className="getstarted__wrapper">
        <div className="started_text">
          <h1>Curated and Convenient</h1>
          <p>
            We've built our offerings on the principle that everyone deserves
            high-quality design without the high cost. We offer elevated rental
            inventory, to transform your space. Reuse and recycle - we make the
            decision as light as a “feather”
          </p>
          <div className="started_btn">
            <a href="/">Get Started</a>
          </div>
        </div>
        <div className="started_img">
          <img src={image} alt="started" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
