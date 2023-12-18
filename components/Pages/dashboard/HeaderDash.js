import { Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/Link";

const HeaderDash = ({title, linkHref, linkTitle}) => {
  return (
    <>
        <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'space-between', pt: 2}}>
          <Typography variant="h4" sx={{ color: 'common.white' }}>{title}</Typography>
            {linkHref && linkTitle ? <Link href={linkHref}>
              <Button variant="caption" size="small" sx={{ color: 'common.white'}}>{linkTitle}</Button>
            </Link> : null}
        </Container>
    </>
  )
}

export default HeaderDash