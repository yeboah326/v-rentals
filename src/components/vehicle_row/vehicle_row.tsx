import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { CustomText } from "../custom_text/custom_text";

type VehicleRowType = {
  name: string;
  regNo: string;
  type: string;
  charge: number;
  penalty: number;
};

export const VehicleRow = (vehicleRow: VehicleRowType) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/vehicles/edit")}>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.name}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.regNo}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.type}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.charge}`} fontFamiy="Comfortaa" />
      </div>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.penalty}`} fontFamiy="Comfortaa" />
      </div>
    </Container>
  );
};
