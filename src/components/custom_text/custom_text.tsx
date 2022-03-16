type CustomTextType = {
  fontSize?: string;
  fontFamily?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
  text: string;
};

export const CustomText = ({
  fontSize,
  fontFamily,
  marginTop,
  marginBottom,
  color,
  text,
}: CustomTextType) => {
  return (
    <p
      style={{
        fontSize: `${fontSize}`,
        fontFamily: `${fontFamily}`,
        marginTop: `${marginTop}`,
        marginBottom: `${marginBottom}`,
        color: `${color}`,
      }}
    >
      {text}
    </p>
  );
};
