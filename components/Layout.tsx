import AppBar from "components/AppBar";
import styled from "styled-components";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

function _Layout({ className, children }: LayoutProps) {
  return (
    <div className={className}>
      <AppBar />
      {children}
    </div>
  );
}

const Layout = styled(_Layout)``;

export default Layout;
