import { useState } from "react";
import { useI18nComponent } from "../utils/i18nLocalization";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};


export const useFormValidation = () => {
  const Navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);


  const [formData, setFormData] = useState([]);
  const [showLoader,setShowLoader] = useState(false)

  const { t } = useI18nComponent();



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };



  const handlerLoginSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError(t("EmailError"));
    }
    if (!isValidPassword(password)) {
      setPasswordError(t("PasswordError"));
    }


    const response = await fetch("https://watani-auto-42841-default-rtdb.firebaseio.com/userData.json");
    if (response) {
      const userData = await response.json()
      const users = Object.values(userData)

      const isDuplicateUser = users.find((user) => user.email === email && user.password === password);
      if (isDuplicateUser) {
        setShowLoader(true)
        toast.success("Login success")
        setTimeout(()=>{
          setTimeout(false)
          Navigate("/Home")
        },5000)
      }
      else {
        toast.error("Invalid Credentials")
      }
    }
  }
  return {
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
  };
};
