import { Box, CardMedia, Container, Typography } from "@mui/material";
import AuthLayout from "../../../components/Layout/AuthLayout";
import VideoPlayer from "../../../utils/VideoPlayer";

export async function getServerSideProps(context) {
    const { params } = context;
    const id = params.id
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );
  const detailsAnime = await response.json();
  return {
    props: {
      detailsAnime,
    },
  };
}

const Details = (props) => {
    const { detailsAnime } = props;
    
  return (
    <>
        <Container maxWidth="string" component="div" sx={{color: 'common.white', pb: 5}}>
            <AuthLayout>
            <Typography sx={{
                pt: 3,
                fontSize: {xs: 23, sm: 28, md:35}
            }}>
            {detailsAnime.data.title} {detailsAnime.data.year ? `- ${detailsAnime.data.year}` : null}
            </Typography>
            <Box sx={{display: 'flex', gap:2, overflowX: 'auto', color: 'common.white', py: 3}}>
                <Box sx={{border: 2, px: 1, py: 1}}>
                <Typography>Peringkat</Typography>
                <Typography>{detailsAnime.data.rank}</Typography>
                </Box>
                <Box sx={{border: 2, px: 1, py: 1}}>
                <Typography>Skor</Typography>
                <Typography>{detailsAnime.data.score}</Typography>
                </Box>
                <Box sx={{border: 2, px: 1, py: 1}}>
                <Typography>Members</Typography>
                <Typography>{detailsAnime.data.members}</Typography>
                </Box>
                <Box sx={{border: 2, px: 1, py: 1}}>
                <Typography>Episode</Typography>
                <Typography>{detailsAnime.data.episodes}</Typography>
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, pt: 1}}>
            <CardMedia
            component="img"
            image={detailsAnime.data.images.webp.image_url}
            sx={{width: 250, height: 250}}
            alt=""
            />
            <Typography>{detailsAnime.data.synopsis}</Typography>
            </Box>
            <VideoPlayer youtubeId={detailsAnime.data.trailer.youtube_id}/>
            </AuthLayout>
        </Container>
    </>
  )
}

export default Details