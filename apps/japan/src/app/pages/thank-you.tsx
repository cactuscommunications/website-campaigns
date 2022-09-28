import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ThankYouRuby from '../components/thank-you-ruby/thank-you-ruby';
// @ts-ignore
import { Helmet } from "react-helmet";
const params = {
  title: ' 分野別の英文校正サービス｜エディテージ',
  description: '英文校正は専門分野が命です。1300分野で分野別のネイティブ2名以上がお客様の学術論文を校正し、受理率を最大限に高めます。英文校正業界で第1位のエディテージが提供する学術英文校正サービス。'
}

export function ThankYou() {
  alert("in")
  return (
    <>
      <Helmet>
        <title>{params.title}</title>
        <meta name="description" content={params.description} />
        <script type="text/javascript" defer src="assets/scripts/thank-you-conversion/conversions.min.js" />   
      </Helmet>
      <Header />
      {/* <ThankYouRuby /> */}
      <Footer />
    </>
  );
}

export default ThankYou;