import { Container } from "./styles";
import { Logo } from "../logo/logo";
import { NavbarOption } from "../navbar_option/navbar_option";
import {
  MdFileCopy,
  MdDirectionsCar,
  MdPerson,
  MdCarRental,
  MdAnalytics,
  MdLogout,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

type SideNavbarActiveType = {
  dashboard?: boolean;
  vehicles?: boolean;
  customers?: boolean;
  rentals?: boolean;
  report?: boolean;
};

export const SideNavbar = ({
  dashboard = false,
  vehicles = false,
  customers = false,
  rentals = false,
  report = false,
}: SideNavbarActiveType) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <div>
        <NavbarOption
          text="Dashboard"
          icon={<MdFileCopy />}
          active={dashboard}
          clicked={() => navigate("/dashboard")}
        />
        <NavbarOption
          text="Vehicles"
          icon={<MdDirectionsCar />}
          active={vehicles}
          clicked={() => navigate("/vehicles")}
        />
        <NavbarOption
          text="Customers"
          icon={<MdPerson />}
          active={customers}
          clicked={() => navigate("/customers")}
        />
        <NavbarOption
          text="Rentals"
          icon={<MdCarRental />}
          active={rentals}
          clicked={() => navigate("/rentals")}
        />
        <NavbarOption
          text="Report"
          icon={<MdAnalytics />}
          active={report}
          clicked={() => navigate("/report")}
        />
      </div>

      <NavbarOption
        text="Logout"
        icon={<MdLogout />}
        clicked={() => navigate("/dashboard")}
      />
    </Container>
  );
};
