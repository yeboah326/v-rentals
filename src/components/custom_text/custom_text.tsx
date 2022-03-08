type CustomTextType = {
  fontSize?: string;
  fontFamiy?: string;
  marginTop?: string;
  marginBottom?: string;
  text: string;
};

export const CustomText = (customTextType: CustomTextType) => {
  return (
    <p
      style={{
        fontSize: `${customTextType.fontSize}`,
        fontFamily: `${customTextType.fontFamiy}`,
        marginTop: `${customTextType.marginTop}`
      }}
    >
      {customTextType.text}
    </p>
  );
};
