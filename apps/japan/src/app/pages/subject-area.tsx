import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import OurPromise from '../components/our-promise/our-promise';
import FeaturedBlockLapis from '../components/featured-block-lapis/featured-block-lapis';
import FeaturedBlockTopaz from '../components/featured-block-topaz/featured-block-topaz';
import ListingRuby from '../components/listing-ruby/listing-ruby';
import ServiceFeatureRuby from '../components/service-feature-ruby/service-feature-ruby';
import CarouselRuby from '../components/carousel-ruby/carousel-ruby';
import SubjectAreaBannerRuby from '../components/subject-area-banner-ruby/subject-area-banner-ruby';
import FeaturedBlockDiamond from '../components/featured-block-diamond/featured-block-diamond';
import FeaturedBlockPearl from '../components/featured-block-pearl/featured-block-pearl';
import SampleRuby from '../components/sample-ruby/sample-ruby';
import JournalRuby from '../components/journal-ruby/journal-ruby';
import ServiceBlockRuby from '../components/service-block-ruby/service-block-ruby';
import ListingPearl from '../components/listing-pearl/listing-pearl';
import CarouselPearl from '../components/carousel-pearl/carousel-pearl';
import ServiceInformationDiamond from '../components/service-information-diamond/service-information-diamond';
import ServiceInformationRuby from "../components/service-information-ruby/service-information-ruby"
// @ts-ignore
import { Helmet } from "react-helmet";
const params = {
 
}
export function SubjectArea() {
  return (
    <>
      {/* <Helmet>
        <title>{params.title}</title>
        <meta name="description" content={params.description} />
      </Helmet> */}
      <Header />
      {/* <SubjectAreaBannerRuby /> */}
      {/* <ServiceFeatureRuby params = {{searchText : 'default'}} /> */}
      {/* <ServiceInformationDiamond /> */}
      {/* <CarouselRuby searchText={'default'} /> */}
      {/* <FeaturedBlockPearl /> */}
      {/* <CarouselPearl searchText={'default'} /> */}
      {/* <FeaturedBlockDiamond /> */}
      {/* <ServiceInformationRuby searchText={'default'} /> */}
      {/* <SampleRuby searchText={'default'} /> */}
      {/* <JournalRuby searchText={'default'} /> */}
      {/* <OurPromise /> */}
      {/* <FeaturedBlockLapis /> */}
      {/* <FeaturedBlockTopaz /> */}
      {/* <ServiceBlockRuby /> */}
      {/* <ListingPearl /> */}

      <Footer />
    </>
  );
}

export default SubjectArea;