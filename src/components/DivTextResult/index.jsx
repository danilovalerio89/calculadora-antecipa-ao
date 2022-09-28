import { useData } from "../../providers/dataProvider";
import { DivText } from "./style";

function DivTextResult() {
  let postDays;

  const { data } = useData();

  if (data) {
    postDays = Object.entries(data);
  }

  return (
    <DivText>
      {data ? (
        postDays.map((item, index) =>
          item[0] == 1 ? (
            <p key={index}>
              Amanhã <strong>R${item[1].toFixed(2)} </strong>
            </p>
          ) : (
            <p key={index}>
              Em {item[0]} dias <strong>R${item[1].toFixed(2)} </strong>
            </p>
          )
        )
      ) : (
        <>
          <p>
            Amanhã <strong>R$ 0,00</strong>
          </p>
          <p>
            Em 15 dias <strong>R$ 0,00</strong>
          </p>
          <p>
            Em 30 dias <strong>R$ 0,00</strong>
          </p>
          <p>
            Em 90 dias <strong>R$ 0,00</strong>
          </p>
        </>
      )}
    </DivText>
  );
}

export default DivTextResult;
