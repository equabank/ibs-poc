// @flow
import React from 'react';
import Text from '../components/Text';
import Image from '../components/Image';
import { FormattedMessage } from 'react-intl';
import Box from '../components/Box';
import A from '../components/A';
import { ghoticFont, arialFont } from '../themes/fonts';

const LoginPageFooter = () => (
  <Box>
    <FooterSeparator />
    <Box>
      <Box flexDirection="row" margin="auto" width="960">
        <FooterAdviceColumn />
        <FooterBranchColumn />
        <FooterFollowUsColumn />
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

const FooterBranchColumn = () => (
  <Box paddingTop="20px" paddingLeft="40px" paddingBottom="15px" width="340px">
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
        defaultMessage="Seznam poboček"
        id="footer.branches"
      />
    </Text>

    <Text
      fontFamily={arialFont}
      paddingTop="16px"
      style={{
        fontSize: '14px',
        lineHeight: '19.5',
      }}
    >
      <A href="http://www.equabank.cz/kontakt/adresy-pobocek/" target="_blank">
        <FormattedMessage
          defaultMessage="Seznam poboček"
          id="footer.branches"
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
      <A
        href="http://equabank.cz/firemni/kontakt/adresy-pobocek/"
        target="_blank"
      >
        <FormattedMessage
          defaultMessage="Kanceláře firemního bankovnictví"
          id="footer.smeBranches"
        />
      </A>
    </Text>
  </Box>
);

const FooterFollowUsColumn = () => (
  <Box paddingTop="20px" paddingLeft="40px" paddingBottom="15px" width="320px">
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
        defaultMessage="Jste klientem Equa bank?"
        id="footer.areYouClient"
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
      <FormattedMessage defaultMessage="Sledujte nás:" id="footer.folowUs" />
    </Text>
    <Box marginTop="5px" flexDirection="row">
      <Social
        href="http://www.facebook.com/equabank"
        title="Facebook"
        position={0}
      />
      <Social
        href="https://twitter.com/equabankcz"
        title="Twitter"
        position={1}
      />
      <Social
        href="https://plus.google.com/+equabank/posts"
        title="Google+"
        position={2}
      />
      <Social
        href="http://www.youtube.com/equabank"
        title="Youtube"
        position={3}
      />
      <Social
        href="http://www.linkedin.com/company/2260135"
        title="LinkedIn"
        position={4}
      />
      <Social
        href="http://www.equabank.cz/rss/news/"
        title="RSS"
        position={5}
      />
    </Box>
  </Box>
);

type SocialProps = {|
  href: string,
  title: string,
  position: number,
|};

const Social = ({ href, title, position }: SocialProps) => {
  const offset = position * -21;
  return (
    <A
      href={href}
      title={title}
      target="_blank"
      style={{
        textIndent: '-9999px',
        width: '21px',
        height: '21px',
        marginRight: '10px',
        background: "url('../static/img/social.png') 0 0 no-repeat",
        backgroundPosition: `${offset}px 0`,
      }}
    >
      {title}
    </A>
  );
};

export default LoginPageFooter;
