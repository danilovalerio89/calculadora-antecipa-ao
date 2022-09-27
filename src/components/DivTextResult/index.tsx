import { useData } from "../../providers/dataProvider";
import { DivText } from "./style";

function DivTextResult() {
  const { data } = useData();

  return (
    <DivText>
      <p>
        Amanhã:
        <strong>{data?.[1] ? `R$ ${data?.[1].toFixed(2)}` : `R$ 0,00`}</strong>
      </p>
      <p>
        Em 15 dias:
        <strong>
          {data?.[30] ? `R$ ${data?.[30].toFixed(2)}` : `R$ 0,00`}
        </strong>
      </p>
      <p>
        Em 30 dias:
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
    </DivText>
  );
}

export default DivTextResult;
