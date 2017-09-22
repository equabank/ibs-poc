// @flow
import React from 'react';
import app from '../components/app';
import PaymentOrders from '../components/PaymentOrders';
import Page from '../components/Page';
import sitemap from '../lib/sitemap';
import { graphql } from 'react-relay';
import { type paymentsQueryResponse } from './__generated__/paymentsQuery.graphql';

const Payments = ({ data, intl }) => {
  const { viewer }: paymentsQueryResponse = data;
  return (
    <Page title={intl.formatMessage(sitemap.payments.title)}>
      <PaymentOrders viewer={viewer} />
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
  `,
});
