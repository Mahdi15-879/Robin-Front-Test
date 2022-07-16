import React, { useState } from "react";

// Components
import Input from "./Input";

// Styles
import "./Box.css";

// SVG
import logo from "../assets/logo.png";

const Box = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [idNum, setIdNum] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (idNum < 10) {
      setError(true);
      setErrorMessage("لطفا یک کد ملی معتبر وارد کنید");
    } else if (phoneNum < 11) {
      setError(true);
      setErrorMessage("لطفا یک شماره همراه معتبر وارد کنید");
    } else if (isChecked == false) {
      setError(true);
      setErrorMessage("شرایط و مقررات را نپذیرفته اید");
    } else {
      setError(false);
    }
  };

  const checkHandler = (e) => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const getIdNum = (num) => {
    setIdNum(num);
  };

  const getPhoneNum = (num) => {
    setPhoneNum(num);
  };

  return (
    <div className="Box">
      <form onSubmit={onSubmitHandler}>
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

          <Input
            limit={10}
            pHolder="کد ملی خود را وارد کنید"
            label="کدملی"
            getInfo={getIdNum}
          />

          <Input
            limit={11}
            pHolder="شماره تلفن همراه خود را وارد کنید"
            label="شماره تلفن همراه"
            getInfo={getPhoneNum}
          />

          <div className="Box__checkbox">
            <label>
              <span>.قوانین و مقررات </span>تماس تصویری را مطالعه کردم و با آن
              موافق هستم
            </label>
            <input type="checkbox" onChange={checkHandler} />
          </div>

          <h2 className="error">{error && errorMessage}</h2>

          <button type="submit">ورود به حامی چت</button>
        </div>
      </form>
    </div>
  );
};

export default Box;
