import "./Reviews.scss";

import star from "../assets/images/star.png";

const Reviews = () => {
  return (
    <div className="rewievs">
      <h1>The Reviews are In</h1>
      <div className="rewievs_block">
        <div className="rewievs_item">
          <div className="star">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <div className="rewiev_text">
            <h3>Honestly BEST EXPERIENCE moving ever.</h3>
            <h4>- Julie, San Francisco, CA</h4>
          </div>
        </div>
        <div className="rewievs_item">
          <div className="star">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <div className="rewiev_text">
            <h3>
              Extremely easy! Browsed for furniture and it was in my new
              apartment within a week.
            </h3>
            <h4>- Anthony, Los Angeles, CA</h4>
          </div>
        </div>
        <div className="rewievs_item">
          <div className="star">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <div className="rewiev_text">
            <h3>THIS JUST MAKES SENSE. Truly obsessed with Feather.</h3>
            <h4>- Wesley, New York City, CA</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
