import axios from "axios";
import {
  createUserProps,
  authenticateUserProps,
  AuthContextType,
} from "../@types/auth";
import React from "react";

export const AuthContext = React.createContext<AuthContextType | null>(null);

const API_URL = process.env.REACT_APP_API_URL;

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  async function createUser({ email, password, username }: createUserProps) {
    try {
      const response = await axios.post(API_URL + "/auth/", {
        email,
        password,
        username,
      });
      if (response.status === 200) {
        console.log("User created successfully");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function authenticateUser({ email, password }: authenticateUserProps) {
    try {
      const response = await axios.post(API_URL + "/auth/authenticate", {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("User authenticated successfully");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ createUser, authenticateUser }}
    >{children}</AuthContext.Provider>
  );
};
