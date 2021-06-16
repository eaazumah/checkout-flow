import CardValidator from "card-validator";
import * as Yup from "yup";

export const paymentSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email().required(),
    cardNumber: Yup.string()
      .test(
        "test-number",
        "Credit card number is invalid",
        (value) => CardValidator.number(value).isValid
      )
      .required(),
    expirationDate: Yup.string()
      .test(
        "test-length",
        "Expiration date must be of format 10/23",
        (value) => value?.length === 5 && value[2] === "/"
      )
      .required(),
    cvv: Yup.string()
      .min(3, "Card security code too short")
      .max(4, "Card security code too long")
      .required(),
  });
};
