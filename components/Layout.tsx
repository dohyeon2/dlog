import StyledAppBar from "components/AppBar";
import AppBar from "components/AppBar";
import styled from "styled-components";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

function _Layout({ className, children }: LayoutProps) {
  return (
    <div className={className}>
      <StyledAppBar />
      <ContentWrap>{children}</ContentWrap>
    </div>
  );
}

const ContentWrap = styled.div`
  flex: 1 1 0;
`;

const Layout = styled(_Layout)`
  height: 100%;
  padding: 1.25rem;
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export default Layout;
