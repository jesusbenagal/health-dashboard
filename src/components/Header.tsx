import { FC, useState } from "react";
import {
  Grid,
  Avatar,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
interface Props {
  style?: React.CSSProperties;
}

export const Header: FC<Props> = ({ style }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: "#8B8E99",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <>
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
          <Grid container direction={"row"} alignItems={"center"} spacing={1}>
            <Grid item>
              <span style={{ color: "#8b8e99", fontSize: "15px" }}>
                Jesús Guerrero
              </span>
            </Grid>
            <Grid item>
              <Tooltip title="Settings">
                <IconButton
                  size={"small"}
                  disableRipple
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar {...stringAvatar("Jesús Guerrero")} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            backgroundColor: "#201f31",
            color: "#8b8e99",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#201f31",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};
