import { FC } from "react";
import { Grid } from "@mui/material";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
}

export const Sidebar: FC<Props> = ({ children, style }) => {
  return (
    <Grid
      style={{
        backgroundColor: "#201F31",
        width: "50px",
        borderRadius: "0 32px 32px 0",
        height: "800px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        ...style,
      }}
    >
      {children}
    </Grid>
  );
};
