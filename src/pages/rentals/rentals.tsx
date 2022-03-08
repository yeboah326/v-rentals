import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background } from "./styles";

export const Rentals = () => {
  return (
    <Background>
      <SideNavbar rentals={true} />
    </Background>
  );
};
