import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "./styles";

export const Report = () => {
  return (
    <Background>
        <SideNavbar report={true}/>
    </Background>
  );
};
