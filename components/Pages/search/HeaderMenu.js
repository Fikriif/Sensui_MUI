import { Container, Typography } from '@mui/material'

const HeaderMenu = ({title}) => {
  return (
    <>
    <Container>
        <Typography sx={{display: 'flex', justifyContent: 'center', color: 'common.white', py: 3}} variant="h3" >{title}</Typography>
    </Container>
    </>
  )
}

export default HeaderMenu