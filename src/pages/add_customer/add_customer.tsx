import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";

export const AddCustomer = () => {
  return (
    <Background>
        <SideNavbar customers={true}/>
    </Background>
  );
};
