import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContextType } from "../@types/auth";
import {
  CreateCustomerProps,
  GetCustomerProps,
  EditCustomerProps,
  DeleteCustomerProps,
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
  }: CreateCustomerProps) {
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
      console.log(response)
      if (response.status === 201) {
        toast("Customer created sucessfully");
        navigate("/customers");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function editCustomerById({
    company,
    email,
    name,
    telephone,
    id,
  }: EditCustomerProps) {
    try {
      const response = await axios.put(
        API_URL + `/customer/${id}`,
        {
          company,
          email,
          name,
          telephone,
        },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      if (response.status === 200) {
        toast("Customer details updated");
        navigate("/customers");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getCustomerById({ id }: GetCustomerProps) {
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
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteCustomerById({ id }: DeleteCustomerProps) {
    try {
      const response = await axios.delete(API_URL + `/customer/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (response.status === 200) {
        toast("Customer deleted successfully");
        navigate("/customers");
      }
    } catch (error) {}
  }

  return (
    <CustomerContext.Provider
      value={{
        createCustomer,
        editCustomerById,
        getCustomerById,
        getAllCustomers,
        deleteCustomerById,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
