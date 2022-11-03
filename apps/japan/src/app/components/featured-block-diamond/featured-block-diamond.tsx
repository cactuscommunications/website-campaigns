import { MarkDown } from '../markdown/markdown';
interface IFeaturedBlockDiamondParams {
  backgroundColor: string;
  image?: string;
  heading: string;
  subHeading: string;
  link: {
    route?: string;
    content?: string;
    tracking: {};
  };
}
const FeaturedBlockDiamond = ({ params }: { params:  IFeaturedBlockDiamondParams}) => {
    return (
    <>
      <div className="clearfix"></div>
      <section className={' w-full float-left ' + params?.backgroundColor}>
        <div className="max-w-[1100px] mx-auto">
          <div className="w-full relative flex items-center py-7.5 sm:block md:px-5">
            <div className={'flex text-right pr-2 sm:pr-0 sm:block sm:w-full ' + params?.backgroundColor}>
              <span
                className={
                  ' w-50 h-32 inline-block bg-no-repeat bg-center bg-contain sm:block sm:m-auto sm:my-1 sm:bg-center '
                }
                style={{
                  backgroundImage: `url(${params?.image})`,
                }}
              ></span>
            </div>
            <div className="flex items-center pl-8 sm:block sm:w-full sm:px-5 sm:pt-4 md:pr-0 sm:w-full">
              <div className="w-4/5 float-left pr-20 sm:w-full md:pr-10 sm:pr-0 sm:mb-3">
                {params.heading && (
                  <h3 className="text-jade-alpha text-5xl mb-3 font-pb leading-10 sm:text-xxl-base sm:leading-8 sm:text-center">
                    {params.heading}{' '}
                  </h3>
                )}
                <p className="text-ruby-alpha font-pr text-sm leading-21 sm:text-center sm:pr-0">
                  <MarkDown data={params.subHeading}></MarkDown>
                </p>
              </div>
              {params?.link && (
                <div className="text-center sm:w-full sm:mr-auto sm:ml-auto">
                  <a className="btn btn-primary" href={params?.link.route}>
                    <span className="block px-3 font-ssb">{params?.link?.content}</span>
                  </a>
                </div>
              )}
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default FeaturedBlockDiamond;
