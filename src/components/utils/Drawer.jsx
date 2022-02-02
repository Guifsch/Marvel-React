import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import ButtonBackAndHome from "../../components/utils/ButtonBackAndHome";
import { makeStyles } from "@material-ui/core/styles";
import backgroundDrawer from "../../assets/backgroundDrawer.png";

const useStyles = makeStyles({
  drawerMenu: {
    backgroundColor: "black",
  },
  drawerList: {
    display: "flex",
    flexDirection: "column",
    fontSize: "2.5rem",
    margin: "0 15px 0 15px !important",
    fontWeight: 900,
  },
  toolBar: {
    backgroundColor: "black",
  },
  toolBarAncor: {
    color: "black",
    transition: "0.2s",
    margin: "5px 0",
    padding: "0 0 0 10px",
    boxShadow: "0px 2px 5px black",
    "&:hover": {
      color: "#e62429",
    },
  },
});

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={classes.drawerMenu}
          >
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: {
              xs: "100%", // theme.breakpoints.up('xs')
              sm: 240, // theme.breakpoints.up('sm')
            },
            boxSizing: "border-box",
            backgroundImage: `url(${backgroundDrawer})`,
            color: "black",
            borderRight: "solid 5px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            justifyContent: {
              xs: "space-between!important",
              sm: "flex-end!important",
            },
          }}
        >
          <ButtonBackAndHome backButtonText={"someProp"} />
          <ButtonBackAndHome />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon
                sx={{
                  fontSize: {
                    xs: "5rem!important",
                    sm: "3rem!important",
                  },
                }}
              />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List className={classes.drawerList}>
          <Link className={classes.toolBarAncor} to={"/characters"}>
            CHARACTERS
          </Link>

          <Link className={classes.toolBarAncor} to={"/comics"}>
            COMICS
          </Link>
          <Link className={classes.toolBarAncor} to={"/creators"}>
            CREATORS
          </Link>

          <Link className={classes.toolBarAncor} to={"/events"}>
            EVENTS
          </Link>

          <Link className={classes.toolBarAncor} to={"/series"}>
            SERIES
          </Link>

          <Link className={classes.toolBarAncor} to={"/stories"}>
            STORIES
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
