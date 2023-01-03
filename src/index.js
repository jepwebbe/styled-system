import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { theme } from "./theme/theme";
import { template } from "./theme/template";
import { Box } from "./components/Box";
import { Flex } from "./components/Flex";
import { Text } from "./components/Text";
import { Grid } from "./components/Grid";
import { media } from "./theme/helpers";

const GlobalStyle = createGlobalStyle`
  body {    
    font-family: roboto;
    margin: 0px;
  }
`;

const Aside = styled(Flex)`
  justify-content: center;
  align-items: center;
  ${media.mobile` display:none`};
  ${media.tablet` display:none`}
`;

const EnhancedText = props => (
  <Text
    {...props}
    fontSize={[1, 3, 5]}
    textAlign={["center", "left", "right"]}
  />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Grid
          gridGap={[1, 1, 2]}
          bg="yellow"
          height="100vh"
          gridTemplateColumns={[
            template.mobile.columns,
            template.tablet.columns,
            template.desktop.columns
          ]}
          gridTemplateRows={[
            template.mobile.rows,
            template.tablet.rows,
            template.desktop.rows
          ]}
          gridTemplateAreas={[
            template.mobile.area,
            template.tablet.area,
            template.desktop.area
          ]}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="green"
            gridArea="header"
          >
            <EnhancedText>Header</EnhancedText>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="blue"
            gridArea="main"
          >
            <EnhancedText>Main</EnhancedText>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="brown"
            gridArea="sidebar"
          >
            <EnhancedText>Side</EnhancedText>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="red"
            gridArea="footer"
          >
            <EnhancedText>Footer</EnhancedText>
          </Flex>
          <Aside bg="pink" gridArea="aside">
            <EnhancedText>Aside</EnhancedText>
          </Aside>
        </Grid>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
