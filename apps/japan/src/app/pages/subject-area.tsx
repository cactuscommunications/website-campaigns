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
import ListingPearl from '../components/listing-pearl/listing-pearl';

export function SubjectArea() {
    return (
      <>
        <Header />
        <SubjectAreaBannerRuby />
        <ServiFeatureRuby />
        <CarouselRuby />
        <SampleRuby />
        <JournalRuby />
        <FeaturedBlockPearl />
        <FeaturedBlockDiamond />
        <OurPromise />
        <FeaturedBlockLapis />
        <FeaturedBlockTopaz />
        <ListingPearl />
        <Footer />
      </>
    );
  }
  
  export default SubjectArea;