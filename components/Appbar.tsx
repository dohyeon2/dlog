import styled from "styled-components";

export default function AppBar() {
  return (
    <AppBarStyled>
      <Text>asdf</Text>
    </AppBarStyled>
  );
}

const Text = styled.div``;

const AppBarStyled = styled.div`
  ${Text} {
    color: #ccc;
  }
`;
