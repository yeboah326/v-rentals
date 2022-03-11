import { ButtonContainer, Icon } from "./styles";

type ButtonType = {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  borderRadius?: string;
  border?: string;
  bgColor?: string;
  margin?: string;
  gap?: string;
  text: string;
  padding?: string;
  icon?: any;
  clicked: Function;
};

export const Button = (customButtonType: ButtonType) => {
  return (
    <ButtonContainer
      style={{
        gap: `${customButtonType.gap}`,
        color: `${customButtonType.color}`,
        fontFamily: `${customButtonType.fontFamily}`,
        fontSize: `${customButtonType.fontSize}`,
        borderRadius: `${customButtonType.borderRadius}`,
        border: `${customButtonType.border}`,
        backgroundColor: `${customButtonType.bgColor}`,
        margin: `${customButtonType.margin}`,
        padding: `${customButtonType.padding}`,
      }}
      onClick={() => {
        customButtonType.clicked();
      }}
    >
      <Icon>{customButtonType.icon}</Icon>
      {customButtonType.text}
    </ButtonContainer>
  );
};
