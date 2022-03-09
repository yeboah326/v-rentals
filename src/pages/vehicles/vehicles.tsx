import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";

export const Vehicles = () => {
  return (
    <Background>
        <SideNavbar vehicles={true}/>
    </Background>
  );
};
