import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";

export const Report = () => {
  return (
    <Background>
        <SideNavbar report={true}/>
    </Background>
  );
};
