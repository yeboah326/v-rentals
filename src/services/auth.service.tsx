import axios, { AxiosError } from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AuthContextType,
  AuthenticateUserProps,
  CreateUserProps,
} from "../@types/auth";

export const AuthContext = React.createContext<AuthContextType | null>(null);

const API_URL = process.env.REACT_APP_API_URL;

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const navigate = useNavigate();

  async function createUser({ email, username, password }: CreateUserProps) {
    try {
      const response = await axios.post(API_URL + "/auth/create", {
        email,
        username,
        password,
      });
      if (response.status === 201) {
        toast("Account created successfully");
      }
      return response;
    } catch (error) {
      console.error((error as AxiosError)?.response?.data);
    }
  }

  async function authenticateUser({ email, password }: AuthenticateUserProps) {
    try {
      const response = await axios.post(API_URL + "/auth/authenticate", {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/dashboard");
        toast("Login successful");
      }
    } catch (error) {
      console.error((error as AxiosError)?.response?.data);
    }
  }

  function isAuthenticated() {
    return localStorage.getItem("user") ? true : false;
  }

  function getToken() {
    return JSON.parse(localStorage?.getItem("user") as string).token;
  }

  function logoutUser() {
    localStorage.clear();
    navigate("/login");
    toast("Logout successful");
  }

  return (
    <AuthContext.Provider
      value={{
        createUser,
        authenticateUser,
        isAuthenticated,
        getToken,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
