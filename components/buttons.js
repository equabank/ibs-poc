// @flow
import React from 'react';
import Button, { type ButtonProps } from './Button';
import { FormattedMessage } from 'react-intl';
import { ghoticFont } from '../themes/fonts';

export const AddButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Add" id="button.add" />
  </Button>
);

export const CreateButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Create" id="button.create" />
  </Button>
);

export const SaveButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Save" id="button.save" />
  </Button>
);

export const CancelButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Cancel" id="button.cancel" />
  </Button>
);

export const DeleteButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Delete" id="button.delete" />
  </Button>
);

export const EditButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Edit" id="button.edit" />
  </Button>
);

export const FacebookSignInButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage
      defaultMessage="Login with Facebook"
      id="button.facebookSignIn"
    />
  </Button>
);

export const SignInButton = (props: ButtonProps) => (
  <Button
    {...props}
    style={{
      marginLeft: 'auto',
      color: 'black',
      fontSize: '14px',
      fontFamily: ghoticFont,
      fontWeight: 'normal',
      backgroundImage:
        "url('../static/img/login-button-blue-left.png'),url('../static/img/button-blue-right-arrow.png')",
      backgroundPosition: 'left, right',
      backgroundRepeat: 'no-repeat',
      paddingRight: '30px',
      ...props.style,
    }}
  >
    <FormattedMessage defaultMessage="Sign In" id="button.signIn" />
  </Button>
);

export const SignOutButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Sign Out" id="button.signOut" />
  </Button>
);

export const SignUpButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Sign Up" id="button.signUp" />
  </Button>
);

export const SubmitButton = (props: ButtonProps) => (
  <Button {...props}>
    <FormattedMessage defaultMessage="Submit" id="button.submit" />
  </Button>
);
