import { Container, Typography, Button } from '@mui/material'

const Pagination = ({ page, lastPage, setPage }) => {
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
    }

  return (
    <>
    <Container sx={{display: 'flex', justifyContent: 'center', pb: 3, gap: 3}}>
        {page <= 1 ? null : <Button onClick={handlePrevPage}>Prev</Button>}
        <Typography sx={{color: 'primary.main', marginTop: 0.8}}>{page} of {lastPage}</Typography>
        {page >= lastPage ? null : <Button onClick={handleNextPage}>Next</Button>}
    </Container>
    </>
  )
}

export default Pagination