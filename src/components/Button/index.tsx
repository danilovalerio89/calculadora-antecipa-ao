import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./style";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

function Button({ name, ...rest }: IButton) {
  return <ButtonStyled type="submit">{name}</ButtonStyled>;
}

export default Button;
