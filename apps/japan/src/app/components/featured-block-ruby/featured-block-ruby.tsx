import { isMobile } from "react-device-detect";
import { MarkDown } from '../markdown/markdown';
interface IFeaturedBlockRubyParams {
  heading: string;
  mobileHeading: string;
  desktopImage?: string;
  mobileImage?: string;
  link: {
    route?: string;
    content?: string;
    subContent?: string;
    tracking: {};
  }
}

const FeaturedBlockRuby = ({ params }: { params: IFeaturedBlockRubyParams }) => {
  return (
    <>
      <div className="clearfix"></div>
      <div className="w-full bg-primary py-8">
        <div className="container">
          <p className="text-2xl font-ssb leading-30 text-ruby-alpha text-center mb-7 sm:text-base sm:leading-6 sm:text-left sm:mb-6">
            <MarkDown data={isMobile ? params.mobileHeading : params.heading}></MarkDown>
          </p>
          <div className="flex justify-center">
            <img className="w-auto h-auto" src={isMobile ? params?.mobileImage : params?.desktopImage} alt="Partners logo" />
          </div>
          <div className="flex justify-center mt-10 sm:mt-7">
          {params?.link && (
            <a href={params?.link.route}>
              <div className="flex items-center px-4.5 py-5 rounded-lg bg-grd-phi2 sm:px-3 sm:py-2.5 sm:bg-none sm:rounded-none sm:bg-pearl-alpha">
                <div>
                  <h3 className="text-white text-2.5xl font-sb leading-10 text-center sm:text-base sm:leading-7 sm:font-pb">{params?.link?.content}</h3>
                  {!isMobile && (
                    <p className="text-base leading-6 font-ssb text-white text-center">{params.link?.subContent}</p>
                  )}
                </div>
                <div className="ml-2 sm:ml-0.5">
                  <span className="align-middle inline-block w-2.5 h-2.5 border-t-3 border-r-3 border-white rotate-45 sm:w-2 sm:h-2 sm:border-t-2 sm:border-r-2"></span>
                  <span className="align-middle inline-block w-2.5 h-2.5 border-t-3 border-r-3 border-white rotate-45 -ml-px sm:w-2 sm:h-2 sm:border-t-2 sm:border-r-2"></span>
                </div>
              </div>
            </a>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedBlockRuby;
