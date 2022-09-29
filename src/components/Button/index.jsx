import { ButtonStyled } from "./style";

function Button({ name, ...rest }) {
  return <ButtonStyled type="submit">{name}</ButtonStyled>;
}

export default Button;
