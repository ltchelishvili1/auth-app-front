import { Toolbar, Box, Container } from '@mui/material';

import { ChildrenType } from 'types';

import Providers from 'Providers';
import HideOnScroll from 'Components/Layout/Navigation/HideOnScroll';
import Navigation from 'Components/Layout/Navigation';
import Footer from 'Components/Layout/Footer';

export default function RootLayout(props: ChildrenType) {
  const { children } = props;
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <HideOnScroll {...props}>
              <Navigation />
            </HideOnScroll>
            <Toolbar />
            <Container component='main' sx={{ my: 2 }}>
              {children}
            </Container>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
