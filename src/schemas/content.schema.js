import * as yup from "yup";

export const contentSchema = yup.object().shape({
  amount: yup.number().required().min(1000, "Minimum value is 1000"),
  installments: yup
    .number()
    .required()
    .min(1, "Minimum number of installments is 1")
    .max(12, "Maximum number of installments is 12"),
  mdr: yup.number().required().max(100, "Maximum MDR is 100"),
  days: yup.string(),
});
