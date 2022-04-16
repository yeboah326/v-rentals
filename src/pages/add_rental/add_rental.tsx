import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { MdChevronRight } from "react-icons/md";
import { CustomInput } from "../../components/custom_input/custom_input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const AddRental = () => {
  const navigate = useNavigate();
  const { register } = useForm();

  return (
    <Background>
      <SideNavbar rentals={true} />
      <Container>
        <CustomText
          text="Add Rental"
          fontFamily="Comfortaa"
          fontSize="1.5rem"
          color="var(--Iris-100)"
        />
        <div
          style={{ display: "flex", marginTop: "1.5rem", alignItems: "center" }}
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
          <MdChevronRight style={{ color: "var(--Iris-50)" }} />
          <Button
            text="add rental"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/rentals/add");
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
              fieldName="Customer"
              type="text"
              registerFieldName="customer"
              registerField={register}
            />
            <CustomInput
              fieldName="Car"
              type="text"
              registerFieldName="car"
              registerField={register}
            />
            <CustomInput
              fieldName="Start date"
              type="date"
              registerFieldName="start_date"
              registerField={register}
            />
            <CustomInput
              fieldName="End date"
              type="date"
              registerFieldName="end_date"
              registerField={register}
            />
            <CustomInput
              fieldName="Total charge"
              type="number"
              step="0.01"
              registerFieldName="total_charge"
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
