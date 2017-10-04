// @flow
import React from 'react';
import Text from './Text';
import type { State } from '../types';
import { connect, type Connector, type MapStateToProps } from 'react-redux';

const getLocaleHref = (pathname, defaultLocale, locale) => {
  if (defaultLocale === locale) return pathname;
  return `${pathname}?locale=${locale}`;
};

const localeToLanguageName = locale => {
  switch (locale) {
    case 'cs':
      return 'Čeština';
    case 'en':
      return 'English';
    default:
      return locale;
  }
};

const SwitchLocale = ({
  defaultLocale,
  locale,
  supportedLocales,
  style,
  fontFamily,
}) => (
  <Text style={{ ...style }}>
    {supportedLocales
      .filter(supportedLocale => supportedLocale !== locale)
      .map((supportedLocale, index, locales) => (
        <Text
          as="a"
          color="black"
          href={getLocaleHref('/', defaultLocale, supportedLocale)}
          key={supportedLocale}
          decoration="underline"
          fontFamily={fontFamily}
          style={{
            ':hover': { textDecoration: 'none' },
            ...style,
          }}
        >
          {localeToLanguageName(supportedLocale)}
          {supportedLocale.length > 1 && index < locales.length - 1 && ', '}
        </Text>
      ))}
  </Text>
);

type OwnProps = {|
  fontFamily?: string,
  style?: Object,
|};

type Props = {
  defaultLocale: string,
  locale: string,
  supportedLocales: Array<string>,
} & OwnProps;

const mapStateToProps: MapStateToProps<*, *, *> = (state: State) => ({
  defaultLocale: state.app.defaultLocale,
  locale: state.app.locale,
  supportedLocales: state.app.supportedLocales,
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps);

export default connector(SwitchLocale);
