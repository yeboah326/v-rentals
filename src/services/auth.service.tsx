import axios, { AxiosError } from "axios";
import {
  createUserProps,
  authenticateUserProps,
  AuthContextType,
} from "../@types/auth";
import React from "react";

export const AuthContext = React.createContext<AuthContextType | null>(null);

const API_URL = process.env.REACT_APP_API_URL;

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  async function createUser({ email, username, password }: createUserProps) {
    try {
      const response = await axios.post(API_URL + "/auth/create", {
        email,
        username,
        password,
      });
      return response;
    } catch (error) {
      console.error((error as AxiosError)?.response?.data);
    }
  }

  async function authenticateUser({ email, password }: authenticateUserProps) {
    try {
      const response = await axios.post(API_URL + "/auth/authenticate", {
        email,
        password,
      });
      localStorage.setItem(
        "user",
        response.status === 200 ? JSON.stringify(response.data) : ""
      );
      console.log(response.data);
      
    } catch (error) {
      console.error((error as AxiosError)?.response?.data);
    }
  }

  return (
    <AuthContext.Provider value={{ createUser, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
