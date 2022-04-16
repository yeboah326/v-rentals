import {
  Background,
  SignupBox,
  SignupBoxImage,
  SignupBoxText,
  SignupBoxForm,
  WelcomeText,
  SignupText,
} from "./styles";
import React from "react";
import { CustomInput } from "../../components/custom_input/custom_input";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserProps, AuthContextType } from "../../@types/auth";
import { AuthContext } from "../../services/auth.service";

export default function SignUp() {
  const { register, handleSubmit } = useForm<createUserProps>();

  // Functions provided by the context
  const { createUser } = React.useContext(AuthContext) as AuthContextType;

  const onSubmit: SubmitHandler<createUserProps> = (data) => createUser(data);

  return (
    <div>
      <Background>
        <SignupBox>
          <SignupBoxImage></SignupBoxImage>
          <SignupBoxText>
            <WelcomeText>
              <p>Welcome to</p>
              <p style={{ color: "var(--Iris-100)" }}>v-rental</p>
            </WelcomeText>
            <SignupText>Create your account</SignupText>
            <SignupBoxForm onSubmit={handleSubmit(onSubmit)}>
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
                <CustomInput
                  fieldName="Confirm password"
                  type="password"
                  registerFieldName="confirm_password"
                  registerField={register}
                />
                <CustomText
                  text="Already have an account?"
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
            </SignupBoxForm>
          </SignupBoxText>
        </SignupBox>
      </Background>
    </div>
  );
}
