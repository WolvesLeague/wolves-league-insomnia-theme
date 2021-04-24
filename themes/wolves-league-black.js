module.exports = {
  name: 'wolves-league-black',
  displayName: 'Wolves League Black',
  theme: {
    background: {
      default: "#000000",
      success: '#09f7a0b3',
      notice: '#fbc4ab',
      warning: '#ff9770',
      danger: '#ff5252',
      surprise: '#c287e8',
      info: '#6caeff',
    },
    foreground: {
      default: "#f5f3f4",
    },
    highlight: {
      default: "#d5d8da",
      xss: "#222425",
      xs: "#1d1f20",
      sm: "#6d747780",
      md: "#222425",
      lg: "#3f4446",
      xl: "#3f4446",
    },
    styles: {
      pane: {
        background: {
          surprise: '#ff5252',
        },
      },
      sidebar: {
        background: {
          surprise: '#ff0000',
        }
      }
    },
    rawCss: `
    span.cm-string.cm-property {
      color: #ff5252 !important;
    }

    span.cm-number {
      color: #e9b360 !important;
    }

    span.cm-property {
      color: #ff0000 !important;
    }

    div.header_left a {
      color: #ff5252 !important;
    }

    span.http-method-GET {
      color: #c287e8 !important;
    }

    button.button__StyledButton-jikis-0.dIckPS.margin-left {
      color: #400000 !important;
    }

    h2.no-margin {
      color: #ff5252 !important;
    }

    .http-method-GET {
      color: #c287e8 !important;
    }
  `,
  }
};
