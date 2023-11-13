import Link from 'next/Link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const AnimeList = ({ title, images, id }) => {
  return (
      <Link href={`/${id}`} className='cursor-pointer' sx={{ 
        display: 'flex',
        flex: 'row',
        gap: 2
      }}>
        <Card variant="outlined" sx={{ 
          width: 345,
          height: 400,
          }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={images}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Link>
  )
}

export default AnimeList