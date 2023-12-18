import withProtected from "../../../hoc/withProtected";
import AuthLayout from "../../../components/Layout/AuthLayout";
import AnimeList from "../../../components/Pages/dashboard/AnimeList";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import HeaderDash from "../../../components/Pages/dashboard/HeaderDash";


export async function getServerSideProps(context) {
    const { params } = context;
    const keyword = params.keyword
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();
  return {
    props: {
      searchAnime,
      keyword
    },
  };
}

const Search = (props) => {
  const { searchAnime, keyword } = props;

  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: 'common.black'}}>
        <AuthLayout title="Dashboard">
        <HeaderDash sx={{marginTop: 5}} title={`Pencarian untuk ${keyword}...`} />
          <Box sx={{marginLeft: {md: 5, xs: 0}, justifyContent: {md: 'left', xs: 'center'}}}>
            <AnimeList api={searchAnime} />
          </Box>
        </AuthLayout>
      </Container>
    </>
  );
};

export default withProtected(Search);
// export default Dashboard
