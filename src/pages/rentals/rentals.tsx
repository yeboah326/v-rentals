import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "../../common/styles";

export const Rentals = () => {
  return (
    <Background>
      <SideNavbar rentals={true} />
    </Background>
  );
};
