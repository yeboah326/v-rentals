import { Container } from "./styles";

type DashboardCardType = {
  width: string;
};

export const DasbhoardCard = (dashboardCard: DashboardCardType) => {
  return (
    <Container style={{ width: `${dashboardCard.width}` }}>
    </Container>
  );
};
