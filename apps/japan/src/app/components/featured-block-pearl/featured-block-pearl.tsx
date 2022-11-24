import { isMobile } from "react-device-detect";
interface IFeaturedBlockPearlParams {
  heading: string;
  srNo?: string;
  features?: IFeatures[];
  image: string;
}

interface IFeatures {
  content: string;
}
const FeaturedBlockPearl = ({ params }: { params: IFeaturedBlockPearlParams }) => {
  return (
    <>
      <div className="clearfix"></div>
      <section className="w-full bg-primary">
        <div className="max-w-[950px] mx-auto py-10 sm:py-10 md:py-8 sm:px-5 sm:py-8">
          <div className="text-center">
            {params.heading && (
              <h2 className="text-4.5xl sm:text-xxl md:text-3.6xl text-ruby-alpha">{params.heading}</h2>
            )}
          </div>
          {isMobile && (<div
              style={{
                backgroundImage: `url('/assets/images/featured-block-pearl-m.svg')`,
              }}
              className="w-93 h-56.75 bg-no-repeat bg-center float-left order-1 sm:w-80 hidden"
            ></div>)}
          <div className="pt-8.5 float-left w-full flex justify-center sm:pt-8">
            <div className="w-1/2 sm:w-full float-right order-2 pl-16 sm:pl-0">
                <ul className="pl-4">
                  {params.features!.map((feature, index) => (
                    <li key={index} className="list-decimal text-pearl-beta mb-4 font-ssb pl-2">
                      <p className="text-ruby-alpha font-pr">{feature.content}</p>
                    </li>
                  ))}
                </ul>
            </div>
            <div
              style={{
                backgroundImage: `url(${params.image})`,
              }}
              className="w-93 h-56.75 bg-no-repeat bg-center sm:hidden float-left order-1"
            ></div>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>
    </>
  );
}

export default FeaturedBlockPearl;
