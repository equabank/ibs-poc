// @flow
import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';

type AlreadyExists = { type: 'alreadyExists' };
type Email = { type: 'email' };
type MaxLength = { type: 'maxLength', maxLength: number };
type MinLength = { type: 'minLength', minLength: number };
type Numeric = { type: 'numeric' };
type Required = { type: 'required' };
type RequiredAgree = { type: 'requiredAgree' };
type WrongPassword = { type: 'wrongPassword' };

export type ValidationError =
  | AlreadyExists
  | Email
  | MaxLength
  | MinLength
  | Numeric
  | Required
  | RequiredAgree
  | WrongPassword;

export type ValidationErrors<T> = {
  [key: $Keys<T>]: ?ValidationError,
};

type Validator<T> = (value: T, optional?: 'optional') => ?ValidationError;

export const shortText: Validator<string> = (value, optional) => {
  if (value.length === 0) return optional ? null : { type: 'required' };
  if (value.length < 3) return { type: 'minLength', minLength: 3 };
  if (value.length > 140) return { type: 'maxLength', maxLength: 140 };
};

export const email: Validator<string> = (value, optional) => {
  if (value.length === 0) return optional ? null : { type: 'required' };
  if (!isEmail(value)) return { type: 'email' };
};

export const password: Validator<string> = (value, optional) => {
  if (value.length === 0) return optional ? null : { type: 'required' };
  if (value.length < 6) return { type: 'minLength', minLength: 6 };
  if (value.length > 1024) return { type: 'maxLength', maxLength: 1024 };
};

export const loginNumber: Validator<string> = (value, optional) => {
  if (value.length === 0) return optional ? null : { type: 'required' };
  if (!isNumeric(value)) return { type: 'numeric' };
  if (value.length < 8) return { type: 'minLength', minLength: 8 };
  if (value.length > 8) return { type: 'maxLength', maxLength: 8 };
};
