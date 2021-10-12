import React from "react";
import bgImage from "../assets/images/bg.png";
import avatar from "../assets/images/avatar.png";

export default function ImageSection() {
  return (
    <div className="imageSection">
      <div className='img-gradient'><img className="bgImage" src={bgImage} alt="bgImage" /></div>
      <img className="avatar" src={avatar} alt="bgImage" />
      <span className="views">1237 views . 1 days ago</span>
    </div>
  );
}
