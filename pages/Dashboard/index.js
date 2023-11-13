import withProtected from "../../hoc/withProtected";
import AuthLayout from "../../components/Layout/AuthLayout";
import AnimeList from "../../components/Pages/dashboard/AnimeList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();
  return {
    props: {
      anime,
    },
  };
}

const Dashboard = (props) => {
  const { anime } = props;

  return (
    <>
      <Container sx={{ bgcolor: 'common.black'}}>
        <AuthLayout title="Dashboard">
          <Box>
            <Typography variant="h2" component="div" sx={{ color: 'common.white' }}>Most Popular</Typography>
            {anime.data.map((data) => {
              return (
                <Box
                  key={data.mal_id}
                >
                  <AnimeList
                    title={data.title}
                    images={data.images.webp.image_url}
                    id={data.mal_id}
                  />
                </Box>
              );
            })}
          </Box>
        </AuthLayout>
      </Container>
    </>
  );
};

export default withProtected(Dashboard);
// export default Dashboard
