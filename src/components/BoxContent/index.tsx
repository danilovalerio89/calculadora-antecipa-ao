import { CenterDiv, TitleBox, FormWrapper } from "./style";
import Input from "../Input";

function BoxContent() {
  return (
    <CenterDiv>
      <TitleBox>
        <header>Simule sua Antecipação</header>
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
        {/* <Input />
        <Input /> */}
      </FormWrapper>
    </CenterDiv>
  );
}

export default BoxContent;
