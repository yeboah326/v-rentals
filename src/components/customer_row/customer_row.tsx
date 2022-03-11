import { useNavigate } from "react-router-dom";
import { CustomText } from "../custom_text/custom_text";
import { Container } from "./styles";
type CustomerRowType = {
  name: string;
  email: string;
  company: string;
};

export const CustomerRow = (customerRow: CustomerRowType) => {

  const navigate = useNavigate();

  return (
    <Container onClick={()=>{navigate("/customers/edit")}}>
      <div style={{ width: "20%" }}>
        <CustomText text={`${customerRow.name}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "40%" }}>
        <CustomText text={`${customerRow.email}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "40%" }}>
        <CustomText text={`${customerRow.company}`} fontFamiy="Comfortaa" />
      </div>
    </Container>
  );
};
