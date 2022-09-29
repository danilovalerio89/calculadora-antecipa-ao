import { InputWrapper, SpanError, NormalSpan } from "./style";

function Input({ title, label, errors, register, name, ...rest }) {
  return (
    <InputWrapper>
      <p>{title}</p>
      <input type="text" {...register(name)} {...rest} />
      {label ? <NormalSpan>{label}</NormalSpan> : null}
      {errors ? <SpanError>{errors.message}</SpanError> : null}
    </InputWrapper>
  );
}
export default Input;
