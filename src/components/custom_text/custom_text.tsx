type CustomTextType = {
  fontSize?: string;
  fontFamily?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
  text: string;
  clicked?: ()=>void;
};

export const CustomText = ({
  fontSize,
  fontFamily,
  marginTop,
  marginBottom,
  color,
  text,
  clicked
}: CustomTextType) => {
  return (
    <p
      style={{
        fontSize: `${fontSize}`,
        fontFamily: `${fontFamily}`,
        marginTop: `${marginTop}`,
        marginBottom: `${marginBottom}`,
        color: `${color}`,
        cursor: "pointer",
      }} onClick={clicked}
    >
      {text}
    </p>
  );
};
