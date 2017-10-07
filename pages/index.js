// @flow
import React from 'react';
import app from '../components/app';
import BasePage from '../components/BasePage';
import LoginPageFooter from '../components/LoginPageFooter';
import Box from '../components/Box';
import A from '../components/A';
import LoginHeader from '../components/LoginHeader';
import Auth from '../components/Auth';
import Text from '../components/Text';
import Image from '../components/Image';
import { ghoticFont } from '../themes/fonts';
import sitemap from '../lib/sitemap';
import { loginPage } from '../themes/browserTheme';
import { FormattedMessage } from 'react-intl';

const Index = ({ intl }) => (
  <BasePage
    title={intl.formatMessage(sitemap.index.title)}
    pageTemplate={loginPage}
  >
    <PageContent>
      <Container flex={1}>
        <LoginHeader intl={intl} />
        <Box
          paddingTop="47px"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <Text
              paddingLeft="30px"
              fontFamily={ghoticFont}
              style={{ color: '#00b2f2', fontSize: '30px' }}
            >
              <FormattedMessage
                id="loginPage.headline"
                defaultMessage="Vstup do internetového bankovnictví"
              />
            </Text>
            <Box marginTop="30px" paddingLeft="10px">
              <Auth />
            </Box>
          </Box>
          <AdcertBox />
        </Box>
        <Box height="100px" />
      </Container>
      <LoginPageFooter />
    </PageContent>
  </BasePage>
);
const AdcertBox = () => (
  <Box paddingTop="70px" marginRight="-10px">
    <A
      href="https://www.equabank.cz/promo/kontokorent?cid=IBS_feb_2017_overdraft_p21c808f37"
      target="_blank"
    >
      <Image
        src="../static/img/login-overdraft.jpg"
        width="354px"
        height="178px"
      />
    </A>
    <A
      href="https://www.equabank.cz/hypoteky/refinancovani?cid=IBS_apr_2017_mortgage_p21c810f37"
      target="_blank"
      marginTop="24px"
    />
    <Image
      src="../static/img/login-mortgage.jpg"
      width="354px"
      height="178px"
    />
  </Box>
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
