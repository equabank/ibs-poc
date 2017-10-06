// @flow
import React from 'react';
import app from '../components/app';
import BasePage from '../components/BasePage';
import LoginPageFooter from '../components/LoginPageFooter';
import Box from '../components/Box';
import LoginHeader from '../components/LoginHeader';
import Auth from '../components/Auth';
import sitemap from '../lib/sitemap';
import { loginPage } from '../themes/browserTheme';

const Index = ({ intl }) => (
  <BasePage
    title={intl.formatMessage(sitemap.index.title)}
    pageTemplate={loginPage}
  >
    <PageContent>
      <Container flex={1}>
        <LoginHeader intl={intl} />
        <Box height="100px" />
        <Auth />
        <Box height="300px" />
      </Container>
      <LoginPageFooter />
    </PageContent>
  </BasePage>
);
// Flex 1 to make footer sticky.
const Container = ({ children }) => (
  <Box flex={1} margin="auto" width="960">
    {children}
  </Box>
);
const PageContent = ({ children }) => (
  <Box
    style={{
      minHeight: '100vh' // make footer sticky
    }}
  >
    {children}
  </Box>
);

export default app(Index);
