import { InputWrapper } from "./style";
import React, { FC, InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
}

function Input({ title, label, register, name, ...rest }: IInputProps) {
  return (
    <InputWrapper>
      <p>{title}</p>
      <input type="text" {...register(name)} {...rest} />
      {label ? <span>{label}</span> : null}
    </InputWrapper>
  );
}
export default Input;
