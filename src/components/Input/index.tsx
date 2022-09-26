import { InputWrapper } from "./style";
import React, { FC, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  label?: string;
}

function Input({ title, label, ...rest }: IInputProps) {
  return (
    <InputWrapper>
      <p>{title}</p>
      <input type="text" {...rest} />
      {label ? <span>{label}</span> : null}
    </InputWrapper>
  );
}
export default Input;
