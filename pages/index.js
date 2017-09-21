// @flow
import React from 'react';
import app from '../components/app';
import Page from '../components/Page';
import Text from '../components/Text';
import sitemap from '../lib/sitemap';

const Index = ({ intl }) => (
  <Page title={intl.formatMessage(sitemap.index.title)}>
    <Text>Ahoj</Text>
  </Page>
);

export default app(Index);
