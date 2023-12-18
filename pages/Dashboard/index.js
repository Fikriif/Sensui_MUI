import withProtected from "../../hoc/withProtected";
import AuthLayout from "../../components/Layout/AuthLayout";
import AnimeList from "../../components/Pages/dashboard/AnimeList";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import HeaderDash from "../../components/Pages/dashboard/HeaderDash";

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=9`
  );
  const topAnime = await response.json();
  return {
    props: {
      topAnime,
    },
  };
}

const Dashboard = (props) => {
  const { topAnime } = props;

  return (
    <>
      <Container maxWidth="false" sx={{ bgcolor: 'common.black'}}>
        <AuthLayout title="Dashboard">
        <HeaderDash title="Most Popular" linkHref="/All" linkTitle="View All..." />
          <Box sx={{marginLeft: {md: 5, xs: 0}, justifyContent: {md: 'left', xs: 'center'}}}>
            <AnimeList api={topAnime} />
          </Box>
        </AuthLayout>
      </Container>
    </>
  );
};

export default withProtected(Dashboard);
