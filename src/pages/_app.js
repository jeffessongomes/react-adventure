import GlobalStyle from '../styles/global';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </>
  )
}
