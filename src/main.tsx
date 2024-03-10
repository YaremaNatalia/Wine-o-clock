import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/components/GlobalStyles';
import { theme } from '@/constants';
import App from '@/components/App';
import { Toaster } from 'react-hot-toast';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import queryClient, { persister } from '@/tanStackQuery/client';

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
    </PersistQueryClientProvider>
  </React.StrictMode>
);
