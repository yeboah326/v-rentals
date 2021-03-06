export interface CreateUserProps {
  email: string;
  username: string;
  password: string;
}

export interface AuthenticateUserProps {
  email: string;
  password: string;
}

export type AuthContextType = {
  createUser: ({ email, password, username }: createUserProps) => void;
  authenticateUser: ({ email, password }: authenticateUserProps) => void;
  isAuthenticated: () => boolean;
  getToken: () => string | null;
  logoutUser: () => void;
};
