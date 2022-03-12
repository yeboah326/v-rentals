import { useNavigate } from "react-router-dom";
import { CustomText } from "../custom_text/custom_text";
import { Container } from "./styles";
type RentalRowType = {
  name: string;
  email: string;
  car: string;
  start_date: string;
  total_charge: Number;
};

export const RentalRow = (rentalRow: RentalRowType) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/rentals/edit");
      }}
    >
      <div style={{ width: "45%", display:"flex", gap:"1rem"}}>
        <CustomText text={`${rentalRow.name}`} fontFamiy="Comfortaa" />{" "}
        <CustomText text={`${rentalRow.email}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "15%" }}>
        <CustomText text={`${rentalRow.car}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "15%" }}>
        <CustomText text={`${rentalRow.start_date}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "15%" }}>
        <CustomText text={`${rentalRow.total_charge}`} fontFamiy="Comfortaa" />
      </div>
    </Container>
  );
};
