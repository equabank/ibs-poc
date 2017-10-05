// @flow
import React, { type ComponentType } from 'react';
import Box from './Box';
import Heading from './Heading';
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
  validationErrors: validation.ValidationErrors<Fields>,
} & Fields;

const initialState = {
  pending: false,
  loginNumber: '',
  password: '',
  validationErrors: {},
};

// Mocked mutate
type ServerLoginErrorResponse = {|
  weird: {|
    code: 123,
  |},
|};

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
      this.setState({ pending: false });
    }
  };

  handleError = (error: ServerLoginErrorResponse) => {
    this.setState({ pending: false });
    switch (error.weird.code) {
      case 123:
        this.setState({
          validationErrors: {
            password: { type: 'wrongPassword' },
          },
        });
        break;
    }
  };

  signIn = () => {
    const fields = {
      loginNumber: this.state.loginNumber.trim(),
      password: this.state.password.trim(),
    };

    const validate = fields => {
      const loginNumber = validation.loginNumber(fields.loginNumber);
      if (loginNumber) return { loginNumber };
    };

    const validationErrors = validate(fields);
    if (validationErrors) {
      this.setState({ validationErrors });
      return;
    }

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
  //
  // mutate(fields, onCompleted, onError) {
  //   setTimeout(() => {
  //     const userExists = users[fields.loginNumber] === fields.password;
  //     if (!userExists) {
  //       onError({ weird: { code: 123 } });
  //       return;
  //     }
  //     onCompleted();
  //   }, 2000);
  // }

  render() {
    const { pending, validationErrors } = this.state;
    return (
      <Box>
        <Heading size={1}>
          <FormattedMessage defaultMessage="Osobní" id="auth.heading" />
        </Heading>
        <Form onSubmit={this.signIn}>
          <Set vertical>
            <TextInput
              autoFocus={validationErrors.loginNumber}
              disabled={pending}
              error={<ValidationError error={validationErrors.loginNumber} />}
              placeholder="..."
              label={
                <Text bold>
                  <FormattedMessage
                    defaultMessage="Prihlasovaci cislo"
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
              autoFocus={validationErrors.password}
              disabled={pending}
              error={<ValidationError error={validationErrors.password} />}
              placeholder="..."
              label={
                <Text bold>
                  <FormattedMessage defaultMessage="Heslo" id="auth.password" />
                </Text>
              }
              onChange={password => this.setState({ password })}
              value={this.state.password}
              type="email"
            />
          </Set>
          <Set>
            <SignInButton disabled={pending} onPress={this.signIn} primary />
          </Set>
        </Form>
      </Box>
    );
  }
}
const AuthWithMutation: ComponentType<OwnProps> = withMutation(Auth);

export default AuthWithMutation;
