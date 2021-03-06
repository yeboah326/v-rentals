import { SpecialInput } from "./styles";

type CustomInputType = {
  fieldName: string;
  type: string;
  width?: string;
  maxWidth?: string;
  default?: string;
  step?: string;
  min?: number;
  max?: number;
  registerFieldName?: string;
  registerField: Function;
};

export const CustomInput = (customInput: CustomInputType) => {


  
  return (
    <div
      style={{
        fontFamily: "Comfortaa",
        marginTop: "2rem",
        width: `${customInput.width}`,
        maxWidth: `${customInput.maxWidth}`,
      }}
    >
      <label style={{ fontSize: "0.8rem" }}>
        {customInput.fieldName}
      </label>
      <SpecialInput
        type={customInput.type}
        defaultValue={customInput.default}
        step={customInput.step}
        min={customInput.min}
        max={customInput.max}
        {...customInput.registerField(customInput.registerFieldName)}
      />
    </div>
  );
};
