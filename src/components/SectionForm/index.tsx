import { TitleBox, FormWrapper, SectionWrapper } from "./style";
import Input from "../Input";
function SectionForm() {
  return (
    <SectionWrapper>
      <TitleBox>
        <h1>Simule sua Antecipação</h1>
      </TitleBox>
      <FormWrapper>
        <Input
          title={"Informe o valor da venda *"}
          placeholder={"R$ 1.000,00"}
        />
        <Input
          title={"Em quantas parcelas *"}
          placeholder={"12"}
          label={"Máximo de 12 parcelas"}
        />
        <Input title={"Informe o percentual de MDR *"} placeholder={"12"} />
      </FormWrapper>
    </SectionWrapper>
  );
}

export default SectionForm;
