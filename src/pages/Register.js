import React, { useEffect, useState } from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import "../Mycss/Register.css"
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

import 'react-phone-input-2/lib/style.css';
import { MdInfo } from "react-icons/md";
import { useI18nComponent, i18n } from "../utils/i18nLocalization";
import { useRegisterFromValidation } from '../utils/RegisterFormValidation'
import CountryCode from '../JsonFiles/CountryCode.json'
import { BiCheckCircle } from "react-icons/bi";
import { ToastContainer } from 'react-toastify'
import Loader from '../Component/Loader'




const Register = () => {
  const {
    Registeremail,
    setRegisterEmail,
    Registerpassword,
    setRegisterPassword,
    confirmPassword,
    setConfirmPassword,
    isEmailFocused,
    setIsEmailFocused,
    isPasswordFocused,
    setIsPasswordFocused,
    isconfirmPasswordFocused,
    setIsConfirmPasswordFocused,
    confirmPasswordError,
    setConfirmPasswordError,
    handlerRegisterSubmit,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
    handleChange,
    inputValues,
    focusedField,
    setFocusedField,
    handleRegisterEmailChange,
    handlePasswordRegisterChange,
    handleConfirmPasswordChange,
    handleCheckboxChange,
    isChecked,
    requirements,
    passwordRequirements,
    showLoader,
    formData,
  } = useRegisterFromValidation();

  const [passwordFocused, setPasswordFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);


  const { t } = useI18nComponent();




  // useEffect(() => {
  //   setRegisterEmail("")
  //   setRegisterPassword("")
  //   setConfirmPassword("")
  //   setEmailError("")
  //   setPasswordError("")
  //   setConfirmPasswordError("")
  // }, [i18n.language]);


  // const [selectedCountry, setSelectedCountry] = useState('');

  // const handleCountryChange = selectedCountry => {
  //   const updatedOption = { ...selectedCountry, label: selectedCountry.value };
  //   setSelectedCountry(updatedOption);
  // };

  // const options = CountryCode.countries.map(country => ({
  //   value: country.code,
  //   label: `${country.name} - ${country.code}`
  // }));
  // const initialValue = "YourCountryCode"; // Replace with the desired country code

  const [selectCountryCode, setSelectCountryCode] = useState("")
  // const [selectedOption,setSelectedOption] = useState("")

  const handleCountryChange = (e) => {
    const selectedCode = e.target.value;
    setSelectCountryCode(selectedCode)
    // setSelectedCode(selectedCode)
  }


  const Navigate = useNavigate()
  const handleLogin = () => {
    Navigate("/Login")
  }


  const handleFieldFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleFieldBlur = () => {
    setFocusedField('')
  }

  const OnEmailFocus = () => {
    setIsEmailFocused(true)
  }

  const OnEmailBlur = () => {
    setIsEmailFocused(Registeremail !== "")
  }

  const OnPasswordFocus = () => {
    setPasswordFocused(true)
    setIsPasswordFocused(true)
  }

  const OnPasswordBlur = () => {
    setPasswordFocused(false)
    setIsPasswordFocused(Registerpassword !== "")
  }

  const OnConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const onConfirmPasswordBlur = () => {
    setIsConfirmPasswordFocused(confirmPassword !== "");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleEmailInfoHover = () => {
    setShowEmailTooltip(true)
  }

  const handleEmailInfoLeave = () => {
    setShowEmailTooltip(false)
  }



  const langDirection = i18n.language === "عربي" ? "rtl" : "ltr";
  const lang = i18n.language === 'عربي'

  const isformValid = (

    inputValues.fieldName !== "" &&
    Registeremail !== "" &&
    Registerpassword !== "" &&
    confirmPassword !== "" &&
    isChecked

  )
  
  return (
    <>
      {showLoader && <Loader className="blur"/> }   
      <section className={`register-page ${showLoader ? 'loader-bg' : ''}`} dir={langDirection}>
        <Header />
        <div className='register-box'>
          <div className='back_to_login'>
            <button type='btn' onClick={handleLogin}><FaArrowLeftLong /></button>
          </div>
          <div className="register-header">
            <h2>{t("anAccount")}</h2>
          </div>
          <form className="register-form" onSubmit={handlerRegisterSubmit} noValidate>
            <div className='name-group'>
              <div className="form-group">
                {focusedField === "firstName" || inputValues.firstName.length > 0 ? (<label htmlFor="firstName">{t("FirstName")}</label>) : null}
                <input type="text" id="firstName" name="firstName"
                  onFocus={() => handleFieldFocus('firstName')}
                  onBlur={handleFieldBlur}
                  placeholder={focusedField === 'firstName' ? '' : t("FirstName")}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  value={inputValues.firstName}
                  required
                />
              </div>

              <div className="form-group">
                {focusedField === "lastName" || inputValues.lastName.length > 0 ? (<label htmlFor="lastName">{t("LastName")}</label>) : null}
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onFocus={() => handleFieldFocus('lastName')}
                  onBlur={handleFieldBlur}
                  placeholder={focusedField === 'lastName' ? '' : t("LastName")}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  value={inputValues.lastName}
                  required />
              </div>
            </div>
            <div className="form-group">
              {isEmailFocused && (<label htmlFor="email" >{t("emailPlaceHolder")}</label>)}
              <input type="email"
                id="email"
                name="email"
                value={Registeremail}
                onChange={handleRegisterEmailChange}
                onFocus={OnEmailFocus}
                onBlur={OnEmailBlur}
                placeholder={isEmailFocused ? "" : t("emailPlaceHolder")}
                required
              />
              <div className={`email_info`}>
                <div className={`Info-container ${lang ? "info-container-left" : ""}`} onMouseEnter={handleEmailInfoHover}
                  onMouseLeave={handleEmailInfoLeave} >
                  <MdInfo />
                  {showEmailTooltip && (
                    <div className={`tooltip-container ${lang ? "tooltip-info-left" : ""} `}>
                      {t("emailTooltipMessage")}

                      <span className='arrow-bottom'></span>
                    </div>
                  )}
                </div>
              </div>
              <div className={`error-container ${emailError ? "show" : ""}`}
              >
                {emailError && (
                  <div className="error-message">
                    {emailError}
                    <span className="arrow-right"></span>
                  </div>
                )}
              </div>
            </div>

            <div className='mobile-group'>
              <div className="form-group">
                <select id="country_select" value={""} onChange={handleCountryChange} >
                  <option id="selected" >{`${selectCountryCode ? selectCountryCode : "+966"}`}</option>
                  {CountryCode.countries.map((getCountry, index) => (
                    <option id="seleted" key={index} value={getCountry.code} selected={getCountry.code === selectCountryCode}>{`${getCountry.name} - ${getCountry.code}`}</option>
                  ))}
                </select>
                {/* <Select
                  className='custome-select'
                  styles={customStyles}
                  options={options}
                  value={selectedCountry || options.find(option => option.value === initialValue)}
                  onChange={handleCountryChange}
                  placeholder="+966"
                /> */}
              </div>

              <div className="form-group">
                {focusedField === "mobile" || inputValues.mobile.length > 0 ? <label htmlFor="mobile" className='mobile-lable'>{t("MobileNo")}</label> : null}
                <input type="tel"
                  id="mobile-field"
                  name="mobile"
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  onFocus={() => handleFieldFocus('mobile')}
                  onBlur={handleFieldBlur}
                  placeholder={focusedField === "mobile" ? "" : t("MobileNo")}
                  value={inputValues.mobile}
                />
              </div>
            </div>
            <div className="form-group">
              {isPasswordFocused && (<label htmlFor="password" className='lable-Password'>{t("passwordPlaceHolder")}</label>)}
              <input type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={Registerpassword}
                onChange={handlePasswordRegisterChange}
                onFocus={OnPasswordFocus}
                onBlur={OnPasswordBlur}
                placeholder={isPasswordFocused ? "" : t("passwordPlaceHolder")} required />
              <div className="btn-password">
                <button
                  type="button"
                  className={`toggle-Password ${lang ? "password_show_btn" : ""}`}
                  onClick={togglePasswordVisibility}                    >
                  {showPassword ? t("passWordHide") : t("passWordShow")}
                </button>
              </div>
              {passwordFocused && requirements.some((req) => !req.isValid) &&
                (<div className={`Password-Validation ${lang ? "Password-Validation-lang" : ""}`}>
                  <h4>{t("PasswordHeader")}</h4>
                  <hr />
                  <ul className="requirements">
                    {requirements.map((req, index) => (
                      <li key={index} className={passwordRequirements[index].isValid ? "valid" : "invalid"}>
                        <div className="icon-container">
                          {!passwordRequirements[index].isValid &&
                            <span className="icon">&#9898;</span>
                          } {/* Blank circle icon */}
                          {passwordRequirements[index].isValid &&
                            <span className="checkmark">
                              <BiCheckCircle style={{ fontSize: "20px", margin: "0px" }} />
                            </span>}
                          <span className='requirement-label'>{req.lable}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <span className="arrow-right-side"></span>
                </div>)}
            </div>

            <div className="form-group">
              {isconfirmPasswordFocused && (
                <label className="lable_confirm_pass">
                  {t("confirmPassword")}
                </label>)}

              <input type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onFocus={OnConfirmPasswordFocus}
                onBlur={onConfirmPasswordBlur}
                placeholder={isconfirmPasswordFocused ? '' : t("confirmPassword")}
                required />
              <div className="btn-confirm-password">
                <button
                  type="button"
                  className={`toggle-confirm-password ${lang ? "confirm_show_btn" : ""}`}
                  onClick={toggleConfirmPasswordVisibility}                    >
                  {showConfirmPassword ? t("passWordHide") : t("passWordShow")}
                </button>
              </div>
              <div className={`error-container ${confirmPasswordError ? "show" : ""}`}
              >
                {confirmPasswordError && (
                  <div className="error-message">
                    {confirmPasswordError}
                    <span className="arrow-right"></span>
                  </div>
                )}
              </div>
            </div>


            <div className="form-checkbox">
              <div className='checkbox-box1'>
                <input type="checkbox" id="termsCheckbox" name="termsCheckbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
              <div className='notice-box'>
                <h5 htmlFor="termsCheckbox" >{t("Notice")}</h5>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className={`btn_create-account ${isformValid ? 'form-valid' : 'form-invalid'}`}
                disabled={!isformValid} >{t("CreateAccount")}</button>
            </div>
          </form>
        </div >
        <div className='footer-container'>
          <Footer />
        </div>
      </section >
        <ToastContainer />
    </>
  )
}

export default Register