import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ThankYouRuby from '../components/thank-you-ruby/thank-you-ruby';
// @ts-ignore
import { Helmet } from "react-helmet";
const params = {
  
}

export function ThankYou() {
  alert("in")
  return (
    <>
     
      <Header />
      {/* <ThankYouRuby /> */}
      <Footer />
    </>
  );
}

export default ThankYou;