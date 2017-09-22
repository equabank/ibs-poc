// @flow
import React from 'react';
import Box from '../components/Box';
import { createFragmentContainer, graphql } from 'react-relay';
import { type PaymentOrders_viewer } from './__generated__/PaymentOrders_viewer.graphql';
import PaymentOrdersItem from './PaymentOrdersItem';

type Props = {
  viewer: PaymentOrders_viewer,
};

const PaymentOrders = ({ viewer: { allPaymentOrders } }: Props) => (
  <Box>
    {allPaymentOrders.edges &&
      allPaymentOrders.edges.map(
        edge =>
          edge && <PaymentOrdersItem key={edge.node.id} payment={edge.node} />,
      )}
  </Box>
);

// Always use first or last on connections.
// https://github.com/facebook/relay/issues/1201#issuecomment-224366807
export default createFragmentContainer(
  PaymentOrders,
  graphql`
    fragment PaymentOrders_viewer on Viewer {
      allPaymentOrders(orderBy: createdAt_ASC, first: 100) {
        edges {
          node {
            id
            ...PaymentOrdersItem_payment
          }
        }
      }
    }
  `,
);
