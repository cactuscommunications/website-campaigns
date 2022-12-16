import React from "react";
import Header from '../../components/header/header';
import SubjectAreaBannerRuby from '../../components/subject-area-banner-ruby/subject-area-banner-ruby';
import ServiceFeatureRuby from '../../components/service-feature-ruby/service-feature-ruby';
import { IComponent, IMap } from "./render.model";
import ServiceInformationDiamond from "../../components/service-information-diamond/service-information-diamond";
import Footer from "../../components/footer/footer";
import CarouselRuby from "../../components/carousel-ruby/carousel-ruby";
import FeaturedBlockPearl from "../../components/featured-block-pearl/featured-block-pearl";
import CarouselPearl from "../../components/carousel-pearl/carousel-pearl";
import FeaturedBlockDiamond from "../../components/featured-block-diamond/featured-block-diamond";
import ServiceInformationRuby from "../../components/service-information-ruby/service-information-ruby";
import SampleRuby from "../../components/sample-ruby/sample-ruby";
import JournalRuby from "../../components/journal-ruby/journal-ruby";
import OurPromise from "../../components/our-promise/our-promise";
import FeaturedBlockLapis from "../../components/featured-block-lapis/featured-block-lapis";
import FeaturedBlockTopaz from "../../components/featured-block-topaz/featured-block-topaz";
import ServiceBlockRuby from "../../components/service-block-ruby/service-block-ruby";
import ThankYouRuby from "../../components/thank-you-ruby/thank-you-ruby";
import FeaturedBlockOpal from "../../components/featured-block-opal/featured-block-opal";
const KeysToComponentMap: IMap = {
  'header': Header,
  'subject-area-banner-ruby': SubjectAreaBannerRuby,
  'service-feature-ruby': ServiceFeatureRuby,
  'service-information-diamond': ServiceInformationDiamond,
  'carousel-ruby': CarouselRuby,
  'featured-block-pearl': FeaturedBlockPearl,
  'carousel-pearl': CarouselPearl,
  'featured-block-diamond': FeaturedBlockDiamond,
  'service-information-ruby': ServiceInformationRuby,
  'sample-ruby': SampleRuby,
  'journal-ruby': JournalRuby,
  'our-promise': OurPromise,
  'featured-block-lapis': FeaturedBlockLapis,
  'featured-block-topaz': FeaturedBlockTopaz,
  'service-block-ruby': ServiceBlockRuby,
  'footer': Footer,
  'thankyou-ruby': ThankYouRuby,
  'featured-block-opal': FeaturedBlockOpal
};

function renderer(config: any) {
  if (typeof KeysToComponentMap[config.element] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[config.element],
      {
        searchText: config.searchText,
        params: config.params
      }
    );

  } else {
    return '';
  }
}

export default renderer;