import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TitleBox, FormWrapper, SectionWrapper } from "./style";
import Input from "../Input";
import { contentSchema } from "../../schemas/content.schema";
import { apiAXIOS } from "../../services/api";
import { useData } from "../../providers/dataProvider";
import { useModal } from "../../providers/modalProvider";
import Button from "../Button";
import { useState } from "react";

function SectionForm() {
  const { data, setData } = useData();
  const { modal, setModal } = useModal();

  // const [delay, setDelay] = useState(false);
  // const [timeOut, setTimeOut] = useState(false);
  // const [internalError, setInternalError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contentSchema) });

  const setDelayButton = () => {
    setModal({
      delay: !modal.delay,
      timeout: false,
      internalError: false,
      openModal: false,
    });
  };

  const setTimeOutButton = () => {
    setModal({
      delay: false,
      timeout: !modal.timeout,
      internalError: false,
      openModal: false,
    });
  };

  const setInternalErrorButton = () => {
    setModal({
      delay: false,
      timeout: false,
      internalError: !modal.internalError,
      openModal: false,
    });
  };

  const handleSubmitFunction = async (data) => {
    let arrDays = data.days.split(",");

    data.days = arrDays;

    if (modal.delay) {
      setModal({ delay: true, openModal: true });
      await apiAXIOS
        .post("?delay=4000", data)
        .then((response) => {
          setModal({ delay: false, openModal: false });
          setData(response.data);
        })
        .catch((err) => console.log(err));
    }

    if (modal.timeout) {
      setModal({ timeout: true, openModal: true });
      await apiAXIOS
        .post("?timeout", data)
        .then((response) => {
          setModal({ timeout: false });
        })
        .catch((err) => console.log(err));
    }

    await apiAXIOS
      .post("", data)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
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
          errors={errors.amount}
        />
        <Input
          title={"Em quantas parcelas *"}
          placeholder={"12"}
          register={register}
          name={"installments"}
          errors={errors.installments}
        />
        <Input
          title={"Informe o percentual de MDR *"}
          placeholder={"1"}
          register={register}
          name={"mdr"}
          errors={errors.mdr}
        />

        <Input
          title={"Datas de recebimento"}
          name={"days"}
          register={register}
          placeholder="1, 15, 30, 90"
          label={"Exemplo: 1, 15,30,60"}
          defaultValue={"1, 15, 30, 90"}
        />

        <Button
          type="submit"
          name={
            modal.delay
              ? "Enviar com Delay"
              : modal.timeout
              ? "Enviar com TimeOut"
              : modal.internalError
              ? "Simular Internal Error"
              : "Enviar"
          }
        />
      </FormWrapper>
      <div>
        <button onClick={() => setDelayButton()}>Delay Button</button>
        <button onClick={() => setTimeOutButton()}>Time Out </button>
        <button onClick={() => setInternalErrorButton()}>
          Internal Server Error
        </button>
      </div>
    </SectionWrapper>
  );
}

export default SectionForm;
