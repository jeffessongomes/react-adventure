import GlobalStyle from '../styles/global';

import 'bootstrap/dist/css/bootstrap.min.css'
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
