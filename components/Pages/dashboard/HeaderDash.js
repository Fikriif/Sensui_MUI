import { Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/Link";

const HeaderDash = ({title, linkHref, linkTitle}) => {
  return (
    <>
        <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'space-between', py: 2}}>
          <Typography sx={{ color: 'common.white', fontSize: {xs: 25, md: 35} }}>{title}</Typography>
            {linkHref && linkTitle ? <Link href={linkHref}>
              <Button size="small" sx={{ color: 'common.white', fontSize: {xs: 7, md: 13}}}>{linkTitle}</Button>
            </Link> : null}
        </Container>
    </>
  )
}

export default HeaderDash