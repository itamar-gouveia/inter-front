// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        background: string;
        background2: string;
        red:string;
        green:string;
    };
  }
}