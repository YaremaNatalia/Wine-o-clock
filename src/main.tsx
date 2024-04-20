import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/components/GlobalStyles';
import { theme } from '@/constants';
import App from '@/components/App';
import { Toaster } from 'react-hot-toast';
import {  QueryClientProvider } from '@tanstack/react-query';
import { client } from './tanStackQuery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyles />
          <Toaster position='top-center' reverseOrder={false} />
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
