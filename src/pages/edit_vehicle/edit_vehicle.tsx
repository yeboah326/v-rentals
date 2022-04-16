import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { MdChevronRight } from "react-icons/md";
import { CustomInput } from "../../components/custom_input/custom_input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const EditVehicle = () => {
  const navigate = useNavigate();
  const { register } = useForm();

  return (
    <Background>
      <SideNavbar vehicles={true} />
      <Container>
        <CustomText
          text="Edit Vehicle"
          fontFamily="Comfortaa"
          fontSize="1.5rem"
          color="var(--Iris-100)"
        />
        <div
          style={{ display: "flex", marginTop: "1.5rem", alignItems: "center" }}
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
          <MdChevronRight style={{ color: "var(--Iris-50)" }} />
          <Button
            text="edit vehicle"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/vehicles/edit");
            }}
          />
        </div>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            columnGap: "3rem",
            height: "90%",
          }}
        >
          <div>
            <CustomInput
              fieldName="Name"
              type="text"
              default="Tata Sumo"
              registerFieldName="name"
              registerField={register}
            />
            <CustomInput
              fieldName="Registration Number"
              type="text"
              default="GX-123-22"
              registerFieldName="registration_number"
              registerField={register}
            />
            <CustomInput
              fieldName="Type"
              type="text"
              default="SUV"
              registerFieldName="type"
              registerField={register}
            />
            <CustomInput
              fieldName="Penalty per hour"
              type="number"
              default="1.50"
              step="0.01"
              registerFieldName="penalty_per_hour"
              registerField={register}
            />

            <CustomInput
              fieldName="Cost per hour"
              type="number"
              default="20.0"
              step="0.01"
              registerFieldName="cost_per_hour"
              registerField={register}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                text="DELETE"
                fontFamily="Comfortaa"
                bgColor="red"
                color="white"
                borderRadius="0.5rem"
                padding="1rem 2.0rem"
                border="none"
                clicked={() => {}}
              />
              <Button
                text="SAVE CHANGES"
                fontFamily="Comfortaa"
                bgColor="var(--Iris-100)"
                color="white"
                borderRadius="0.5rem"
                padding="1rem 1.4rem"
                border="none"
                clicked={() => {}}
              />
            </div>
          </div>
        </form>
      </Container>
    </Background>
  );
};
