import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import OurPromise from '../components/our-promise/our-promise';
import FeaturedBlockLapis from '../components/featured-block-lapis/featured-block-lapis';
import FeaturedBlockTopaz from '../components/featured-block-topaz/featured-block-topaz';
import ListingRuby from '../components/listing-ruby/listing-ruby';
import ServiFeatureRuby from '../components/service-feature-ruby/service-feature-ruby';
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

export function SubjectArea() {
  return (
    <>
      <Header />
      <SubjectAreaBannerRuby />
      <ServiFeatureRuby searchText={'default'} />
      <CarouselRuby searchText={'default'} />
      <ServiceInformationDiamond />
      <ServiceInformationRuby />
      <SampleRuby />
      <JournalRuby searchText={'default'} />
      <FeaturedBlockPearl />
      <CarouselPearl searchText={'default'} />
      <FeaturedBlockDiamond />
      <OurPromise />
      <FeaturedBlockLapis />
      <FeaturedBlockTopaz />
      <ServiceBlockRuby />
      {/* <ListingPearl /> */}
      <Footer />
    </>
  );
}

export default SubjectArea;