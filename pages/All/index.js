import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import HeaderMenu from "../../components/Pages/search/HeaderMenu";
import Pagination from "../../components/Pages/search/Pagination";
import AnimeList from "../../components/Pages/dashboard/AnimeList";
import AuthLayout from "../../components/Layout/AuthLayout";


const All = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const topAnimeData = await response.json();
    setTopAnime(topAnimeData);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: 'common.black'}}>
      <AuthLayout>
      <HeaderMenu title={`Anime Page #${page}`}/>
      <Box sx={{marginLeft: {md: 5, xs: 0}, justifyContent: {md: 'left', xs: 'center'}}}>
        <AnimeList api={topAnime} />
      </Box>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
      </AuthLayout>
      </Container>
    </>
  );
};


export default All;
