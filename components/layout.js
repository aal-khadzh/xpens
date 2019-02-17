import React from "react";

const Layout = ({ children }) => (
  <React.Fragment>
    {children}

    <style jsx global>{`
      .container {
        width: 100vw;
        height: 100vh;
        padding: 10%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .header {
        font-size: 3em;
        color: #234361;
        font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 500;
      }

      .inputContainer {
        max-width: 880px;
        min-width: 800px;
        width: 75%;
        display: flex;
        justify-content: space-between;
      }

      .outputContainer {
        max-width: 880px;
        min-width: 800px;
        width: 75%;
        margin-top: 24px;
      }

      @media screen and (max-width: 1100px) {
        .header {
          font-size: 2em;
        }
      }

      @media screen and (max-width: 900px) {
        .container {
          padding: 5%;
        }

        .inputContainer {
          min-width: auto;
          max-width: auto;
          width: 90%;
          height: 200px;
          flex-direction: column;
          align-content: space-around;
        }

        .outputContainer {
          min-width: auto;
          max-width: auto;
          width: 90%;
        }

        .inputField {
          position: relative;
          width: auto !important;
        }
      }

      @media screen and (max-width: 700px) {
        .header {
          font-size: 1.5em;
        }
      }

      @media screen and (max-width: 500px) {
        .header {
          font-size: 1em;
        }
      }
    `}</style>
  </React.Fragment>
);

export default Layout;
