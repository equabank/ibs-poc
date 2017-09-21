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

class Auth extends React.Component<{}, State> {
  state = initialState;

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
    // TODO: Graph.cool auth.
    this.setState(initialState);
  };

  render() {
    const { validationErrors } = this.state;
    return (
      <Box>
        <Heading size={1}>
          <FormattedMessage defaultMessage="Osobní" id="auth.heading" />
        </Heading>
        <Form onSubmit={this.signIn}>
          <Set vertical>
            <TextInput
              autoFocus={validationErrors.loginNumber}
              error={<ValidationError error={validationErrors.loginNumber} />}
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
            <TextInput
              autoFocus={validationErrors.password}
              error={<ValidationError error={validationErrors.password} />}
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
            <SignInButton onPress={this.signIn} primary />
          </Set>
        </Form>
      </Box>
    );
  }
}

export default Auth;
