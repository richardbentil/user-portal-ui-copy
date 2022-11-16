import * as yup from "yup";
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;
const verifyCodeRegex = /^[a-zA-Z0-9]{6,}$/
// Minimum eight characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character:

export const signUpSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required("Required"),
    company: yup.string().required("Enter company name"),
    password: yup.string().min(8).matches(passwordRules, { message: "Please create a stronger password" }).required("Required")
})

export const resetPasswordSchema = yup.object().shape({
    password: yup.string().min(8).matches(passwordRules, { message: "Please create a stronger password" }).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
})

export const verificationCodeSchema = yup.object().shape({
    verificationCode: yup.string().max(6).required("Required")
})

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required("Required")
})

export const loginSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required("Required"),
    password: yup.string().required("Required")
})