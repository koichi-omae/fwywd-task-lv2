import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@/style/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default App;
