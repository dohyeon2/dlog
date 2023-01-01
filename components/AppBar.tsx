import { Menu, MenuItem } from "semantic-ui-react";
import styled from "styled-components";

export default function AppBar() {
  return (
    <Menu>
      <Logo>dlog</Logo>
      <MenuItem name="기록" active href="/log">
        기록
      </MenuItem>
    </Menu>
  );
}

const Logo = styled(MenuItem)`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-size: 1.5rem;
`;
