import MarkDown from '../markdown/markdown';
/**
  * Types for featured block topaz params
  * @author Ranjan
  */
interface IFeaturedBlockOpalParams {
  title: string;
  heading: string;
  subHeading: string;
  subHeading2: string;
  subHeading3: string;
  subTitle: string;
  bottomNote: string;
  bgImage:string;
  services: IServices[];
  link: {
    route?: string;
    content?: string;
    tracking: {};
  };
}

/**
 * Services component params
 * @author Ranjan.
 */
export interface IServices {
  link: {
    route?: string;
    content?: string;
    tracking: {};
  };
  icon?: string;
}

const FeaturedBlockOpal = ({ params }: { params: IFeaturedBlockOpalParams }) => {
  return (
    <>
      <div className="clearfix"></div>
      <section>
        <div className='container'>
          <div className='pt-32 pb-16 px-0 bg-center bg-no-repeat bg-[length:150%] sm:pb-0 sm:pt-42.5 sm:bg-[length:360%]' style={{ backgroundImage: `url(${params?.bgImage})` }}>
            <div className='p-5 bg-white relative'>
              <div className='text-center'>
                <p className='text-xl md:text-sm sm:text-sm'>{params?.title}</p>
                <p className='text-42 font-black leading-60 md:text-3xl sm:text-2xl sm:mb-4.8'>
                  <MarkDown data={params?.heading}></MarkDown>
                </p>
                <p className='text-lg font-bold mb-6 md:text-base sm:text-sm'>
                  <MarkDown data={params?.subHeading}></MarkDown>

                  <span className='text-garnet-omega sm:block'>{params?.subHeading2}<sup className='text-black'>{params?.subHeading3}</sup></span>
                  <div className='hidden mt-2.5 text-xs font-normal text-right sm:block'>{params?.bottomNote}</div>
                </p>
                <span className='block text-lg font-bold text-pearl-alpha md:text-sm sm:text-base'>{params?.subTitle}</span>
              </div>
              <div className='flex justify-center items-center'>
                {
                  params?.services.map((service, index) => (
                    <a key={index} href={service?.link?.route} className='bg-gradient-to-b from-indigo-500 to-indigo-900 mx-1.5 mt-3 font-bold btn btn-primary h-14 md:h-11 md:text-xs md:min-w-45 md:leading-44 sm:min-w-max sm:h-fit sm:py-2.5 sm:px-6 sm:text-xs sm:mx-1 relative'>
                      {service?.link?.content}
                      {
                        service?.icon && <span className='absolute w-5 h-5 right-8 inset-y-0 m-auto inline-block bg-no-repeat md:w-4 md:h-4 md:bg-cover sm:w-3 sm:h-3 sm:bg-cover sm:right-2' style={{ backgroundImage: `url(${service?.icon})` }}></span>
                      }
                    </a>
                  ))
                }
              </div>
              <div className='text-center mt-12 md:mt-6 sm:mt-5'>
                <a href={params?.link.route} target='_blank' className='relative text-white bg-gradient-to-b from-emerald-600 to-emerald-800 text-lg font-bold rounded-lg py-4 px-16 hover:text-white hover:shadow-xl hover:shadow-emerald-200/40 md:h-11 md:text-xs md:leading-44 md:py-0 sm:max-w-full sm:py-2 sm:px-10 sm:text-sm'>
                  {params?.link.content}
                  <span className='absolute right-4 inset-y-0 m-auto w-3.5 h-3.5 inline-block bg-no-repeat' style={{ backgroundImage: `url(${'/assets/images/icons/double-rightarrow-white.svg'})` }}></span>
                </a>
              </div>
              <div className='mt-5 text-xs text-right sm:hidden'>{params?.bottomNote}</div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default FeaturedBlockOpal;
