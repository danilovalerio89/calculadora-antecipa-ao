import { SetStateAction, useState } from "react";
import { useData } from "../../providers/dataProvider";
import { DivText } from "./style";

function DivTextResult() {
  let test = {};

  let key = "";
  let value = 0;

  const { data } = useData();

  const newValue = { ...data };

  if (data) {
    delete newValue?.[1];
    delete newValue?.[15];
    delete newValue?.[30];
    delete newValue?.[60];
    delete newValue?.[90];
    delete newValue?.[120];
    delete newValue?.[150];
    delete newValue?.[180];
    delete newValue?.[210];

    let firstValue = Object.values(newValue);
    let firstKey = Object.keys(newValue);
    value = firstValue[0];
    key = firstKey[0];
  }

  // console.log(Object.values(test));

  return (
    <DivText>
      <p>
        Amanhã:
        <strong>{data?.[1] ? `R$ ${data?.[1].toFixed(2)}` : `R$ 0,00`}</strong>
      </p>
      <p>
        Em 15 dias:
        <strong>
          {data?.[15] ? `R$ ${data?.[15].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      <p>
        Em 30 dias:
        <strong>
          {data?.[30] ? `R$ ${data?.[30].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      <p>
        Em 60 dias:
        <strong>
          {data?.[60] ? `R$ ${data?.[60].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      <p>
        Em 90 dias:
        <strong>
          {data?.[90] ? `R$ ${data?.[90].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      <p>
        Em 120 dias:
        <strong>
          {data?.[120] ? `R$ ${data?.[120].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      <p>
        Em 150 dias:
        <strong>
          {data?.[150] ? `R$ ${data?.[150].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      <p>
        Em 180 dias:
        <strong>
          {data?.[180] ? `R$ ${data?.[180].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      <p>
        Em 210 dias:
        <strong>
          {data?.[210] ? `R$ ${data?.[210].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      {value > 0 ? (
        <p>
          <strong>
            Em {key} dias:
            {`R$ ${value.toFixed(2)}`}
          </strong>
        </p>
      ) : null}
    </DivText>
  );
}

export default DivTextResult;
