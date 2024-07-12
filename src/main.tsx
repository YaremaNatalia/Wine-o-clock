import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/components/GlobalStyles';
import { theme } from '@/constants';
import App from '@/components/App';
import { Toaster } from 'react-hot-toast';
import { client } from './tanStackQuery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persister } from './tanStackQuery/client';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { BasketProvider, FavoritesProvider } from './Context';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistQueryClientProvider client={client} persistOptions={{ persister }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <BasketProvider>
            <FavoritesProvider>
              <App />
            </FavoritesProvider>
          </BasketProvider>
          <GlobalStyles />
          <Toaster position='top-center' reverseOrder={false} />
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  </React.StrictMode>
);
