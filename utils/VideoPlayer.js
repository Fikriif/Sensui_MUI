import { Button, Container } from "@mui/material";
import YouTube from "react-youtube";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const VideoPlayer = ({youtubeId}) => {
    const option = {
        width: "300",
        height: "250"
    }
  return (
    <>
        <Container maxWidth="xl" sx={{position: 'fixed', bottom: 0, left: { sm: '50%', md: '70%'}}}>
            <Button sx={{color: 'red'}}><HighlightOffIcon /></Button>
        <YouTube 
        videoId={youtubeId} 
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
        />
        </Container>
    </>
  )
}

export default VideoPlayer