// @flow
import { defineMessages } from 'react-intl';

// TODO: Consider https://github.com/BDav24/next-url-prettifier

const titles = defineMessages({
  index: { defaultMessage: 'Home', id: 'sitemap.title.index' },
  payments: { defaultMessage: 'Payment', id: 'sitemap.payments.index' },
  // me: { defaultMessage: 'Me', id: 'sitemap.title.me' },
  // signIn: { defaultMessage: 'Sign In', id: 'sitemap.title.signIn' },
});

const sitemap = {
  index: { title: titles.index, path: '/' },
  payments: { title: titles.index, path: '/payments' },
};

export default sitemap;
