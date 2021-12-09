import Calculator from "./components/calculator/Calculator";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
  *{
      padding: 0;
      margin: 0;
    }

    html{
      min-height: calc(100vh);
    }

    body{
      min-height: calc(100vh);
      font-family: Spartan, sans-serif;
    }
    #root{
      min-height: calc(100vh - 16px)
    }
`

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Calculator />
    </>
  );
}

export default App;
