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

export default function Login() {
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
            <LoginBoxForm>
              <div>
                <CustomInput fieldName="Email" type="text" />
                <CustomInput fieldName="Password" type="text" />
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
