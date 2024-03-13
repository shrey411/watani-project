import { useEffect, useState } from "react";
import { useI18nComponent } from "../utils/i18nLocalization";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Component/Loader";

export const isValidRegisterEmail = (Registeremail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(Registeremail);
};

export const isValidRegisterPassword = (Registerpassword) => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(Registerpassword);
};



export const useRegisterFromValidation = () => {
    const Navigate = useNavigate()

    const [Registeremail, setRegisterEmail] = useState("");
    const [Registerpassword, setRegisterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isconfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [focusedField, setFocusedField] = useState('');
    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
    });

    const [formData, setFormData] = useState([]);
    const [showLoader, setShowLoader] = useState(false)




    const { t } = useI18nComponent();

    const requirements = [
        { regex: /.{8,15}/, lable: t("CharacterLength"), index: 0 },
        { regex: /[A-Z]/, lable: t("UpperCase"), index: 1 },
        { regex: /[a-z]/, lable: t("LowerCase"), index: 2 },
        { regex: /[0-9]/, lable: t("NumberInput"), index: 3 },
        { regex: /[^A-Za-z0-9]/, lable: t("SpecialChar"), index: 4 },
    ]
    const [passwordRequirements, setPasswordRequirements] = useState(
        Array.from({ length: requirements.length }, () => ({ isValid: false }))
    );


    const handleRegisterEmailChange = (e) => {
        setRegisterEmail(e.target.value);
        setEmailError("");
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError("")
    }



    const updatePasswordRequirements = (Registerpassword) => {
        const updatedRequirements = requirements.map((req) => ({
            isValid: req.regex.test(Registerpassword),
        }));
        setPasswordRequirements(updatedRequirements);
    };

    const handlePasswordRegisterChange = (e) => {
        const newPassword = e.target.value;
        setRegisterPassword(newPassword);
        setPasswordError("");

        // Update password requirements feedback
        updatePasswordRequirements(newPassword);
    };


    const handleChange = (fieldName, value) => {
        let sanitizedValue;
        if (fieldName === 'mobile') {
            // For mobile field, allow only digits
            sanitizedValue = value.replace(/\D/g, '');
        }
        else {

            sanitizedValue = value.replace(/[^A-Za-z]/g, '');
        }

        setInputValues((prevValues) => ({
            ...prevValues,
            [fieldName]: sanitizedValue,
        }));
    };


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    const resetFormFields = () => {
        setRegisterEmail("")
        setRegisterPassword("")
        setConfirmPassword("");
        setIsChecked(false)
        setIsEmailFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);
        setInputValues({
            firstName: "",
            lastName: "",
            mobile: "",
        });
    };

    const resetDublicatedField = () => {
        setRegisterEmail("")
        setRegisterPassword("")
        setConfirmPassword("");
        setIsEmailFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);

    }


    const handlerRegisterSubmit = async (e) => {
        e.preventDefault();


        if (!isValidRegisterEmail(Registeremail)) {
            setEmailError(t("EmailError"));
            return;
        }
        if (!isValidRegisterPassword(Registerpassword)) {
            setPasswordError(t("PasswordError"));
        }

        if (Registerpassword !== confirmPassword) {
            setConfirmPasswordError(t("ConfirmPasswordError"))
            return;
        }

        try {
            const response = await fetch("https://watani-auto-42841-default-rtdb.firebaseio.com/userData.json")
            if (!response) {
                console.log('error in fetching data')
            }
            const existUsers = await response.json();
            if (existUsers === null) {
                const res = await fetch("https://watani-auto-42841-default-rtdb.firebaseio.com/userData.json",
                    {
                        method: "POST",
                        headers: {
                            'Content-type': "application/json"
                        },
                        body: JSON.stringify({
                            email: Registeremail,
                            password: Registerpassword,
                        })
                    })
                if (res.ok) {
                    setShowLoader(true);
                    toast.success("Registered successfully");
                    setTimeout(() => {
                        setShowLoader(false);
                        resetFormFields();
                        Navigate("/Login");
                    }, 3000);
                } else {
                    throw new Error("Failed to save user data to Firebase");
                }
            }
            else {
                const users = Object.values(existUsers)
                const isDuplicateUser = users.some(data => data.email === Registeremail && data.password === Registerpassword)
                if (isDuplicateUser) {
                    toast.error("Email and password already exists, make another email and password")
                    resetDublicatedField()

                }
                else if (Registerpassword === confirmPassword) {
                    const res = await fetch("https://watani-auto-42841-default-rtdb.firebaseio.com/userData.json",
                        {
                            method: "POST",
                            headers: {
                                'Content-type': "application/json"
                            },
                            body: JSON.stringify({
                                email: Registeremail,
                                password: Registerpassword,
                            })
                        })
                    if (res) {
                        setShowLoader(true)
                        toast.success("login successfully")
                        setTimeout(() => {
                            setShowLoader(false)
                            resetFormFields()
                            Navigate("/Login")
                        }, 3000)
                    }
                    else {
                        alert("not connect data base")
                    }
                }
            }
        }
        catch (error) {
            console.error(error.message)
        }
    }
    return {
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
        handleCheckboxChange,
        isChecked,
        handleConfirmPasswordChange,
        handlePasswordRegisterChange,
        requirements,
        showLoader,
        passwordRequirements,
        formData,
    };
};
