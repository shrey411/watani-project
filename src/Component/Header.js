import React from 'react'
import { VectorArrow, WataniLogo } from "../image/image";
import '../Mycss/Header.css'
import { useI18nComponent,i18n} from '../utils/i18nLocalization';

function Header() {

    const {t,changeLanguage} = useI18nComponent()
    const langDirection = i18n.language === "عربي" ? "rtl" : "ltr";

  return (
    <>
        <div className="header-container" dir={langDirection}>
            <div className="watani-logo">
              <img src={WataniLogo} alt="error" />
            </div>
            <div className="language-container">
              <div className="lang-dropdown">
                <button className="lang-dropdown-button">
                  <p>{i18n.language}</p>
                  <div className="arrow-vect">
                    <img src={VectorArrow} alt="errs" />
                  </div>
                </button>
                <div className="lang-dropdown-content">
                  <button onClick={() => changeLanguage("English")}>
                    {t("English")}
                  </button>
                  <button onClick={() => changeLanguage("عربي")}>عربي</button>
                  {/* <button to="#">Gujarati</button>     */}
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Header