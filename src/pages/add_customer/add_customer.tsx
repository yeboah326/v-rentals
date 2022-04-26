import React from "react";
import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { MdChevronRight } from "react-icons/md";
import { CustomInput } from "../../components/custom_input/custom_input";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
// Contexts
import { CustomerContext } from "../../services/customers.service";
import { createCustomerProps, CustomerContextType } from "../../@types/customers";

export const AddCustomer = () => {
  const navigate = useNavigate();
  
  const { register, handleSubmit } = useForm<createCustomerProps>();

  const { createCustomer } = React.useContext(CustomerContext) as CustomerContextType;

  const onSubmit: SubmitHandler<createCustomerProps> = (data) => createCustomer(data);
  

  return (
    <Background>
      <SideNavbar customers={true} />
      <Container>
        <CustomText
          text="Add Customer"
          fontFamily="Comfortaa"
          fontSize="1.5rem"
          color="var(--Iris-100)"
        />
        <div
          style={{ display: "flex", marginTop: "1.5rem", alignItems: "center" }}
        >
          <Button
            text="customers"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/customers");
            }}
          />
          <MdChevronRight style={{ color: "var(--Iris-50)" }} />
          <Button
            text="add customer"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/customers/add");
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <CustomInput
              fieldName="Name"
              type="text"
              registerFieldName="name"
              registerField={register}
            />
            <CustomInput
              fieldName="Email"
              type="text"
              registerFieldName="email"
              registerField={register}
            />
            <CustomInput
              fieldName="Telephone"
              type="text"
              registerFieldName="telephone"
              registerField={register}
            />
            <CustomInput
              fieldName="Company"
              type="text"
              registerFieldName="company"
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
