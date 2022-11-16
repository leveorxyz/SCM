import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from '../theme';
import { AppProps } from 'next/app';
import SidebarWithHeader from '../components/SidebarWithHeader';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SidebarWithHeader>
          <Component {...pageProps} />
        </SidebarWithHeader>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
