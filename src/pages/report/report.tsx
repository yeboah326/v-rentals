import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";
import { Container } from "./styles";
import { CustomText } from "../../components/custom_text/custom_text";
import { CustomInput } from "../../components/custom_input/custom_input";
import { MdDownload } from "react-icons/md";

export const Report = () => {
  return (
    <Background>
      <SideNavbar report={true} />
      <Container>
        <CustomText
          text="Report"
          fontFamiy="Comfortaa"
          fontSize="1.5rem"
          color="var(--Iris-100)"
        />
        <div>
          <CustomText
            text="Day"
            marginTop="5em"
            color="var(--Iris-100)"
            fontFamiy="Comfortaa"
          />
          <form action="" style={{ display: "flex", alignItems: "center" }}>
            <input type="date"/>
          </form>
            <MdDownload cursor={"pointer"} size={40}/>
        </div>
        <div>
          <CustomText
            text="Range"
            color="var(--Iris-100)"
            fontFamiy="Comfortaa"
          />
          <form action=""></form>
        </div>
        <div>
          <CustomText
            text="Year"
            color="var(--Iris-100)"
            fontFamiy="Comfortaa "
          />
          <form action=""></form>
        </div>
      </Container>
    </Background>
  );
};
