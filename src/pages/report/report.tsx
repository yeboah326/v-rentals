import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { CustomInput } from "../../components/custom_input/custom_input";
import { MdDownload } from "react-icons/md";
import { useForm } from "react-hook-form";

export const Report = () => {
  const { register } = useForm();

  return (
    <Background>
      <SideNavbar report={true} />
      <Container>
        <CustomText
          text="Report"
          fontFamily="Comfortaa"
          fontSize="1.5rem"
          color="var(--Iris-100)"
        />
        <CustomText
          text="Date"
          color="var(--Iris-100)"
          fontFamily="Comfortaa"
          marginTop="3rem"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomInput
            fieldName="Date"
            type="date"
            registerFieldName="date"
            registerField={register}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "3.3em",
            }}
          >
            <div
              style={{
                borderRadius: "0.5em",
                padding: "0.5em",
                color: "white",
                backgroundColor: "var(--Iris-100)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MdDownload cursor={"pointer"} size={40} style={{}} />
              <CustomText text="Download" fontFamily="Comfortaa" />
            </div>
          </div>
        </div>
        <CustomText
          text="Range"
          color="var(--Iris-100)"
          fontFamily="Comfortaa"
          marginTop="3rem"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <div style={{ display: "flex", gap: "1em" }}>
            <CustomInput
              fieldName="Start"
              type="date"
              registerFieldName="start"
              registerField={register}
            />
            <CustomInput
              fieldName="End"
              type="date"
              registerFieldName="end"
              registerField={register}
            />
          </div>
          <div
            style={{
              borderRadius: "0.5em",
              padding: "0.5em",
              color: "white",
              backgroundColor: "var(--Iris-100)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MdDownload cursor={"pointer"} size={40} style={{}} />
            <CustomText text="Download" fontFamily="Comfortaa" />
          </div>
        </div>
        <CustomText
          text="Month"
          color="var(--Iris-100)"
          fontFamily="Comfortaa"
          marginTop="3rem"
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CustomInput
            fieldName="Month"
            type="month"
            registerFieldName="month"
            registerField={register}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "3.3em",
            }}
          >
            <div
              style={{
                borderRadius: "0.5em",
                padding: "0.5em",
                color: "white",
                backgroundColor: "var(--Iris-100)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MdDownload cursor={"pointer"} size={40} style={{}} />
              <CustomText text="Download" fontFamily="Comfortaa" />
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
};
