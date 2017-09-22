// @flow
import React from 'react';
import Box from '../components/Box';
import Set from '../components/Set';
import Text from '../components/Text';
import { FormattedRelative } from 'react-intl';
import { createFragmentContainer, graphql } from 'react-relay';
import { type PaymentOrdersItem_payment } from './__generated__/PaymentOrdersItem_payment.graphql';

type Props = {
  payment: PaymentOrdersItem_payment,
};

const PaymentOrdersItem = ({ payment }: Props) => (
  <Box>
    <Set>
      <Text>{payment.amount}</Text>
      <Text>
        <FormattedRelative value={payment.createdAt} />
      </Text>

      <Text>{payment.payeeAccount}</Text>
      <Text>{payment.recipientAccount}</Text>
    </Set>
  </Box>
);

// Always use first or last on connections.
// https://github.com/facebook/relay/issues/1201#issuecomment-224366807
export default createFragmentContainer(
  PaymentOrdersItem,
  graphql`
    fragment PaymentOrdersItem_payment on PaymentOrder {
      id
      amount
      createdAt
      recipientAccount
      id
      payeeAccount
    }
  `,
);
