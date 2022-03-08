type ButtonType = {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  borderRadius?: string;
  border?: string;
  bgColor?: string;
  margin?: string;
  text: string;
};

export const Button = (buttonType: ButtonType) => {
  return (
    <button
      style={{
        color: `${buttonType.color}`,
        fontFamily: `${buttonType.fontFamily}`,
        fontSize: `${buttonType.fontSize}`,
        borderRadius: `${buttonType.borderRadius}`,
        border: `${buttonType.border}`,
        backgroundColor: `${buttonType.bgColor}`,
        margin: `${buttonType.margin}`,
        "padding": "0.8rem 1.6rem",
      }}
    >
      {buttonType.text}
    </button>
  );
};
