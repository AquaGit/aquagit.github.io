import "./Easy.scss";
import fast from "../assets/images/fast.png";
import forbes from "../assets/images/forbes.png";
import mind from "../assets/images/mind.png";
import mydomaine from "../assets/images/mydomaine.png";
import purewow from "../assets/images/purewow.png";

const Easy = () => {
  return (
    <div className="easy">
      <div className="easy_title">
        Ease the pain of moving from apartment to apartment.
      </div>
      <div className="easy_logo">
        <img src={purewow} alt="purewow" />
        <img src={mydomaine} alt="mydomaine" />
        <img src={mind} alt="mind" />
        <img src={forbes} alt="forbes" />
        <img src={fast} alt="fast" />
      </div>
    </div>
  );
};

export default Easy;
