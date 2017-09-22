// @flow
import React from 'react';
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
// import isNumeric from 'validator/lib/isNumeric';

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

const users = {
  '12345678': 'adminadmin',
  '87654321': 'nimdanimda',
};

const mutate = (fields, onCompleted, onError) => {
  setTimeout(() => {
    const userExists = users[fields.loginNumber] === fields.password;
    if (!userExists) {
      onError({ weird: { code: 123 } });
      return;
    }
    onCompleted();
  }, 2000);
};

class Auth extends React.Component<{}, State> {
  state = initialState;

  handleCompleted = () => {
    this.setState(initialState);
    setCookie({ token: '123', userId: '123' });
    Router.replace(sitemap.payments.path);
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
      const password = validation.password(fields.password);
      if (password) return { password };
    };

    const validationErrors = validate(fields);
    if (validationErrors) {
      this.setState({ validationErrors });
      return;
    }

    this.setState({ pending: true });
    mutate(fields, this.handleCompleted, this.handleError);
  };

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

export default Auth;
