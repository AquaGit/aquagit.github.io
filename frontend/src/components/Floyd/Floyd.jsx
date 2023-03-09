import image from "../assets/images/floyd.png";
import frame from "../assets/images/Frame.png";

import './Floyd.scss'

const Floyd = () => {
  return (
    <div className="floyd">
      <div className="floyd_img">
        <img src={image} alt="Floyd" />
      </div>
      <div className="floyd_text">
        <img src={frame} alt="frame" />
        <h1>Floyd Furniture Meets Feather Flexibility</h1>
        <div className="floyd_btn">
          <a href="/">Explore Floyd Furniture</a>
        </div>
      </div>
    </div>
  );
};

export default Floyd;
