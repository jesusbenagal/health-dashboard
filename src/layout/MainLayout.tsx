import { FC } from "react";
import { Footer, Header, Sidebar } from "../components";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar>Hola</Sidebar>
      {/* <main>{children}</main> */}
      <Footer />
    </>
  );
};
