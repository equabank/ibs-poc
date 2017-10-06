// @flow
import React from 'react';
import app from '../components/app';
import Box from '../components/Box';
import Heading from '../components/Heading';
import PaymentOrders from '../components/PaymentOrders';
import Page from '../components/Page';
import sitemap from '../lib/sitemap';
import { graphql } from 'react-relay';
import { type paymentsQueryResponse } from './__generated__/paymentsQuery.graphql';

const Payments = ({ data, intl }) => {
  const { viewer }: paymentsQueryResponse = data;
  return (
    <Page title={intl.formatMessage(sitemap.payments.title)}>
      <Box width="500px">
        <Heading size={2}>Rychlý přehled</Heading>
        <PaymentOrders viewer={viewer} />
      </Box>
      <Box>
        <Heading size={2}>Moje účty</Heading>
      </Box>
    </Page>
  );
};

export default app(Payments, {
  requireAuth: true,
  query: graphql`
    query paymentsQuery {
      viewer {
        ...PaymentOrders_viewer
      }
    }
  `
});
