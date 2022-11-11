import { isMobile } from "react-device-detect";
interface IInformationBlockRubyParams {
  heading: string;
  subHeading: string;
  desktopImage?: string;
  mobileImage?: string;
  link: {
    route?: string;
    content?: string;
    tracking: {};
  }
}

const InformationBlockRuby = ({ params }: { params: IInformationBlockRubyParams }) => {
  return (
    <>
      <div className="clearfix"></div>
      <div className="bg-primary w-full pb-10 sm:pb-2">
        <div className="bg-pearl-alpha px-2 py-4.5 mb-7 sm:mb-0 sm:py-3">
          <h3 className="text-center text-white font-sb text-4.5xl sm:text-20 sm:leading-26">{params.heading}</h3>
        </div>
        <div className="mb-7 sm:mb-0 sm:pt-2.5">
          {!isMobile && (
            <h4 className="text-center text-ruby-alpha font-sb text-20 leading-6 max-w-2xl mx-auto mb-1">
              {params.subHeading}
            </h4>
          )}
          <img className="w-full h-auto" src={isMobile ? params?.mobileImage : params?.desktopImage} alt="card image" />
        </div>
        {!isMobile && (
          <div className="flex justify-center">
          {params?.link && (
            <a href={params?.link.route}>
              <div className="bg-pearl-alpha flex items-center px-9 py-5">
                <span className="text-base font-pb text-white sm:text-xs sm:leading-17">{params?.link?.content}</span>
                <div className="ml-10">
                  <span className="align-middle inline-block w-1.5 h-1.5 border-t border-r border-white rotate-45"></span>
                  <span className="align-middle inline-block w-1.5 h-1.5 border-t border-r border-white rotate-45 -ml-px"></span>
                </div>
              </div>
            </a>
          )}
          </div>
        )}
      </div>
    </>
  );
}

export default InformationBlockRuby;
