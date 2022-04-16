export interface createUserProps {
  email: string;
  password: string;
  username: string;
}

export interface authenticateUserProps {
  email: string;
  password: string;
}

export type AuthContextType = {
  createUser: ({ email, password, username }: createUserProps) => void;
  authenticateUser: ({ email, password }: authenticateUserProps) => void;
};
