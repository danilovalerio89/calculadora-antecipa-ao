import * as yup from "yup";

export const contentSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Minimum value informed must be 1000!")
    .required("Minimum value informed must be 1000")
    .min(1000, "Minimum value is 1000")
    .max(100000000, "Maximum value is 100000000"),
  installments: yup
    .number()
    .typeError("Minimum value informed must be 1 and maximum of 12")
    .required("Minimum value informed must be 1 and maximum of 12")
    .min(1, "Minimum number of installments is 1")
    .max(12, "Maximum number of installments is 12"),
  mdr: yup
    .number()
    .typeError("Minimum value informed must be 1 and maximum of 100")
    .required()
    .max(100, "Maximum MDR is 100"),
  days: yup.string(),
});
