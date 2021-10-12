import etc from "../assets/images/Etc.svg";
import like from "../assets/images/Like.svg";
import share from "../assets/images/Share.svg";

export default function Description() {
  return (
    <div className="description">
      <h2 className="cardName">
        Everything about pineapples and other tropical fruits
      </h2>
      <p className="author">
        <span className="by">By:</span> Nana McDougall
      </p>
      <p className="progress">
        Progress: <span className="percentage"> 64%</span>
      </p>
      <div className="progressImg"></div>
      <div className="progressImgGreen"></div>
      <div className="footer">
        <div className="start">
          <img className="etc" src={etc} alt="etc" />
        </div>
        <div className="end">
          <img className="like" src={like} alt="etc" />
          <img className="share" src={share} alt="etc" />
        </div>
      </div>
    </div>
  );
}
