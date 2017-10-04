// @flow
import React from 'react';
import app from '../components/app';
import BasePage from '../components/BasePage';
import Text from '../components/Text';
import Image from '../components/Image';
import { FormattedMessage } from 'react-intl';
import Box from '../components/Box';
import A from '../components/A';
import Auth from '../components/Auth';
import sitemap from '../lib/sitemap';
import { loginPage } from '../themes/browserTheme';
import { ghoticFont, arialFont } from '../themes/fonts';

const Index = ({ intl }) => (
  <BasePage
    title={intl.formatMessage(sitemap.index.title)}
    pageTemplate={loginPage}
  >
    <PageContent>
      <Container flex={1}>
        <Auth />
        <Box height="500px" />
      </Container>
      <PageFooter />
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
      minHeight: '100vh', // make footer sticky
    }}
  >
    {children}
  </Box>
);

const PageFooter = () => (
  <Box>
    <FooterSeparator />
    <Box>
      <Box flexDirection="row" margin="auto" width="960">
        <FooterAdviceColumn />
      </Box>
    </Box>
  </Box>
);

const FooterSeparator = () => (
  <Box height="35px" backgroundColor="gray10">
    <Box paddingLeft="20px" flexDirection="row" margin="auto" width="960">
      <Image
        src="../static/img/logo-footer.png"
        width="101px"
        height="17px"
        marginTop="2px"
      />
      <Text
        fontFamily={ghoticFont}
        color="gray11"
        flexWrap="wrap"
        size={-1}
        marginTop="1px"
        lineHeight={-1}
        paddingLeft="16px"
      >
        <FormattedMessage
          defaultMessage="Více, než čekáte"
          id="footer.moreThanExpected"
        />
      </Text>
    </Box>
  </Box>
);

const FooterAdviceColumn = () => (
  <Box
    height="241px"
    paddingTop="20px"
    paddingLeft="20px"
    paddingBottom="15px"
    width="280px"
  >
    <Text
      fontFamily={ghoticFont}
      color="gray12"
      style={{
        fontSize: '22px',
        lineHeight: '24',
      }}
    >
      <FormattedMessage
        lineHeight="24"
        defaultMessage="Potřebujete poradit?"
        id="footer.needAdvice"
      />
    </Text>

    <Text
      fontFamily={arialFont}
      paddingTop="16px"
      style={{
        fontSize: '14px',
        lineHeight: '19.5',
        color: '#808080',
      }}
    >
      <FormattedMessage
        defaultMessage="Volejte denně kdykoliv od 8.00 do 20.00 hod. "
        id="footer.needAdvice.openTime"
      />
      <Text color="blue10">
        <FormattedMessage
          defaultMessage="+420 222 010 222"
          id="footer.needAdvice.phone"
        />
      </Text>
      <FormattedMessage
        defaultMessage=" nebo pište na "
        id="footer.needAdvice.writeTo"
      />
      <A href="mailto:klientske.centrum@equabank.cz">
        <FormattedMessage
          defaultMessage="klientske.centrum@equabank.cz"
          id="footer.needAdvice.kcEmail"
        />
      </A>
    </Text>
    <Text
      fontFamily={arialFont}
      paddingTop="5px"
      style={{
        fontSize: '14px',
        lineHeight: '19.5',
      }}
    >
      <A href="http://www.equabank.cz/dulezite-dokumenty/" target="_blank">
        <FormattedMessage
          defaultMessage="Dokumenty ke stažení"
          id="footer.needAdvice.documents"
        />
      </A>
    </Text>
    <Text
      fontFamily={arialFont}
      paddingTop="5px"
      style={{
        fontSize: '14px',
        lineHeight: '19.5',
      }}
    >
      <A href="http://www.equabank.cz/caste-dotazy/" target="_blank">
        <FormattedMessage
          defaultMessage="Časté dotazy"
          id="footer.needAdvice.faq"
        />
      </A>
    </Text>
    <Text
      fontFamily={arialFont}
      paddingTop="14px"
      style={{
        color: '#888789',
        fontSize: '10px',
        lineHeight: '19.5',
      }}
    >
      <A
        href="http://www.equabank.cz/kontakt/"
        target="_blank"
        style={{
          color: '#888789',
          marginRight: '13px',
        }}
      >
        <FormattedMessage
          defaultMessage="Další kontakty"
          id="footer.needAdvice.contacts"
        />
      </A>
      <A
        href="https://www.equabank.cz/dulezite-dokumenty/"
        target="_blank"
        style={{ color: '#888789' }}
      >
        <FormattedMessage
          defaultMessage="Podmínky používání"
          id="footer.needAdvice.conditions"
        />
      </A>
    </Text>
    <Text
      fontFamily={arialFont}
      paddingTop="2px"
      style={{
        color: '#888789',
        fontSize: '10px',
        lineHeight: '19.5',
        whiteSpace: 'nowrap',
      }}
    >
      <FormattedMessage
        defaultMessage="© Equa bank a.s. 2011 - 2017. Všechna práva vyhrazena."
        id="footer.needAdvice.copyright"
      />
    </Text>
  </Box>
);

export default app(Index);
