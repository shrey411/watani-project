import { useState } from 'react';
import LocalizedStrings from 'react-localization';

const useUserLanguage = () => {
   const [language, setLanguage] = useState("English")

   const changeLanguage = (newLanguage) => {
      setLanguage(newLanguage)
   }


   let strings = new LocalizedStrings({
      EN: {
         welcome: "Welcome",
         emailPlaceHolder: "Email*",
         ExampleHolder: "example@domain.com" ,
         EmailError: "Please enter the Correct email id."
      },
      AR: {
         welcome: "مرحباً",
         emailPlaceHolder: "بريد إلكتروني*",
         ExampleHolder: "example@domain.com" ,
         EmailError: "الرجاء إدخال معرف البريد الإلكتروني الصحيح."
         
      }
   });

   strings.setLanguage(language)

   return { language, changeLanguage, strings }
}

export default useUserLanguage;