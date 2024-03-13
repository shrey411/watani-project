import React, { useEffect, useState } from "react";
import "../Mycss/Login.css"
import { useFormValidation } from "../utils/formValidation";
import { Link, useNavigate } from "react-router-dom";
// import {LoginStyle} from '../Mycss/LoginCss'

import { useI18nComponent, i18n } from "../utils/i18nLocalization";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { ToastContainer } from "react-toastify";
import Loader from "../Component/Loader";

const Login = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    isEmailFocused,
    setIsEmailFocused,
    isPasswordFocused,
    setIsPasswordFocused,
    handlerLoginSubmit,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
    handleEmailChange,
    handlePasswordChange,
    showLoader,
    formData,
  } = useFormValidation();
  // const { language, changeLanguage, strings } = useUserLanguage();

  const [emailPlaceholder, setEmailPlaceholder] = useState("Email*");
  const [showPassword, setShowPassword] = useState(false);

  // const { t, changeLanguage } = useI18nComponent();
  const { t } = useI18nComponent();

  useEffect(() => {
    console.log("Image Path:", "../images/image 58.png");
    setEmailPlaceholder(t("emailPlaceHolder"));
    setEmail("")
    setPassword("")
    setEmailError("")
    setPasswordError("")
  }, [i18n.language]);

  // const [backgroundColor, setbackgroundColor] = useState("")
  // const [isEmailFocused, setIsEmailFocused] = useState(false);
  // const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const langDirection = i18n.language === "عربي" ? "rtl" : "ltr";
  const lang = i18n.language === "عربي"

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onfocus = () => {
    setEmailPlaceholder("example@domain.com");
    setIsEmailFocused(true);
  };
  const onBlur = () => {
    setEmailPlaceholder(t("emailPlaceHolder"));
    setIsEmailFocused(email !== "");
  };
  const OnPasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const onPasswordBlur = () => {
    setIsPasswordFocused(password !== "");
  };


  const Navigate = useNavigate()
  const registerhandler = () => {
    Navigate("/registerpage")
  }
  return (
    <>
      {showLoader && <Loader />}
      <div className={`main-container ${showLoader ? 'loader-bg' : ''}`}>
        <Header />
        <div className="right-container">
          <div className="login-box">
            <div className="login-header">
              <h2>{t("welcome")}</h2>
            </div>
            <form
              className="form-container"
              onSubmit={handlerLoginSubmit}
              noValidate
              dir={langDirection}
            >
              <div className="form-input">
                <div className="input-group">
                  {isEmailFocused ? (
                    <label className="lable_holder lable-email">
                      {t("emailPlaceHolder")}
                    </label>
                  ) : (
                    ""
                  )}
                  <input
                    type="email"
                    className={emailError ? "error" : ""}
                    id="emailInput"
                    dir={langDirection}
                    onChange={handleEmailChange}
                    value={email}
                    placeholder={emailPlaceholder}
                    onFocus={onfocus}
                    onBlur={onBlur}
                  />
                  <div
                    className={`error-container ${emailError ? "show" : ""}`}
                  >
                    {emailError && (
                      <div className="error-message">
                        {emailError}
                        <span className="arrow-right"></span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={passwordError ? "error" : ""}
                    lang="de"
                    id="passwordInput"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder={
                      isPasswordFocused ? "" : t("passwordPlaceHolder")
                    }
                    onFocus={OnPasswordFocus}
                    onBlur={onPasswordBlur}
                  />
                  <div className="password-btn">
                    <button
                      type="button"
                      className={`toggle-password ${lang ? "show-btn" : ""}`}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? t("passWordHide") : t("passWordShow")}
                    </button>
                  </div>
                  {isPasswordFocused ? (
                    <label className="lable_holder lable-password">
                      {t("passwordPlaceHolder")}
                    </label>
                  ) : (
                    ""
                  )}
                  <div
                    className={`error-container ${passwordError ? "show" : ""
                      }`}
                  >
                    {passwordError && (
                      <div className="error-message">
                        {passwordError}
                        <span className="arrow-right"></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-box-forgot">
                <Link to="#" className="custom-Link">{t("ForgotPassword")}</Link>
              </div>
              <div className="register">
                <div className="input-box">
                  <button
                    type="submit"
                    className="btn_login"
                    disabled={email.length === 0 || password.length === 0}
                    style={{
                      backgroundColor:
                        email.length > 1 || password.length > 1 ? "blue" : "",
                    }}
                  >
                    {t("LogIn")}
                  </button>
                </div>
                <div className="form-register">
                  <div className="register-box-user">
                    <Link to="#">{t("NewUser")}</Link>
                  </div>
                  <div className="register-box-button">
                    <button type="btn" className="btn_register" onClick={registerhandler}>
                      {t("RegisterNow")}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Login;
