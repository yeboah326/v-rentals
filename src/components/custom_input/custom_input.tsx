import { SpecialInput } from "./styles";

type CustomInputType = {
  fieldName: string;
  type: string;
  width?: string;
  maxWidth?: string;
  default?: string
};

export const CustomInput = (customInput: CustomInputType) => {
  return (
    <div
      style={{
        fontFamily: "Comfortaa",
        marginTop: "2rem",
        width: `${customInput.width}`,
        maxWidth: `${customInput.maxWidth}`
      }}
    >
      <label htmlFor="" style={{ fontSize: "0.8rem" }}>
        {customInput.fieldName}
      </label>
      <SpecialInput type={customInput.type} defaultValue={customInput.default} />
    </div>
  );
};
