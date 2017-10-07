// @flow
import React from 'react';
import Box from '../components/Box';
import A from '../components/A';
import Text from '../components/Text';
import { arialFont } from '../themes/fonts';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const FraudWarning = () => (
  <Box
    style={{
      fontSize: '12px',
      fontFamily: arialFont,
      border: '1px solid #e8e8e8',
      background: '#efefef',
      borderRadius: '15px',
      width: '375px',
      padding: '16px 25px',
    }}
  >
    <Text
      style={{
        fontSize: '12px',
        fontFamily: arialFont,
        fontWeight: 'bold',
        marginBottom: '10px',
      }}
    >
      <FormattedMessage
        id="fraudWarning.heading"
        defaultMessage="Warning against fraudulent e-mails"
      />
    </Text>
    <Text
      style={{
        fontSize: '12px',
        fontFamily: arialFont,
        lineHeight: '16',
        marginBottom: '10px',
      }}
    >
      <FormattedHTMLMessage
        id="fraudWarning.par1"
        defaultMessage="Equa bank would <b>never send</b> you a direct link to your internet banking via email."
      />
    </Text>
    <Text
      style={{
        fontSize: '12px',
        fontFamily: arialFont,
        lineHeight: '16',
        marginBottom: '10px',
      }}
    >
      <FormattedHTMLMessage
        id="fraudWarning.par2"
        defaultMessage="In case you receive such an e-mail, do not respond to it. It is best to delete it. Verify the secure connection by displaying a certificate."
      />
    </Text>
    <A
      href="https://www.equabank.cz/pece-a-podpora/bezpecnostni-zasady/"
      style={{
        fontSize: '12px',
        fontFamily: arialFont,
        lineHeight: '16',
      }}
    >
      <FormattedMessage
        id="fraudWarning.link"
        defaultMessage="Security quidelines"
      />
    </A>
  </Box>
);

export default FraudWarning;
