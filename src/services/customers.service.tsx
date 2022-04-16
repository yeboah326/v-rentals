import axios from "axios";
import React from "react";
import { createCustomerProps, CustomerContextType } from "../@types/customers";

export const CustomerContext = React.createContext<CustomerContextType | null>(
  null
);

const API_URL = process.env.REACT_APP_API_URL;

export const CustomerProvider: React.FC<React.ReactNode> = ({ children }) => {
  async function createCustomer({
    company,
    email,
    name,
    telephone,
  }: createCustomerProps) {
    try {
      const response = await axios.post(API_URL + "/customer/", {
        company,
        email,
        name,
        telephone,
      });
      if (response.status === 200) {
        console.log("User created successfully");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CustomerContext.Provider
      value={{ createCustomer }}
    ></CustomerContext.Provider>
  );
};
