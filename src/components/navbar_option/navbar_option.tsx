import { Container, Icon, TextDescription } from "./styles";

type NavbarOptionType = {
  text: string;
  icon: any;
  clicked: Function;
  active?: boolean;
};

export const NavbarOption = ({
  text,
  icon,
  clicked,
  active = false,
}: NavbarOptionType) => {
  return (
    <Container
      style={
        active
          ? { backgroundColor: "white", color: "var(--Iris-100)" }
          : { backgroundColor: "var(--Iris-100)", color: "white" }
        }
        onClick={() => clicked()}
        >
      <Icon>{icon}</Icon>
      <TextDescription>{text}</TextDescription>
    </Container>
  );
};
