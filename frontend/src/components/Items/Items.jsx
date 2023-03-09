import "./Items.scss";
import img1 from "../assets/images/shopimg1.png";
import img2 from "../assets/images/shopimg2.png";
import img3 from "../assets/images/shopimg3.png";
import img4 from "../assets/images/shopimg4.png";

const Items = () => {
  return (
    <div className="itemsblock">
      <div className="itemsblock_title">
        <h1>Shop our Bestsellers</h1>
      </div>
      <div className="itemsblock_list">
        <div className="blockitem">
          <img src={img1} alt="img1" />
          <div className="blocktext">
            <h3>Cooper Dining Table</h3>
            <h4>rent for $15/mo or buy for $359</h4>
            <h5>$314</h5>
          </div>
        </div>
        <div className="blockitem">
          <img src={img2} alt="img2" />
          <div className="blocktext">
            <h3>Croft Media Console</h3>
            <h4>rent for $35/mo or buy for $839</h4>
            <h5>$739</h5>
          </div>
        </div>
        <div className="blockitem">
          <img src={img3} alt="img3" />
          <div className="blocktext">
            <h3>Essex Dining Chair</h3>
            <h4>rent for $18/mo or buy for $429</h4>
            <h5>$379</h5>
          </div>
        </div>
        <div className="blockitem">
          <img src={img4} alt="img4" />
          <div className="blocktext">
            <h3>Ludlow Sofa</h3>
            <h4>rent for $52/mo or buy for $1249</h4>
            <h5>$1099</h5>
          </div>
        </div>
      </div>
      <a href="/">Shop All Furniture</a>
    </div>
  );
};

export default Items;
