import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string,
    button: {
      backgroundColor: string
    },
    container: {
      backgroundColor: string
    },
    footer: {
      backgroundColor: string,
    },
    footerTab: {
      backgroundColor: string,
      activeColor: string,
      color: string;

    },
    statusBar: {
      backgroundColor: string;
      barStyle: "default" | "light-content" | "dark-content";
    }
    spinner: {
      color: string;
    },
    header: {
      backgroundColor: string,
    },
    headerTitle: {
      color: string,
    },
    text: {
      color: string;
      noteColor: string;
    },
    cardProfile: {
      backgroundColor: string;
      photo: {
        borderColor: string;
        backgroundColor: string;
      },
      title: {
        color: string;
      },
      description: {
        color: string;
      }
    },
    cardItem: {
      backgroundColor: string,
    },
    inputSearch: {
      backgroundColor: string,
      borderColor: string,
      placeHolderColor: string,
      color: string
    },
    input: {
      backgroundColor: string,
      borderColor: string,
      placeHolderColor: string,
      color: string
    },
    label: {
      color: string,
    },
    titleForm:{
      color: string,
    }
    subtitleForm: {
      color: string,
    },
    colors: {
      primary: string,
      secondary: string,
      tertiary: string
    }
  }
}