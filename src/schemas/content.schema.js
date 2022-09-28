import * as yup from "yup";

export const contentSchema = yup.object().shape({
  amount: yup.number().required(),
  installments: yup.number().required(),
  mdr: yup.number().required(),
  anotherDay: yup.number(),
});
