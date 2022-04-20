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
  getAllCustomers: () => void;
  deleteCustomerById: ({ id }: deleteCustomerProps) => void;
};
