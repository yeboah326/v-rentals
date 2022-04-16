export interface createCustomerProps {
  company: string;
  email: string;
  name: string;
  telephone: string;
}

export type CustomerContextType = {
  createCustomer: ({
    company,
    email,
    name,
    telephone,
  }: createCustomerProps) => void;
};
