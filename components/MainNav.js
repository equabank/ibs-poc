// @flow
import A from './A';
import Box from './Box';
import React, { type ComponentType } from 'react';
import sitemap from '../lib/sitemap';
import type { IntlShape } from 'react-intl';
import { FormattedMessage, injectIntl } from 'react-intl';
import Image from '../components/Image';

type OwnProps = {
  title: string
};

type Props = {
  intl: IntlShape
} & OwnProps;

const NavA = ({ intl, page, title, ...props }) => (
  <A
    backgroundColor="primary"
    bold
    isActive={title === intl.formatMessage(page.title)}
    color="white"
    href={page.path}
    paddingHorizontal={0.5}
    paddingVertical={0.5}
    prefetch
    {...props}
  >
    <FormattedMessage {...page.title} />
  </A>
);

const MainNav = ({ intl, title }: Props) => {
  const { index } = sitemap;
  return (
    <Box paddingTop="21px">
      <A
        href="https://www.equabank.cz/"
        target="_blank"
        title="Návrat na úvodní stránku"
      >
        <Image width="115px" height="24px" src="../static/img/logo-small.gif" />
      </A>
      <Box
        marginRight="10px"
        marginTop="3px"
        backgroundColor="primary"
        flexDirection="row"
        flexWrap="wrap"
        marginVertical={0.5}
        paddingHorizontal={0.5}
      >
        <NavA intl={intl} key={index.path} page={index} title={title} />
      </Box>
    </Box>
  );
};

const MainNavIntl: ComponentType<OwnProps> = injectIntl(MainNav);

export default MainNavIntl;
