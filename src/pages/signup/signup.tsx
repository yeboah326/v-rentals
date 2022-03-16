import {
  Background,
  SignupBox,
  SignupBoxImage,
  SignupBoxText,
  SignupBoxForm,
  WelcomeText,
  SignupText,
} from "./styles";
import { CustomInput } from "../../components/custom_input/custom_input";
import { CustomText } from "../../components/custom_text/custom_text";
import { Button } from "../../components/button/button";

export default function Login() {
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
            <SignupBoxForm>
              <div>
                <CustomInput fieldName="Email" type="text" />
                <CustomInput fieldName="Password" type="text" />
                <CustomInput fieldName="Confirm password" type="text" />
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
