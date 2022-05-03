import React from "react";
import { Button } from "../../components/button/button";
import { CustomInput } from "../../components/custom_input/custom_input";
import { CustomText } from "../../components/custom_text/custom_text";
import {
  Background,
  LoginBox,
  LoginBoxForm,
  LoginBoxImage,
  LoginBoxText,
  LoginText,
  WelcomeText,
} from "./styles";
// Contexts & Hooks
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContextType, AuthenticateUserProps } from "../../@types/auth";
import { AuthContext } from "../../services/auth.service";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<AuthenticateUserProps>();

  // Function provided by the context
  const { authenticateUser } = React.useContext(AuthContext) as AuthContextType;

  // // Function to handle form submission
  const onSubmit: SubmitHandler<AuthenticateUserProps> = (data) =>
    authenticateUser(data);

  return (
    <div>
      <Background>
        <LoginBox>
          <LoginBoxImage></LoginBoxImage>
          <LoginBoxText>
            <WelcomeText>
              <p>Welcome to</p>
              <p style={{ color: "var(--Iris-100)" }}>v-rental</p>
            </WelcomeText>
            <LoginText>Log into your account</LoginText>
            <LoginBoxForm onSubmit={handleSubmit(onSubmit)}>
              <div>
                <CustomInput
                  fieldName="Email"
                  type="text"
                  registerFieldName="email"
                  registerField={register}
                />
                <CustomInput
                  fieldName="Password"
                  type="password"
                  registerFieldName="password"
                  registerField={register}
                />
                <CustomText
                  text="Don't have an account?"
                  fontFamily="Comfortaa"
                  fontSize="0.8rem"
                  marginTop="0.7rem"
                  marginBottom="3rem"
                  clicked={() => navigate("/signup")}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "flex-end",
                }}
              >
                <Button
                  text="submit"
                  color="white"
                  border="None"
                  fontFamily="Abel"
                  fontSize="1.2rem"
                  borderRadius="0.3rem"
                  bgColor="var(--Iris-100)"
                  margin="auto 0"
                  padding="0.8rem 1.6rem"
                  clicked={() => {}}
                />
              </div>
            </LoginBoxForm>
          </LoginBoxText>
        </LoginBox>
      </Background>
    </div>
  );
}
