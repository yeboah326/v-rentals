import React from "react";
import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { MdChevronRight } from "react-icons/md";
import { CustomInput } from "../../components/custom_input/custom_input";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CustomerContextType,
  EditCustomerProps,
} from "../../@types/customers";
import { CustomerContext } from "../../services/customers.service";

export const EditCustomer = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state as EditCustomerProps;

  const { editCustomerById, deleteCustomerById } = React.useContext(
    CustomerContext
  ) as CustomerContextType;

  const { register, handleSubmit } = useForm<EditCustomerProps>();

  const onSubmit: SubmitHandler<EditCustomerProps> = (data) => {
    data.id = state.id;
    editCustomerById(data);
  };

  return (
    <Background>
      <SideNavbar customers={true} />
      <Container>
        <CustomText
          text="Edit Customer"
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
            text="edit customer"
            bgColor="var(--Iris-50)"
            color="white"
            border="none"
            borderRadius="0.3rem"
            padding="0.2rem 0.5rem"
            fontFamily="Comfortaa"
            clicked={() => {
              navigate("/customers/edit");
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
              default={state.name}
              registerFieldName="name"
              registerField={register}
            />
            <CustomInput
              fieldName="Email"
              type="text"
              default={state.email}
              registerFieldName="email"
              registerField={register}
            />
            <CustomInput
              fieldName="Telephone"
              type="text"
              default={state.telephone}
              registerFieldName="telephone"
              registerField={register}
            />
            <CustomInput
              fieldName="Company"
              type="text"
              default={state.company}
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
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                text="DELETE"
                fontFamily="Comfortaa"
                bgColor="red"
                color="white"
                borderRadius="0.5rem"
                padding="1rem 2.0rem"
                border="none"
                clicked={() => {deleteCustomerById({id: state.id})}}
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
