import React from "react";

// Components
import Input from "./Input";

// Styles
import "./Box.css";

// SVG
import logo from "../assets/logo.png";

const Box = () => {
  return (
    <div className="Box">
      <div className="Box__header">
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
      </div>

      <div className="Box__body">
        <h3>
          .شما می‌توانید<span> 7روز هفته و 24 ساعته</span> به صورت چت تصویری و
          متن با کارشناسان ما در ارتباط باشید
        </h3>

        <Input limit={10} pHolder="کد ملی خود را وارد کنید" label="کدملی" />

        <Input
          limit={11}
          pHolder="شماره تلفن همراه خود را وارد کنید"
          label="شماره تلفن همراه"
        />
      </div>
    </div>
  );
};

export default Box;
