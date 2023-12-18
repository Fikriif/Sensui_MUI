import Link from 'next/Link'
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
              width: {xs: 120, sm: 150, md: 250},
              marginBottom: {md: 2},
              bgcolor:'common.black',
              color: 'common.white'
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={anime.images.webp.image_url}
                  sx={{width: {xs: 120, sm: 150, md: 250}, height: {xs: 120, sm: 150, md: 250}}}
                  alt=""
                />
                <CardContent>
                  <Typography sx={{fontSize: {xs: 7, sm: 13, md: 23}}}>
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