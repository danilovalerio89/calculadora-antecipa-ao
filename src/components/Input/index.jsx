import { InputWrapper } from "./style";

function Input({ title, label, register, name, ...rest }) {
  return (
    <InputWrapper>
      <p>{title}</p>
      <input type="text" {...register(name)} {...rest} />
      {label ? <span>{label}</span> : null}
    </InputWrapper>
  );
}
export default Input;
