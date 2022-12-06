import { FC } from "react";
import { Grid } from "@mui/material";

interface Props {
  style?: React.CSSProperties;
}

export const Footer: FC<Props> = ({ style }) => {
  const yearToday = new Date().getFullYear();

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"flex-end"}
      style={{
        backgroundColor: "#201f31",
        height: "30px",
        padding: "0 20px",
        borderRadius: "32px 32px 0 0",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        ...style,
      }}
    >
      <span style={{ color: "#8b8e99", fontSize: "12px" }}>
        Powered by Jesús Guerrero {yearToday}
      </span>
    </Grid>
  );
};
