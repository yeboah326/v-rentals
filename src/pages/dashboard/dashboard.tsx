import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "./styles";

export const Dashboard = () => {
  return (
    <Background>
        <SideNavbar dashboard={true}/>
    </Background>
  );
};
