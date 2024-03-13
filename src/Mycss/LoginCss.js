


import styled from 'styled-components';
import  BackgroundImg  from '../images/image 58.png';
import colors from '../Colors/Color';


export const LoginStyle = styled.section`

.Main-img {
  background: linear-gradient(
      243deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 0.01%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${BackgroundImg});
  min-height: 1024px;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
  .header-container { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0px 12px 44px rgba(0, 10, 20, 0.3);
    backdrop-filter: blur(20px);
  }
  .watani-logo {
    padding: 15px 100px;
  }
  
  .language-container {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
  }
  
  .language-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
  }
  
  .lang-dropdown {
    position: relative;
  }
  
  .lang-dropdown-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${colors.LogInForm.FontColor};
  }
  
  .lang-dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba(2, 2, 2, 0.2);
    z-index: 1;
  }
  
  .lang-dropdown-content button {
      background: none;
      border: none;
      color: ${colors.LogInForm.FontColor}; /* Set your desired text color */
      font-size: 15px;
      cursor: pointer;
      letter-spacing: -0.408px;
      padding: 12px 16px;
      min-width: 120px
  }
  .lang-dropdown-content button:hover {
    background-color: rgba(12, 11, 11, 0.16);
    
  }
  
  .lang-dropdown:hover .lang-dropdown-content {
    display: block;
  }
  
  .lang-dropdown-button p {
    font-family: Sofia Pro;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.408px;
  }
  .arrow-vect {
    margin-top: 2px;
    margin-left: 5px;
  }
  
  .right-container {
    margin: 150px 875px;
  }
  
  .login-box {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    height: 550px;
    width: 400px;
    text-align: center;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
  }
  .login-header h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.59px;
    color: ${colors.LogInForm.FontColor};
  }
  .input-group {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    position: relative;
  }
  .input-group input:focus + label {
    display: inline-block;
  }
  
  .lable-email,
  .lable-password {
    position: absolute;
    margin: -25px 0px;
  }
  
  .input-group input {
    padding: 10px;
    margin-bottom: 15px;
    outline: none;
    height: 30px;
    width: 300px;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid ${colors.LogInForm.BorderColor};
    caret-color: ${colors.LogInForm.BorderColor};
    border-radius: 5px;
    letter-spacing: 0.59px;
    transition: border-color 0.3s;
  }
  input:focus {
    border: 3px solid;
    border-color: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0.04) 100%
    );
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.648);
  }
  #emailInput,
  #passwordInput {
    color: ${colors.LogInForm.FontColor};
    speak:none;
  }

  .input-box-forgot{
    display: flex;
    justify-content: flex-end;
  }
  .input-box-forgot .custom-Link {
    text-decoration: none;
    color: ${colors.LogInForm.FontColor};
    font-family: var(--font-family);
    font-size: 14px;
    letter-spacing: 1px;
  }
  .input-box-forgot .custom-Link:hover {
    text-decoration: underline;
  }

  .btn_login {
    /* margin-top: 100px; */
    border: none;
    background: rgba(255, 255, 255, 0.2);
    color: ${colors.LogInForm.FontColor};
    cursor: ${colors.LogInForm.cursor};
    width: 300px;
    height: 50px;
  }
  .btn_login.action {
    background-color: blue;
  }
  .register {
    margin-top: 100px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .register-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .register-box-user a {
    margin: 0px 25px;
    text-decoration: none;
    color: ${colors.LogInForm.FontColor};
    font-family: var(--font-family);
    font-size: 14px;
    letter-spacing: 1px;
  }
  .btn_register {
    background: rgba(255, 255, 255, 0.2);
    height: 30px;
    font-family: var(--font-family);
    border: none;
    cursor: ${colors.LogInForm.cursor};
    color: ${colors.LogInForm.FontColor}
    font-size: 16px;
  }
  .input-group input.error {
    border-color: red;
  }
  
  .footer_option {
    position: relative;
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    color: ${colors.LogInForm.FontColor};
  }
  
  // .toggle-password {
  //   position: absolute;
  //   right: 0px;
  //   top: 28%;
  //   background: none;
  //   border: none;
  //   color:${colors.LogInForm.FontColor} ;
  //   cursor: pointer;
  //   font-size: 13px;
  //   margin-left: 5px;
  //   width: 20%
  // }
  
  // .show-btn{
  //   right: 82%
  // }

  
  

  .error-container {
    position: absolute;
    top: 100%;
    left: 0; 
  }
  
  .error-message {
    display: none;
    position: relative;
    right: 120%;
    transform: translateY(-150%);
    background-color: ${colors.LogInForm.BgColorErrorDiv};
    color: ${colors.LogInForm.FontColor};
    padding: 12px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
  }
  
  .error-container.show .error-message {
    display: block;
  }
  
  .arrow-right {
    position: absolute;
    top: 30%;
    right: -8px;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid ${colors.LogInForm.BgColorErrorDiv};
  }
  
`;