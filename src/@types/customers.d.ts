import { AxiosResponse } from "axios";

export interface CreateCustomerProps {
  company: string;
  email: string;
  name: string;
  telephone: string;
}

export interface EditCustomerProps {
  company: string;
  email: string;
  name: string;
  telephone: string;
  id: number;
}

export interface GetCustomerProps {
  id: number;
}

export interface DeleteCustomerProps {
  id: number;
}

export type CustomerContextType = {
  createCustomer: ({
    company,
    email,
    name,
    telephone,
  }: createCustomerProps) => void;
  editCustomerById: ({
    company,
    email,
    name,
    telephone,
  }: EditCustomerProps) => void;
  getCustomerById: ({ id }: getCustomerProps) => void;
  getAllCustomers: () => Promise<AxiosResponse<any, any> | undefined>;
  deleteCustomerById: ({ id }: deleteCustomerProps) => void;
};

export interface CustomerObject {
  company: string;
  email: string;
  id: number;
  name: string;
  telephone: string;
}

export interface CustomerObjects extends Array<CustomerObject> {}
