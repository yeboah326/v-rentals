import { SpecialInput } from "./styles";

type CustomInputType = {
    fieldName: string,
    type: string
}

export const CustomInput = (customInput :CustomInputType) => {
  return (
    <div style={{"fontFamily": "Comfortaa", "marginTop": "2rem"}}>
      <label htmlFor="" style={{"fontSize":"0.8rem"}}>{customInput.fieldName}</label>
      <SpecialInput type={customInput.type} />
    </div>
  );
}
