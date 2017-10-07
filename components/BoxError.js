// @flow
import React, { type Element } from 'react';
import Box, { type BoxProps } from './Box';
import Text from './Text';
import { FormattedMessage } from 'react-intl';
import { arialFont, ghoticFont } from '../themes/fonts';

type BoxErrorType = 'warning' | 'error';

type BoxErrorProps = {
  errorMessage: Element<any>,
  type: BoxErrorType,
  rendered: boolean,
} & BoxProps;

const getBoxErrorType = (type: BoxErrorType) => {
  switch (type) {
    case 'warning':
      return (
        <FormattedMessage defaultMessage="Warning" id="boxError.warning" />
      );
    case 'error':
      return <FormattedMessage defaultMessage="Error" id="boxError.error" />;
  }
};

const BoxError = (props: BoxErrorProps) => {
  if (!props.rendered) return null;
  return (
    <Box
      style={{
        border: '1px solid #df0000',
        padding: '14px 14px 30px 30px',
        marginBottom: '30px',
        ...props.style,
      }}
      {...props}
    >
      <Text
        style={{
          color: '#df0000',
          fontFamily: ghoticFont,
          fontSize: '14px',
          marginBottom: '15px',
        }}
      >
        {getBoxErrorType(props.type)}
      </Text>
      <Text
        style={{
          color: '#df0000',
          fontFamily: arialFont,
          fontSize: '12px',
          lineHeight: '12px',
        }}
      >
        {props.errorMessage}
      </Text>
    </Box>
  );
};

export default BoxError;
