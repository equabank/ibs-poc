/**
 * @flow
 * @relayHash 42eb2ed14a409f0499f27c4afbae33d5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type paymentsQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query paymentsQuery {
  viewer {
    ...PaymentOrders_viewer
    id
  }
}

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

fragment PaymentOrdersItem_payment on PaymentOrder {
  id
  amount
  createdAt
  recipientAccount
  payeeAccount
  type
  account {
    currency
    id
    type
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "paymentsQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PaymentOrders_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "paymentsQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "paymentsQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "createdAt_ASC",
                    "type": "PaymentOrderOrderBy"
                  }
                ],
                "concreteType": "PaymentOrderConnection",
                "name": "allPaymentOrders",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "PaymentOrderEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "PaymentOrder",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "PaymentOrder",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "amount",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "createdAt",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "recipientAccount",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "payeeAccount",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "type",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Account",
                                "name": "account",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "currency",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "id",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "type",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allPaymentOrders{\"first\":100,\"orderBy\":\"createdAt_ASC\"}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query paymentsQuery {\n  viewer {\n    ...PaymentOrders_viewer\n    id\n  }\n}\n\nfragment PaymentOrders_viewer on Viewer {\n  allPaymentOrders(orderBy: createdAt_ASC, first: 100) {\n    edges {\n      node {\n        id\n        ...PaymentOrdersItem_payment\n      }\n    }\n  }\n}\n\nfragment PaymentOrdersItem_payment on PaymentOrder {\n  id\n  amount\n  createdAt\n  recipientAccount\n  payeeAccount\n  type\n  account {\n    currency\n    id\n    type\n  }\n}\n"
};

module.exports = batch;
