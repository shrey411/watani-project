import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next,useTranslation } from "react-i18next";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug : true,
    lng : "English",
    resources : {
        English: {
            translation:{
                welcome: "Welcome",
                emailPlaceHolder : "Email*",
                passwordPlaceHolder: "Password*",
                passWordShow: "Show" ,
                passWordHide: "Hide" ,
                ForgotPassword: "Forgotten password?" ,
                LogIn : "Log in",
                NewUser : "New User?",
                RegisterNow :"Registre now",
                EmailError: "please enter the Correct Email id.",
                PasswordError : "please enter the Correct Password." ,
    
                // Footer

                About: "About",
                TermsandConditions: "Terms and Conditions",
                PrivacyPolicy :"Privacy policy",
                Help : "Help",
                Careers: "Careers",
                CancellationPolicy: "Cancellation Policy",

                //Register-apge

                anAccount:"Create an Account",
                FirstName:"First Name*" ,
                LastName: "Last Name*" ,
                confirmPassword: "Confirm Password*",
                MobileNo : "Mobile Number*",
                CreateAccount: "Create Account",
                emailTooltipMessage:"Email is used for communication purpose",
                Notice:"By creating a watani account, I agree to the Terms of Use, and Privacy Notice.",
                ConfirmPasswordError:"Password Doesn't Match",
                PasswordHeader:"Password Must Have",
                CharacterLength:"8 to 15 characters,",
                UpperCase:"1 Uppercase(A-Z),",
                LowerCase:"1 lower case(a-z),",
                NumberInput:"1 number (0-9) and",
                SpecialChar:"1 special character like @,$,%, and &."


            }
        },
        عربي:{
         translation:{
                welcome: "مرحباً",
                emailPlaceHolder : "بريد إلكتروني*",
                passwordPlaceHolder: "كلمة المرور*",
                passWordShow: "يعرض" ,
                passWordHide: "يخفي",
                ForgotPassword: "كلمة سر منسية؟",
                LogIn : "تسجيل الدخول",
                NewUser : "مستخدم جديد؟",
                RegisterNow : "سجل الان" ,
                EmailError : "الرجاء إدخال معرف البريد الإلكتروني الصحيح.",
                PasswordError : "الرجاء إدخال كلمة المرور الصحيحة." ,
                About: "عن",
                TermsandConditions: "الأحكام والشروط",
                PrivacyPolicy :"سياسة الخصوصية" ,
                Help: "يساعد",
                Careers: "وظائف",
                CancellationPolicy : "سياسة الإلغاء",

                // register

                anAccount:"إنشاء حساب",
                FirstName:"الاسم الأول*",
                LastName: "اسم العائلة*",
                confirmPassword: "تأكيد كلمة المرور*",
                MobileNo : "رقم الهاتف المحمول*",
                CreateAccount: "إنشاء حساب",
                emailTooltipMessage:"يستخدم البريد الإلكتروني لغرض التواصل",
                Notice:"بإنشاء حساب وطني، فإنني أوافق على شروط الاستخدام وإشعار الخصوصية.",
                ConfirmPasswordError:"كلمة المرور غير متطابقة",
                PasswordHeader:"كلمة المرور يجب أن تكون لديك",
                CharacterLength:"من 8 إلى 15 حرفًا،",
                UpperCase:"1 حرف كبير (من A إلى Z)،",
                LowerCase:"1 حالة صغيرة (من a إلى z)،",
                NumberInput:"1 رقم (0-9) و",
                SpecialChar:"حرف خاص واحد مثل @ و$ و% و&."

            }
        }
    }
})  


const useI18nComponent = () =>{

    const { t } = useTranslation();
    
    const changeLanguage = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
      };

    return {t ,changeLanguage}

}
export { i18n, useI18nComponent }

