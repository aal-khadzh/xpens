import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { extractStyles } from "evergreen-ui";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = flush();
    const { css, hydrationScript } = extractStyles();

    return {
      ...page,
      css,
      hydrationScript,
      styles
    };
  }

  render() {
    const { css, hydrationScript } = this.props;

    return (
      <html>
        <Head>
          <title>xpens</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=B612+Mono|Orbitron|Press+Start+2P"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </html>
    );
  }
}
