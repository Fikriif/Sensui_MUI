import Head from "next/head";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import SignOutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import { SignOut } from "../../services/firebase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.6),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const AuthLayout = ({ children, title }) => {
  const defaultTitle = "Sensui";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flex: 1 }}>Sensui</Typography>
          <Search sx={{ marginRight: 7}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <ButtonBase onClick={SignOut}>
            <SignOutIcon>
              <Typography sx={{ ml: 1 }}>Sign Out</Typography>
            </SignOutIcon>
          </ButtonBase>
        </Toolbar>
      </AppBar>
      <Box component="main" style={{ paddingTop: "64px" }}>
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </>
  );
};

export default AuthLayout;
