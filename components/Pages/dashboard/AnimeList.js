import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

const AnimeList = ({ api }) => {
  return (
    <Grid
      container columns={{ xs: 2, sm: 3, md: 4 }}
      sx={{ paddingTop: {sm: 1, md: 5}, display: 'flex',
      gap: 2, justifyContent: 'center' }}
    >
      {api.data?.map((anime) => {
        return (
          <Link href={`/Details/${anime.mal_id}`} key={anime.mal_id}>
            <Card variant="outlined" sx={{
              width: {xs: 150, sm: 160, md: 250},
              marginBottom: {md: 2},
              bgcolor:'common.black',
              color: 'common.white'
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={anime.images.webp.image_url}
                  sx={{width: {xs: 150, sm: 160, md: 250}, height: {xs: 150, sm: 160, md: 250}}}
                  alt=""
                />
                <CardContent>
                  <Typography sx={{fontSize: {xs: 12, sm: 16, md: 25}}}>
                    {anime.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        )
      })}

    </Grid>

  )
}

export default AnimeList