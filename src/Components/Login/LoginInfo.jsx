import React from "react";
import loginImg1 from "../../Assets/Login/Login-1.png";
import loginImg2 from "../../Assets/Login/Login-2.png";
import loginImg3 from "../../Assets/Login/Login-3.png";

import "./LoginInfo.css";
const LoginInfo = () => {
  const imgShow = [loginImg1, loginImg2, loginImg3];
  const [currIndex, setIndex] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      if (currIndex == imgShow.length - 1) {
        setIndex(0);
      } else {
        setIndex(currIndex + 1);
      }
    }, 5000);
  }, [currIndex]);
  return (
    <div id="info">
      <div id="login-img" className="bg-transparent relative">
        <img
          className="absolute w-11/12 h-full object-contain"
          src={imgShow[currIndex]}
          alt=""
        />
      </div>
      <br />
      <p id="login-info-main" className="mt-8 w-11/12">
        Stay Organised
      </p>
      <p id="login-info-secondary" className="w-11/12">
        Ensure that your schedule is accurate by entering new appointments or
        events into our digital calender
      </p>
    </div>
  );
};

export default LoginInfo;
