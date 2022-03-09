import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";

export const Customers = () => {
  return (
    <Background>
        <SideNavbar customers={true}/>
    </Background>
  );
};
