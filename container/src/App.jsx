import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import React  from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
const generateClassName = createGenerateClassName({
  productionPrefix:"co"
})
export default () => {
  return (
     <div>
      <StylesProvider generateClassName={generateClassName}>

      <BrowserRouter >
      <Header />
    
      <MarketingApp />
      </BrowserRouter>
      </StylesProvider>
    </div>);
};
