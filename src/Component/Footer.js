import React from 'react'
import "../Mycss/Footer.css"
import { Link } from "react-router-dom";
import { i18n,useI18nComponent } from '../utils/i18nLocalization';


 const Footer = () => {

    const {t} = useI18nComponent()
    const langDirection = i18n.language === "عربي" ? "rtl" : "ltr";

  return (
    <>
        <div className="footer_option" dir={langDirection}>
            <ul className="navbar-list">
              <li className="list-item">
                <Link to="#">{t("About")}</Link>
              </li>
              <li className="list-item">
                <Link to="#">{t("TermsandConditions")}</Link>
              </li>
              <li className="list-item">
                <Link to="#">{t("PrivacyPolicy")}</Link>
              </li>
              <li className="list-item">
                <Link to="#">{t("Help")}</Link>
              </li>
              <li className="list-item">
                <Link to="#">{t("Careers")}</Link>
              </li>
              <li className="list-item">
                <Link to="#">{t("CancellationPolicy")}</Link>
              </li>
            </ul>
          </div>
    </>
  )
}
export default Footer