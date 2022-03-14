import { MdCarRental, MdDirectionsCar, MdPerson } from "react-icons/md";
import { CustomText } from "../../components/custom_text/custom_text";
import { SideNavbar } from "../../components/side_navbar/side_navbar";
import { Background, Container, DashboardCard } from "./styles";
import { useNavigate } from "react-router-dom";

type DashboardType = {
  totalCustomers: number;
  totalVehicles: number;
  totalRevenue: number;
  totalRentals: number;
};

export const Dashboard = () => {
  
  const navigate = useNavigate();
  
  const dashboardData: DashboardType = {
    totalCustomers: 100,
    totalVehicles: 29,
    totalRentals: 83,
    totalRevenue: 1279.45,
  };

  return (
    <Background>
      <SideNavbar dashboard={true} />
      <Container>
        <CustomText
          text="Dashboard"
          fontFamiy="Comfortaa"
          fontSize="1.5rem"
          color="var(--Iris-100)"
        />
        <CustomText
          text="Overview"
          fontSize="1.3em"
          fontFamiy="Comfortaa"
          marginTop="2em"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: "2em",
              marginTop: "1em",
            }}
          >
            <DashboardCard style={{ width: "25%" }} onClick={()=>{navigate("/vehicles")}}>
              <CustomText
                text={`${dashboardData.totalVehicles}`}
                fontFamiy="Comfortaa"
                fontSize="2em"
              />
              <CustomText text="vehicle" fontFamiy="Comfortaa" />
            </DashboardCard>
            <DashboardCard style={{ width: "25%" }} onClick={()=>{navigate("/customers")}}>
              <CustomText
                text={`${dashboardData.totalCustomers}`}
                fontFamiy="Comfortaa"
                fontSize="2em"
              />
              <CustomText text="customers" fontFamiy="Comfortaa"/>
            </DashboardCard>
            <DashboardCard style={{ width: "25%" }} onClick={()=>{navigate("/rentals")}}>
              <CustomText
                text={`${dashboardData.totalRentals}`}
                fontFamiy="Comfortaa"
                fontSize="2em"
              />
              <CustomText text="rentals" fontFamiy="Comfortaa" />
            </DashboardCard>
          </div>
          <DashboardCard style={{ width: "calc(75% + 4em)", padding: "3em" }} onClick={()=>{navigate("/report")}}>
            <CustomText
              text={`GHC ${dashboardData.totalRevenue}`}
              fontFamiy="Comfortaa"
              fontSize="2em"
            />
            <CustomText text="revenue" fontFamiy="Comfortaa" />
          </DashboardCard>
        </div>

        <CustomText
          text="Add New"
          fontSize="1.3em"
          fontFamiy="Comfortaa"
          marginTop="2em"
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "2em",
            marginTop: "1em",
          }}
        >
          <DashboardCard style={{ width: "25%" }} onClick={()=>{navigate("/vehicles/add")}}>
            <MdDirectionsCar size={50} />
            <CustomText text="vehicles" fontFamiy="Comfortaa" />
          </DashboardCard>
          <DashboardCard style={{ width: "25%" }} onClick={()=>{navigate("/customers/add")}}>
            <MdPerson size={50} />
            <CustomText text="customers" fontFamiy="Comfortaa" />
          </DashboardCard>
          <DashboardCard style={{ width: "25%" }} onClick={()=>{navigate("/rentals/add")}}>
            <MdCarRental size={50} />
            <CustomText text="rentals" fontFamiy="Comfortaa" />
          </DashboardCard>
        </div>
      </Container>
    </Background>
  );
};
