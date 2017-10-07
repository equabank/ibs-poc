// @flow
import React, { type ComponentType } from 'react';
import Box from './Box';
import AuthTabs from './AuthTabs';
import Form from './Form';
import Text from './Text';
import BoxError from './BoxError';
import Set from './Set';
import TextInput from './TextInput';
import { FormattedMessage } from 'react-intl';
import { SignInButton } from './buttons';
import { setCookie } from '../lib/cookie';
import Router from 'next/router';
import sitemap from '../lib/sitemap';
import withMutation, { getClientMutationId } from './withMutation';
import SigninMutation from '../mutations/SigninMutation';
import { type SigninMutationResponse } from '../mutations/__generated__/SigninMutation.graphql';
import { arialFont } from '../themes/fonts';
// import isNumeric from 'validator/lib/isNumeric';
type OwnProps = {};
type Props = {
  mutate: *,
} & OwnProps;

type Fields = {
  loginNumber: string,
  password: string,
};

type State = {
  pending: boolean,
  error: boolean,
} & Fields;

const initialState = {
  pending: false,
  loginNumber: '',
  password: '',
  error: false,
};

class Auth extends React.Component<Props, State> {
  state = initialState;

  handleCompleted = (response: SigninMutationResponse) => {
    const token =
      response && response.signinUser ? response.signinUser.token : null;
    const userId =
      response && response.signinUser && response.signinUser.user
        ? response.signinUser.user.id
        : null;

    if (token && userId) {
      this.setState(initialState);
      setCookie({ token, userId });
      Router.replace(sitemap.payments.path);
    } else {
      this.setState({ pending: false, error: true });
    }
  };

  handleError = () => {
    this.setState({ pending: false, error: true });
  };

  signIn = () => {
    const fields = {
      loginNumber: this.state.loginNumber.trim(),
      password: this.state.password.trim(),
    };

    const signinInput = {
      email: {
        email: fields.loginNumber,
        password: fields.password,
      },
      clientMutationId: getClientMutationId(),
    };

    this.setState({ pending: true });
    this.props.mutate(
      SigninMutation.commit,
      { signinInput },
      this.handleCompleted,
      this.handleError,
    );
  };

  render() {
    const { pending, error } = this.state;
    return (
      <Box paddingRight="30px">
        <BoxError
          rendered={error}
          errorMessage={
            <FormattedMessage
              id="auth.errorMessage"
              defaultMessage="Login number or password is incorrect. Forgot your password or login number? Contact our Customer Service at 222 010 222. We will be happy to assist you."
            />
          }
          type="warning"
        />
        <AuthTabs />
        <Form
          onSubmit={this.signIn}
          paddingTop="25px"
          paddingLeft="25px"
          style={{
            border: '1px solid #e8e8e8',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            borderTopRightRadius: '20px',
            boxShadow: '0 0 7px rgba(0, 0, 0, 0.15)',
            width: '375px',
            marginBottom: '20px',
          }}
        >
          <Set marginBottom="8px">
            <TextInput
              disabled={pending}
              style={{
                ':focus': { boxShadow: '#06f 0 0 7px' },
                fontSize: '12px',
                fontFamily: arialFont,
                marginRight: '10px',
                height: '22px',
                paddingLeft: '4px',
                paddingRight: '4px',
                width: '150px',
                borderTop: '1px solid rgb(132, 132, 132)',
                borderRight: '1px solid rgb(193, 193, 193)',
                borderBottom: '1px solid rgb(225, 225, 225)',
                borderLeft: '1px solid rgb(193, 193, 193);',
              }}
              label={
                <Text fontFamily={arialFont} style={{ fontSize: '12px' }}>
                  <FormattedMessage
                    defaultMessage="Přihlašovací číslo"
                    id="auth.loginNumber"
                  />
                </Text>
              }
              onChange={loginNumber => this.setState({ loginNumber })}
              value={this.state.loginNumber}
              type="text"
            />
            {/* {this.state.loginNumber.trim().length > 0 &&
              !isNumeric(this.state.loginNumber) && (
                <Text>Jen cisla od 0 do 1 prosim</Text>
              )} */}
            <TextInput
              disabled={pending}
              style={{
                ':focus': { boxShadow: '#06f 0 0 7px' },
                fontSize: '12px',
                fontFamily: arialFont,
                height: '22px',
                paddingLeft: '4px',
                paddingRight: '4px',
                width: '150px',
                borderTop: '1px solid rgb(132, 132, 132)',
                borderRight: '1px solid rgb(193, 193, 193)',
                borderBottom: '1px solid rgb(225, 225, 225)',
                borderLeft: '1px solid rgb(193, 193, 193);',
              }}
              label={
                <Text fontFamily={arialFont} style={{ fontSize: '12px' }}>
                  <FormattedMessage defaultMessage="Heslo" id="auth.password" />
                </Text>
              }
              onChange={password => this.setState({ password })}
              value={this.state.password}
              type="password"
            />
          </Set>
          <Set marginBottom="20px" paddingRight="25px">
            <SignInButton disabled={pending} onPress={this.signIn} />
          </Set>
        </Form>
      </Box>
    );
  }
}

const AuthWithMutation: ComponentType<OwnProps> = withMutation(Auth);

export default AuthWithMutation;
