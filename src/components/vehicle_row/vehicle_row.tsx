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
        <CustomText text={`${vehicleRow.name}`} fontFamily="Comfortaa" />
      </div>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.regNo}`} fontFamily="Comfortaa" />
      </div>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.type}`} fontFamily="Comfortaa" />
      </div>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.charge}`} fontFamily="Comfortaa" />
      </div>
      <div style={{ width: "20%" }}>
        <CustomText text={`${vehicleRow.penalty}`} fontFamily="Comfortaa" />
      </div>
    </Container>
  );
};
