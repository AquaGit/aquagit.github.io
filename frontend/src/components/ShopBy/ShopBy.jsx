import LivingRoom from "../assets/images/LivingRoom.jpg";
import Bedroom from "../assets/images/Bedroom.jpg";
import HomeOffice from "../assets/images/HomeOffice.jpg";
import DiningRoom from "../assets/images/DiningRoom.jpg";
import "./ShopBy.scss";


const ShopBy = () => {
  return (
    <div className="shop_wrapper">
      <div className="shop_title">
        <h1>Shop by Room</h1>
      </div>
      <div className="shopitems">
        <ul className="itemslist">
          <li className="item">
            <a href="/" className="itemslink">
              <img src={LivingRoom} alt="LivingRoom" />
              <h3>Living Room</h3>
            </a>
          </li>
          <li className="item">
            <a href="/" className="itemslink">
              <img src={Bedroom} alt="Bedroom" />
              <h3>Bedroom</h3>
            </a>
          </li>
          <li className="item">
            <a href="/" className="itemslink">
              <img src={HomeOffice} alt="HomeOffice" />
              <h3>Home Office</h3>
            </a>
          </li>
          <li className="item">
            <a href="/" className="itemslink">
              <img src={DiningRoom} alt="DiningRoom" />
              <h3>Dining Room</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopBy;
