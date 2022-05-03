import React from "react";
import { MdAdd, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CustomerContextType, CustomerObjects } from "../../@types/customers";
import { Background } from "../../common/styles";
import { Button } from "../../components/button/button";
import { CustomerRow } from "../../components/customer_row/customer_row";
import { CustomText } from "../../components/custom_text/custom_text";
import { PageButton } from "../../components/page_button/page_button";
import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { CustomerContext } from "../../services/customers.service";
import { Container } from "./styles";

export const Customers = () => {
  const navigate = useNavigate();

  const { getAllCustomers } = React.useContext(
    CustomerContext
  ) as CustomerContextType;

  const [customers, setCustomers] = React.useState<CustomerObjects | []>([]);

  React.useEffect(() => {
    getAllCustomers()
      .then((response) => setCustomers(response?.data.customers))
      .catch((error) => console.error(error));
  }, [getAllCustomers]);

  return (
    <Background>
      <SideNavbar customers={true} />
      <Container>
        <CustomText
          text="Customers"
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
          <Button
            text="ADD CUSTOMER"
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
              navigate("/customers/add");
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
          <div style={{ width: "40%" }}>Email</div>
          <div style={{ width: "40%" }}>Company</div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            minHeight: "70%",
          }}
        >
          {customers.map((customer) => {
            return (
              <CustomerRow
                name={customer.name}
                email={customer.email}
                company={customer.company}
                telephone={customer.telephone}
                id={customer.id}
                key={customer.id}
              />
            );
          })}
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
