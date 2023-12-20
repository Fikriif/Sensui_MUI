import { Button, Container } from "@mui/material";
import YouTube from "react-youtube";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";

const VideoPlayer = ({youtubeId}) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

    const option = {
        width: "300",
        height: "250"
    }
  return (
    <>
      {isOpen ? (
        <Container maxWidth="xl" sx={{position: 'fixed', bottom: 0, left: { sm: '50%', md: '70%'}}}>
        <Button onClick={handleVideoPlayer} sx={{color: 'red'}}><HighlightOffIcon /></Button>
    <YouTube 
    videoId={youtubeId} 
    onReady={(event) => event.target.pauseVideo()}
    opts={option}
    onError={() => alert("Video is broken, please try another one.")}
    />
    </Container>
      ) : (<Button onClick={handleVideoPlayer} variant="contained" sx={{position: 'fixed', bottom: 0, left: { sm: '50%', md: '80%'}}}>Watch Trailer</Button>)}
    </>
  )
}

export default VideoPlayer;