// @flow
import React from 'react';
import LocaleLink from './LocaleLink';
import Text, { type TextProps } from './Text';

type AProps = {
  href: string,
  isActive?: boolean,
  prefetch?: boolean,
} & TextProps;

const A = (props: AProps) => {
  const {
    as = 'a',
    color = 'blue10',
    href,
    isActive,
    prefetch,
    style,
    ...restProps
  } = props;
  return (
    <LocaleLink href={href} prefetch={prefetch}>
      <Text
        as={as}
        color={color}
        decoration={isActive ? 'none' : 'underline'}
        style={{
          ':hover': { textDecoration: 'none' },
          ...style,
        }}
        {...restProps}
      />
    </LocaleLink>
  );
};

export default A;
