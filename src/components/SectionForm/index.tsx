import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TitleBox, FormWrapper, SectionWrapper } from "./style";
import Input from "../Input";
import { contentSchema } from "../../schemas/content.schema";
import { apiAXIOS } from "../../services/api";
function SectionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contentSchema) });

  const handleSubmitFunction = async (data: object) => {
    let newData = { ...data, days: [1, 30, 60, 90] };

    await apiAXIOS.post("", newData).then((response) => console.log(response));
  };

  return (
    <SectionWrapper>
      <TitleBox>
        <h1>Simule sua Antecipação</h1>
      </TitleBox>
      <FormWrapper onSubmit={handleSubmit(handleSubmitFunction)}>
        <Input
          title={"Informe o valor da venda *"}
          placeholder={"R$ 1.000,00"}
          register={register}
          name={"amount"}
        />
        <Input
          title={"Em quantas parcelas *"}
          placeholder={"12"}
          label={"Máximo de 12 parcelas"}
          register={register}
          name={"installments"}
        />
        <Input
          title={"Informe o percentual de MDR *"}
          placeholder={"12"}
          register={register}
          name={"mdr"}
        />
        <button type="submit">Enviar</button>
      </FormWrapper>
    </SectionWrapper>
  );
}

export default SectionForm;
