import Head from "next/head";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import SignOutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import { SignOut } from "../../services/firebase";
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/Link";

const AuthLayout = ({ children, title }) => {
  const defaultTitle = "Sensui";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const encodedQuery = encodeURIComponent(searchRef.current.value);
    if(!encodedQuery) return
    if(event.key === "Enter" || event.type === "click"){
      event.preventDefault()
      router.push(`/Search/${encodedQuery}`);
    }
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Link href="/Dashboard"><Typography sx={{ flex: 1 }}><Button sx={{color: 'common.black'}}>Sensui</Button></Typography></Link>
          <Box sx={{position: 'relative', marginRight: 5}}>
          <Input
            sx={{border: 2}}
            placeholder="Search Anime"
            inputRef={searchRef}
            onKeyDown={handleSearch}
            />
            <Button sx={{position: 'absolute', top: '5%', left: '70%', color: 'common.black'}} size="small" 
            onClick={handleSearch}>
              <SearchIcon />
            </Button>
          </Box>
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
