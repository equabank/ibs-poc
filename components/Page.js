// @flow
import AppError from './AppError';
import Baseline from './Baseline';
import Box from './Box';
import Button from './Button';
import Head from 'next/head';
import LoadingBar from './LoadingBar';
import MainNav from './MainNav';
import React, { type Node } from 'react';
import SwitchLocale from '../components/SwitchLocale';
import Text from './Text';
import type { State } from '../types';
import { FormattedMessage } from 'react-intl';
import { ThemeProvider } from 'react-fela';
import { browserTheme, browserThemeDark } from '../themes/browserTheme';
import { connect, type Connector } from 'react-redux';
import { deleteCookie } from '../lib/cookie';

const PageContainer = ({ children }) => (
  <Box
    margin="auto"
    paddingHorizontal={1}
    style={{
      maxWidth: 960,
      minHeight: '100vh', // make footer sticky
    }}
  >
    {children}
  </Box>
);

// Flex 1 to make footer sticky.
const PageBody = ({ children }) => (
  <Box flex={1} maxWidth={30} paddingTop={2}>
    {children}
  </Box>
);

const signOut = () => {
  deleteCookie();
  // Force full reload. Purging Relay environment and Redux store is not enough.
  // Sensitive session data can be stored in NEXT_PROPS or elsewhere.
  // eslint-disable-next-line no-undef
  location.href = '/';
};

const PageFooter = () => (
  <Text
    borderColor="gray"
    borderStyle="solid"
    borderTopWidth={1}
    flexDirection="row"
    marginTop={2}
    paddingVertical={1}
    size={-1}
  >
    <FormattedMessage
      defaultMessage="© Equa bank a.s. 2011 - 2017. Všechna práva vyhrazena."
      id="footer.text"
    />{' '}
    <SwitchLocale />
    {', '}
    <Button size={-1} paddingHorizontal={0} onPress={signOut}>
      Logout
    </Button>
  </Text>
);

// Because context is like dependency injection.
// https://facebook.github.io/react/docs/context.html#updating-context
const forceRenderOnThemeChange = theme => ({ key: JSON.stringify(theme) });

const Page = ({ children, darkEnabled, title }) => {
  const theme = darkEnabled ? browserThemeDark : browserTheme;
  const pageBackgroundColor = theme.colors[theme.page.backgroundColor];
  return (
    <ThemeProvider theme={theme} {...forceRenderOnThemeChange(theme)}>
      <Baseline>
        <Head>
          <title>{title}</title>
          <meta name="theme-color" content={pageBackgroundColor} />
          <style
            dangerouslySetInnerHTML={{
              __html: `html { background-color: ${pageBackgroundColor} }`,
            }}
          />
        </Head>
        <LoadingBar color={theme.colors.primary} />
        <AppError />
        <PageContainer>
          <MainNav title={title} />
          <PageBody>{children}</PageBody>
          <PageFooter />
        </PageContainer>
      </Baseline>
    </ThemeProvider>
  );
};

type OwnProps = {|
  title: string,
  children?: Node,
|};

type Props = {
  darkEnabled: boolean,
} & OwnProps;

const connector: Connector<OwnProps, Props> = connect((state: State) => ({
  darkEnabled: state.app.darkEnabled,
}));

export default connector(Page);
