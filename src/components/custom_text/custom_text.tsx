type CustomTextType = {
  fontSize?: string;
  fontFamiy?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
  text: string;
};

export const CustomText = ({fontSize, fontFamiy, marginTop, marginBottom, color, text}: CustomTextType) => {
  return (
    <p
      style={{
        fontSize: `${fontSize}`,
        fontFamily: `${fontFamiy}`,
        marginTop: `${marginTop}`,
        marginBottom: `${marginBottom}`,
        color: `${color}`
      }}
    >
      {text}
    </p>
  );
};
