import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TitleBox, FormWrapper, SectionWrapper } from "./style";
import Input from "../Input";
import { contentSchema } from "../../schemas/content.schema";
import { apiAXIOS } from "../../services/api";
import { useData } from "../../providers/dataProvider";
import Button from "../Button";

function SectionForm() {
  const { data, setData } = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contentSchema) });

  const handleSubmitFunction = async (data) => {
    let fixedDays = [1, 15, 30, 60, 90, 120, 150, 180, 210];

    let verifyData = { ...data };

    let dataFiltered = fixedDays.filter(
      (item) => item == verifyData.anotherDay
    );

    if (dataFiltered.length > 0) {
      delete data.anotherDay;

      await apiAXIOS
        .post("", { ...data, days: fixedDays })
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }

    if (dataFiltered.length == 0) {
      fixedDays.push(verifyData.anotherDay);

      delete data.anotherDay;

      await apiAXIOS
        .post("", { ...data, days: fixedDays })
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <SectionWrapper>
      <TitleBox>
        <h1>Simule sua Antecipação</h1>
      </TitleBox>
      <FormWrapper onSubmit={handleSubmit(handleSubmitFunction)}>
        <Input
          title={"Informe o valor da venda *"}
          placeholder={"R$ 1000"}
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
          placeholder={"1"}
          register={register}
          name={"mdr"}
        />
        <Input
          title={"Outra data de recebimento? Qual?"}
          placeholder={"Data entre 1 e 210. (210 Taxa mínima)"}
          register={register}
          name={"anotherDay"}
          defaultValue={210}
          label={"Data padrão 210. (210 Dias é taxa mínima)"}
        />
        <Button type="submit" name="Enviar Rapido" />
      </FormWrapper>
    </SectionWrapper>
  );
}

export default SectionForm;
