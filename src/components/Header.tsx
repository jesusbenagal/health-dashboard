import { FC } from "react";
import { Grid } from "@mui/material";

interface Props {
  style?: React.CSSProperties;
}

export const Header: FC<Props> = ({ style }) => {
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      style={{
        backgroundColor: "#201f31",
        height: "75px",
        borderRadius: "0 0 32px 32px",
        padding: "0 25px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        ...style,
      }}
    >
      <Grid item>
        <span style={{ color: "#8b8e99" }}>Logo</span>
      </Grid>
      <Grid item>
        <span style={{ color: "#8b8e99" }}>User Menu</span>
      </Grid>
    </Grid>
  );
};
