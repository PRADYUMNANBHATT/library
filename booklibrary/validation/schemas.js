import * as Yup from "yup";
const MAX_FILE_SIZE = 102400;
export const SignupSchema = Yup.object({
  name: Yup.string().required("UserName Required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .required("Password Required"),
  password_confirm: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .oneOf([Yup.ref("password"), null], "password missmatch!")
    .required("confirm passwordRequired"),
});
export const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .required("Password Required"),
});
export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email Required"),
});
export const passwordChangeSchema = Yup.object({
  password: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .required("Password Required"),
  confirmpassword: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .oneOf([Yup.ref("password"), null], "password missmatch!")
    .required("confirm passwordRequired"),
});
export const OtpSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email Required"),
  otp: Yup.string().min(4, "minimum four digit").required("otp Required"),
});
export const BookSchema = Yup.object({
  book_name: Yup.string()
    .min(5, "Too Short!")
    .max(250, "Too Long!")
    .required("product name Required"),
  book_discription: Yup.string()
    .min(5, "Too Short!")
    .max(550, "Too Long!")
    .required("product discription Required"),
  book_image: Yup.mixed()
    .required("Required")
    .test("is-valid-type", "Not a valid image type", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image")
    )
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) => value && value.size <= MAX_FILE_SIZE
    ),
  book_tag: Yup.string()
    .min(5, "Too Short!")
    .max(250, "Too Long!")
    .required("category name Required"),
  book_category: Yup.string()
    .min(5, "Too Short!")
    .max(250, "Too Long!")
    .required("category name Required"),
  book_availability: Yup.boolean().required("category name Required"),
});
