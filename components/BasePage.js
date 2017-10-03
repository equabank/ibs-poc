/* @flow */

import AppError from './AppError';
import Baseline from './Baseline';
import Head from 'next/head';
import LoadingBar from './LoadingBar';
import React, { type Node } from 'react';
import type { State } from '../types';
import type { PageTheme } from '../themes/types';
import { ThemeProvider } from 'react-fela';
import { browserTheme, browserThemeDark } from '../themes/browserTheme';
import { connect, type Connector, type MapStateToProps } from 'react-redux';

// Because context is like dependency injection.
// https://facebook.github.io/react/docs/context.html#updating-context
const forceRenderOnThemeChange = theme => ({ key: JSON.stringify(theme) });

const BasePage = ({ children, darkEnabled, title, pageTemplate }) => {
  const theme = darkEnabled ? browserThemeDark : browserTheme;
  const page = pageTemplate != null ? pageTemplate : theme.page;
  const pageBackgroundColor = theme.colors[page.backgroundColor];
  return (
    <ThemeProvider theme={theme} {...forceRenderOnThemeChange(theme)}>
      <Baseline>
        <Head>
          <title>{title}</title>
          <meta name="theme-color" content={pageBackgroundColor} />
          <style
            dangerouslySetInnerHTML={{
              __html: `html {
                        background-color: ${pageBackgroundColor}
                      }
                      body {
                        background: ${page.background}
                      }
                      `,
            }}
          />
        </Head>
        <LoadingBar color={theme.colors.primary} />
        <AppError />
        {children}
      </Baseline>
    </ThemeProvider>
  );
};

type OwnProps = {|
  title: string,
  children?: Node,
  pageTemplate?: PageTheme,
|};

type Props = {
  darkEnabled: boolean,
} & OwnProps;

const mapStateToProps: MapStateToProps<*, *, *> = (state: State) => ({
  darkEnabled: state.app.darkEnabled,
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps);

export default connector(BasePage);
