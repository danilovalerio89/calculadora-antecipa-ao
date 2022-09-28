import { InputWrapper, MinimalInput } from "./style";

function Input({ title, label, normalInput = true, register, name, ...rest }) {
  return (
    <>
      {normalInput ? (
        <InputWrapper>
          <p>{title}</p>
          <input type="text" {...register(name)} {...rest} />
          {label ? <span>{label}</span> : null}
        </InputWrapper>
      ) : (
        <MinimalInput>
          <input type="text" {...register(name)} {...rest} />
        </MinimalInput>
      )}
    </>
  );
}
export default Input;
