import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App from './App';
import { Segment } from "semantic-ui-react";
import Cards from './Cards';

import 'semantic-ui-css/semantic.min.css';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Segment basic></Segment>
    {/* <App name="Daniel" /> */}
    <Cards/>
  </StrictMode>,
  rootElement
);