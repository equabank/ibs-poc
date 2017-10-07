// @flow
import React, { type ComponentType, type Element } from 'react';
import Box, { type BoxProps } from './Box';
import AuthTabs from './AuthTabs';
import Form from './Form';
import ValidationError from './ValidationError';
import Text from './Text';
import Set from './Set';
import TextInput from './TextInput';
import { FormattedMessage } from 'react-intl';
import { SignInButton } from './buttons';
import * as validation from '../lib/validation';
import { setCookie } from '../lib/cookie';
import Router from 'next/router';
import sitemap from '../lib/sitemap';
import withMutation, { getClientMutationId } from './withMutation';
import SigninMutation from '../mutations/SigninMutation';
import { type SigninMutationResponse } from '../mutations/__generated__/SigninMutation.graphql';
import { arialFont, ghoticFont } from '../themes/fonts';

type BoxErrorType = 'warning' | 'error';

type BoxErrorProps = {
  errorMessage: Element<any>,
  type: BoxErrorType,
  rendered: boolean,
} & BoxProps;
//Upozornění
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

export default BoxError;
