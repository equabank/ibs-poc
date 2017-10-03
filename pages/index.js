// @flow
import React from 'react';
import app from '../components/app';
import Page from '../components/Page';
import Auth from '../components/Auth';
import sitemap from '../lib/sitemap';
import { loginPage } from '../themes/browserTheme';

const Index = ({ intl }) => (
  <Page
    title={intl.formatMessage(sitemap.index.title)}
    pageTemplate={loginPage}
  >
    <Auth />
  </Page>
);

export default app(Index);
