import React from "react";
import {
  Background,
  LoginBox,
  LoginBoxImage,
  LoginBoxText,
  LoginBoxForm,
  WelcomeText,
  LoginText,
} from "./styles";
import { CustomInput } from "../../components/custom_input/custom_input";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
// Providers and Contexts
import { AuthContext } from "../../services/auth.service";
import { authenticateUserProps, AuthContextType } from "../../@types/auth";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm<authenticateUserProps>();

  // Function provided by the context
  const { authenticateUser } = React.useContext(AuthContext) as AuthContextType;

  // // Function to handle form submission
  const onSubmit: SubmitHandler<authenticateUserProps> = (data) =>
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
