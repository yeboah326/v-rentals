import { Container } from "./styles";

type PageButtonType = {
  active?: boolean;
  pageNumber: string;
};

export const PageButton = ({ active = false, pageNumber }: PageButtonType) => {
  return (
    <Container
      style={
        active ? { color: "white", backgroundColor: "var(--Iris-100)" } : {}
      }
    >
      {pageNumber}
    </Container>
  );
};
