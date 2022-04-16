import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { CustomInput } from "../../components/custom_input/custom_input";
import { useForm } from "react-hook-form";

export const EditRental = () => {
  const navigate = useNavigate();
  const { register } = useForm();

  return (
    <Background>
      <SideNavbar rentals={true} />
      <Container>
        <CustomText
          text="Edit Rentals"
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
            text="edit rental"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/rentals/edit");
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
              default="Kwaku Manu"
              registerFieldName="customer"
              registerField={register}
            />
            <CustomInput
              fieldName="Car"
              type="text"
              default="GX-123-22"
              registerFieldName="car"
              registerField={register}
            />
            <CustomInput
              fieldName="Start date"
              type="date"
              default="2022-02-22"
              registerFieldName="start_date"
              registerField={register}
            />
            <CustomInput
              fieldName="End date"
              type="date"
              default="2022-03-22"
              registerFieldName="end_date"
              registerField={register}
            />

            <CustomInput
              fieldName="Total charge"
              type="number"
              default="1204.34"
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
