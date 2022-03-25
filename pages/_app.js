import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "react-query";
import '../styles/globals.css';
import store from 'store/store';

function MovieApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  )
}

export default MovieApp
