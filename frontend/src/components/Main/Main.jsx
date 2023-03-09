import "./Main.scss";
import enjoy from "../assets/images/enjoy.jpg";
import garage from "../assets/images/garage.png";
import furniture from "../assets/images/furniture.jpg";
import never from "../assets/images/never.png";

const Main = () => {
  return (
    <div className="main">
      <div className="block_list">
        <div className="block">
          <div className="block_text">
            <h1>Enjoy a fully furnished space in less than week</h1>
            <h3>
              Feather furniture is available to be delivered and assembled in
              New York City, Los Angeles and San Francisco.
            </h3>
            <a href="/">Visit Feather For Business</a>
          </div>
          <img src={enjoy} alt="enjoy" />
        </div>
        <div className="block2">
          <img src={garage} alt="garage" />
          <div className="block_text">
            <h1>Garage Sale - 40% & Up</h1>
            <h3>
              Our Garage Sale is open! Savings start at 40% on favorite retired
              pieces. Find dressers, sofas, decor, and more to make the year one
              to remember.
            </h3>
            <h4>Terms and conditions apply. View here.</h4>
            <a href="/">Shop Now</a>
          </div>
        </div>
        <div className="block3">
          <div className="block_text">
            <h1>Furniture for business, made simple.</h1>
            <h3>
              Say goodbye to cost, complexity, and commitment of furniture.
              Feather makes it easy with affordable rental plans, white glove
              delivery and best-in-class account service.
            </h3>
            <a href="/">Visit Feather For Business</a>
          </div>
          <img src={furniture} alt="furniture" />
        </div>
        <div className="block4">
          <img src={never} alt="never" />
          <div className="block_text">
            <h1>Never assemble furniture again.</h1>
            <h3>
              We move a lot. There are countless floor plans and roommates (oh,
              and your evolving tastes) between here and there. With Feather,
              furnish your space without breaking a sweat or reaching for a
              screwdriver.
            </h3>
            <a href="/">How Feather Works</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
