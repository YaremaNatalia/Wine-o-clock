import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from "./components/GlobalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/wine-o-clock">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
