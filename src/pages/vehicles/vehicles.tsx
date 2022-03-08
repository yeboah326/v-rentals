import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "./styles";

export const Vehicles = () => {
  return (
    <Background>
        <SideNavbar vehicles={true}/>
    </Background>
  );
};
