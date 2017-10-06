// @flow
import Box from './Box';
import Button from './Button';
import MainNav from './MainNav';
import React, { type Node } from 'react';
import SwitchLocale from '../components/SwitchLocale';
import Text from './Text';
import { FormattedMessage } from 'react-intl';
import { deleteCookie } from '../lib/cookie';
import BasePage from './BasePage';
import { type PageTheme } from '../themes/types';

const PageContainer = ({ children }) => (
  <Box
    margin="auto"
    paddingHorizontal={1}
    style={{
      maxWidth: 972,
      minHeight: '100vh' // make footer sticky
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

type PageProps = {|
  title: string,
  children?: Node,
  pageTemplate?: PageTheme
|};

const Page = ({ children, title, pageTemplate }: PageProps) => (
  <BasePage title={title} pageTemplate={pageTemplate}>
    <PageContainer>
      <MainNav title={title} />
      <PageBody>{children}</PageBody>
      <PageFooter />
    </PageContainer>
  </BasePage>
);

export default Page;
