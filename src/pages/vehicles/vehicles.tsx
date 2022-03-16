import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { MdAdd, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { CustomerRow } from "../../components/customer_row/customer_row";
import { PageButton } from "../../components/page_button/page_button";
import { VehicleRow } from "../../components/vehicle_row/vehicle_row";

export const Vehicles = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <SideNavbar vehicles={true} />
      <Container>
        <CustomText
          text="Vehicles"
          fontFamily="Comfortaa"
          fontSize="1.5rem"
          color="var(--Iris-100)"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2rem",
          }}
        >
          <Button
            text="vehicles"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/vehicles");
            }}
          />
          <Button
            text="ADD VEHICLE"
            bgColor="var(--Iris-100)"
            color="white"
            border="none"
            borderRadius="0.7rem"
            icon={<MdAdd />}
            padding="1.0rem 1.0rem"
            fontSize="1.1rem"
            fontFamily="Comfortaa"
            gap="0.5rem"
            clicked={() => {
              navigate("/vehicles/add");
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Comfortaa",
            fontWeight: "bold",
            padding: "1rem 2rem",
          }}
        >
          <div style={{ width: "20%" }}>Name</div>
          <div style={{ width: "20%" }}>Reg. No</div>
          <div style={{ width: "20%" }}>Type</div>
          <div style={{ width: "20%" }}>Cost /Hr</div>
          <div style={{ width: "20%" }}>Penalty /Hr</div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            minHeight: "70%",
          }}
        >
          <VehicleRow
            name="Tata Sumo"
            regNo="GX-123-22"
            type="SUV"
            charge={20.0}
            penalty={1.5}
          />
          <VehicleRow
            name="Tata Sumo"
            regNo="GX-123-22"
            type="SUV"
            charge={20.0}
            penalty={1.5}
          />

          <VehicleRow
            name="Tata Sumo"
            regNo="GX-123-22"
            type="SUV"
            charge={20.0}
            penalty={1.5}
          />

          <VehicleRow
            name="Tata Sumo"
            regNo="GX-123-22"
            type="SUV"
            charge={20.0}
            penalty={1.5}
          />

          <VehicleRow
            name="Tata Sumo"
            regNo="GX-123-22"
            type="SUV"
            charge={20.0}
            penalty={1.5}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <MdChevronLeft
              style={{ fontSize: "1.5rem", color: "var(--Iris-100)" }}
            />
            <PageButton pageNumber="1" active={true} />
            <PageButton pageNumber="2" />
            <PageButton pageNumber="3" />
            <MdChevronRight
              style={{ fontSize: "1.5rem", color: "var(--Iris-100)" }}
            />
          </div>
        </div>
      </Container>
    </Background>
  );
};
