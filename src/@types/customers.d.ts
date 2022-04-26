import { AxiosResponse } from "axios";

export interface createCustomerProps {
  company: string;
  email: string;
  name: string;
  telephone: string;
}

export interface modifyCustomerProps {
  company: string;
  email: string;
  name: string;
  telephone: string;
  id: string;
}

export interface getCustomerProps {
  id: number;
}

export interface deleteCustomerProps {
  id: number;
}

export type CustomerContextType = {
  createCustomer: ({
    company,
    email,
    name,
    telephone,
  }: createCustomerProps) => void;
  modifyCustomerById: ({
    company,
    email,
    name,
    telephone,
  }: modifyCustomerProps) => void;
  getCustomerById: ({ id }: getCustomerProps) => void;
  getAllCustomers: () => Promise<AxiosResponse<any, any> | undefined>;
  deleteCustomerById: ({ id }: deleteCustomerProps) => void;
};

export interface customer {
  company: string;
  email: string;
  id: number;
  name: string;
  telephone: string;
}

export interface customers extends Array<customer> {}
