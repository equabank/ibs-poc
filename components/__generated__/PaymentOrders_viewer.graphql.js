/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type PaymentOrders_viewer = {|
  +allPaymentOrders: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string;
      |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PaymentOrders_viewer",
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
                  "kind": "FragmentSpread",
                  "name": "PaymentOrdersItem_payment",
                  "args": null
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
  ],
  "type": "Viewer"
};

module.exports = fragment;
