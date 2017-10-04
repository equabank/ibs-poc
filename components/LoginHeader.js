// @flow
import React, { type ComponentType } from 'react';
import Box from '../components/Box';
import SwitchLocale from '../components/SwitchLocale';
import A from '../components/A';
import Text from '../components/Text';
import Image from '../components/Image';
import { ghoticFont } from '../themes/fonts';
import type { IntlShape } from 'react-intl';
import { injectIntl, defineMessages } from 'react-intl';

const loginHeaderMessages = defineMessages({
  backToEqua: {
    defaultMessage: 'Zpět na ůvodní stránku',
    id: 'loginHeader.backToEqua',
  },
});

type Props = {
  intl: IntlShape,
};

const LoginHeaderInt = ({ intl }: Props) => (
  <Box flexDirection="row" justifyContent="space-between">
    <A
      href="https://www.equabank.cz/"
      target="_blank"
      title={intl.formatMessage(loginHeaderMessages.backToEqua)}
    >
      <Image
        width="160px"
        height="33px"
        marginTop="35px"
        marginLeft="30px"
        src="../static/img/login-logo.png"
      />
    </A>
    <Box marginRight="10px" marginTop="3px">
      <SwitchLocale
        style={{ textAlign: 'right', fontSize: '14px', color: 'black' }}
        fontFamily={ghoticFont}
      />
      <Box
        width="213px"
        paddingTop="13px"
        color="gray12"
        flexDirection="row"
        fontFamily={ghoticFont}
        style={{ fontSize: '14px', textAlign: 'right' }}
      >
        <Text
          color="gray12"
          style={{ fontSize: '14px', lineHeight: '22px' }}
          fontFamily={ghoticFont}
        >
          Spojení je zabezpečeno šifrováním a certifikáty
        </Text>
        <Image
          width="40px"
          height="40px"
          src="../static/img/ico-security-gray.png"
        />
      </Box>
    </Box>
  </Box>
);

const LoginHeader: ComponentType<Props> = injectIntl(LoginHeaderInt);

export default LoginHeader;
