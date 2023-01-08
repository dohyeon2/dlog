import { Menu, MenuItem } from "semantic-ui-react";
import styled from "styled-components";

export function AppBar({ className }: { className?: string }) {
  return (
    <Menu className={className}>
      <Logo>dlog</Logo>
      <MenuItem name="기록" active href="/log">
        기록
      </MenuItem>
    </Menu>
  );
}

const StyledAppBar = styled(AppBar)``;

export default StyledAppBar;

const Logo = styled(MenuItem)`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-size: 1.5rem;
`;
