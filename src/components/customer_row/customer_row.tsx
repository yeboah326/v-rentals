import { useNavigate } from "react-router-dom";
import { CustomText } from "../custom_text/custom_text";
import { Container } from "./styles";

type CustomerRowType = {
  name: string;
  email: string;
  company: string;
  telephone: string;
  id: number;
};

export const CustomerRow = (customerRow: CustomerRowType) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/customers/edit", {
          state: {
            name: customerRow.name,
            email: customerRow.email,
            company: customerRow.company,
            telephone: customerRow.telephone,
            id: customerRow.id
          },
        });
      }}
    >
      <div style={{ width: "20%" }}>
        <CustomText text={`${customerRow.name}`} fontFamily="Comfortaa" />
      </div>
      <div style={{ width: "40%" }}>
        <CustomText text={`${customerRow.email}`} fontFamily="Comfortaa" />
      </div>
      <div style={{ width: "40%" }}>
        <CustomText text={`${customerRow.company}`} fontFamily="Comfortaa" />
      </div>
    </Container>
  );
};
