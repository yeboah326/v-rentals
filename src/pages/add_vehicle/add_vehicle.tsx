import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { CustomInput } from "../../components/custom_input/custom_input";
import { useForm } from "react-hook-form";

export const AddVehicle = () => {
  const navigate = useNavigate();
  const { register } = useForm();

  return (
    <Background>
      <SideNavbar vehicles={true} />
      <Container>
        <CustomText
          text="Add Vehicle"
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
            text="add vehicle"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/vehicles/add");
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
              registerFieldName="name"
              registerField={register}
            />
            <CustomInput
              fieldName="Registration Number"
              type="text"
              registerFieldName="registration_number"
              registerField={register}
            />
            <CustomInput
              fieldName="Type"
              type="text"
              registerFieldName="type"
              registerField={register}
            />
            <CustomInput
              fieldName="Cost per hour"
              type="number"
              step="0.01"
              registerFieldName="cost_per_hour"
              registerField={register}
            />
            <CustomInput
              fieldName="Penalty per hour"
              type="number"
              step="0.01"
              registerFieldName="penalty_per_hour"
              registerField={register}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Button
              text="SUBMIT"
              fontFamily="Comfortaa"
              bgColor="var(--Iris-100)"
              color="white"
              borderRadius="0.5rem"
              padding="1rem 2.5rem"
              border="none"
              clicked={() => {}}
            />
          </div>
        </form>
      </Container>
    </Background>
  );
};
