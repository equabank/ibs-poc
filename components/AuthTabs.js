// @flow
import React from 'react';
import Box from './Box';
import A from './A';
import Text from './Text';
import { FormattedMessage } from 'react-intl';
import { ghoticFont } from '../themes/fonts';

const AuthTabs = () => (
  <Box flexDirection="row">
    <Box
      paddingTop="8px"
      paddingLeft="30px"
      paddingRight="31px"
      paddingBottom="8px"
      style={{
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        borderLeft: '1px solid #e8e8e8',
        borderRight: '1px solid #e8e8e8',
        borderTop: '1px solid #e8e8e8',
        // top, left, right
        boxShadow:
          '0 -7px 7px -7px rgba(0, 0, 0, 0.15),-7px 0 7px -7px rgba(0, 0, 0, 0.15),7px 0 7px -7px rgba(0, 0, 0, 0.15);',
        marginBottom: '-1px',
        zIndex: '500',
        backgroundColor: 'white',
      }}
    >
      <Text fontFamily={ghoticFont} style={{ color: '#02b1f4' }}>
        <FormattedMessage defaultMessage="Osobní" id="auth.heading" />
      </Text>
    </Box>
    <Box
      paddingTop="8px"
      paddingLeft="30px"
      paddingRight="31px"
      paddingBottom="8px"
      style={{
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        marginBottom: '-1px',
        zIndex: '500',
        backgroundColor: '#d9f4fd',
        marginLeft: '18px',
      }}
    >
      <A
        href="https://www.equabanking.cz/SME/"
        fontFamily={ghoticFont}
        color="black"
        style={{ ':hover': { color: '#02b1f4', textDecoration: 'none' } }}
      >
        <FormattedMessage defaultMessage="Firemní" id="auth.sme" />
      </A>
    </Box>
  </Box>
);

export default AuthTabs;
