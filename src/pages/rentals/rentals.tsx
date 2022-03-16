import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { MdAdd, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RentalRow } from "../../components/rental_row/rental_row";
import { PageButton } from "../../components/page_button/page_button";

export const Rentals = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <SideNavbar rentals={true} />
      <Container>
        <CustomText
          text="Rentals"
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
            text="rentals"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/rentals");
            }}
          />
          <Button
            text="ADD RENTAL"
            bgColor="var(--Iris-100)"
            color="white"
            border="none"
            borderRadius="0.7rem"
            icon={<MdAdd />}
            padding="1.0rem 2rem"
            fontSize="1.1rem"
            fontFamily="Comfortaa"
            gap="0.5rem"
            clicked={() => {
              navigate("/rentals/add");
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          <Button
            text="All"
            fontFamily="Comfortaa"
            color="var(--Iris-100)"
            bgColor="white"
            border="1px solid var(--Iris-100)"
            borderRadius="0.2rem"
            padding="0.3rem 1rem"
            clicked={() => {}}
          />
          <Button
            text="In progress"
            fontFamily="Comfortaa"
            color="var(--Iris-100)"
            bgColor="white"
            border="1px solid var(--Iris-100)"
            borderRadius="0.2rem"
            padding="0.3rem 1rem"
            clicked={() => {}}
          />
          <Button
            text="Completed"
            fontFamily="Comfortaa"
            color="var(--Iris-100)"
            bgColor="white"
            border="1px solid var(--Iris-100)"
            borderRadius="0.2rem"
            padding="0.3rem 1rem"
            clicked={() => {}}
          />
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem 2rem",
            fontFamily: "Comfortaa",
            fontWeight: "bold",
            marginTop: "2rem",
          }}
        >
          <div style={{ width: "45%" }}>Name</div>
          <div style={{ width: "15%" }}>Car</div>
          <div style={{ width: "15%" }}>Start Date</div>
          <div style={{ width: "15%" }}>Total Charge</div>
        </div>
        <div>
          <RentalRow
            car="GX-123-22"
            name="Kwaku Manu"
            email="kmanu@gmail.com"
            start_date="22-02-2022"
            total_charge={1204.23}
          />
          <RentalRow
            car="GX-123-22"
            name="Kwaku Manu"
            email="kmanu@gmail.com"
            start_date="22-02-2022"
            total_charge={1204.23}
          />
          <RentalRow
            car="GX-123-22"
            name="Kwaku Manu"
            email="kmanu@gmail.com"
            start_date="22-02-2022"
            total_charge={1204.23}
          />
          <RentalRow
            car="GX-123-22"
            name="Kwaku Manu"
            email="kmanu@gmail.com"
            start_date="22-02-2022"
            total_charge={1204.23}
          />
          <RentalRow
            car="GX-123-22"
            name="Kwaku Manu"
            email="kmanu@gmail.com"
            start_date="22-02-2022"
            total_charge={1204.23}
          />
          <RentalRow
            car="GX-123-22"
            name="Kwaku Manu"
            email="kmanu@gmail.com"
            start_date="22-02-2022"
            total_charge={1204.23}
          />
          <RentalRow
            car="GX-123-22"
            name="Kwaku Manu"
            email="kmanu@gmail.com"
            start_date="22-02-2022"
            total_charge={1204.23}
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
