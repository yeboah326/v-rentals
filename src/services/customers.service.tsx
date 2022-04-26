import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContextType } from "../@types/auth";
import {
  createCustomerProps,
  getCustomerProps,
  modifyCustomerProps,
  deleteCustomerProps,
  CustomerContextType,
} from "../@types/customers";
import { AuthContext } from "./auth.service";

export const CustomerContext = React.createContext<CustomerContextType | null>(
  null
);

const API_URL = process.env.REACT_APP_API_URL;

export const CustomerProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { getToken } = React.useContext(AuthContext) as AuthContextType;

  const navigate = useNavigate();

  async function createCustomer({
    company,
    email,
    name,
    telephone,
  }: createCustomerProps) {
    try {
      const response = await axios.post(
        API_URL + "/customer/",
        {
          company,
          email,
          name,
          telephone,
        },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      if (response.status === 201) {
        toast("Account created sucessfully");
        navigate("/customers")
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function modifyCustomerById({
    company,
    email,
    name,
    telephone,
    id,
  }: modifyCustomerProps) {
    try {
      const response = await axios.put(API_URL + `/customer/${id}`, {
        company,
        email,
        name,
        telephone,
      });
      if (response.status === 200) {
        toast("Customer details updated");
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getCustomerById({ id }: getCustomerProps) {
    try {
      const response = await axios.get(API_URL + `/customer/${id}`, {
        headers: { Authorization: `Bearer ${"g"}` },
      });
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getAllCustomers() {
    try {
      const response = await axios.get(API_URL + "/customer/", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (response.status === 200) {
        console.log(response);
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteCustomerById({ id }: deleteCustomerProps) {
    try {
      const response = await axios.get(API_URL + `/customer/${id}`);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {}
  }

  return (
    <CustomerContext.Provider
      value={{
        createCustomer,
        modifyCustomerById,
        getCustomerById,
        getAllCustomers,
        deleteCustomerById,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
