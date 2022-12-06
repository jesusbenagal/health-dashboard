import { FC } from "react";
import { Footer, Header, Sidebar } from "../components";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header style={{ position: "fixed", top: 0, zIndex: 5 }} />
      <Sidebar
        style={{
          position: "fixed",
          top: "5.2rem",
          minHeight: "87vh",
          width: "4.2rem",
        }}
      >
        Hola
      </Sidebar>
      <div
        style={{
          paddingTop: "6rem",
          paddingLeft: "6rem",
          paddingRight: "1rem",
          paddingBottom: "4rem",
        }}
      >
        {children}
      </div>
      <Footer style={{ position: "fixed", bottom: 0, zIndex: 5 }} />
    </>
  );
};
