import FeatureLapis from './feature-lapis';
import { MarkDown } from '../markdown/markdown';

interface IFeaturedBlockLapisParams {
  machineName?: string;
  position: string;
  heading: string;
  subHeading?: string;
  features: ILapisFeatures[];
  backgroundColor: string;
  link?: string;
}

interface ILapisFeatures {
  title: string;
  content: string;
  contactLink?: {
    content?: string;
    route?: string;
  };
  imagePath: string;
  smallImage?: string;
  services?: IServicesContent;
  link?: string;
}

interface IServicesContent {
  title: string;
  list: { content: string }[];
  link: string;
  linkText: string;
}
export function FeaturedBlockLapis({ params }: { params: IFeaturedBlockLapisParams }) {


  return (
    <>
      <div className="clearfix"></div>
      <div className={params?.backgroundColor}>
        <div className="container">
          
          <div
            className={
              params?.position === 'right' ? 'pt-14 pb-6 sm:py-10 sm:pt-3 md:pt-6 max-w-[1000px] mx-auto' : 'py-16 sm:py-10 ' + 'max-w-[1000px] mx-auto'
            }
          >
            <h2
              className={
                params?.position === 'right'
                  ? ''
                  : 'font-ssb text-2xl' + ' text-center sm:text-xxl sm:leading-8 sm:px-5'
              }
            >
              {params?.heading}
            </h2>
            <p
              className={
                params?.position === 'right'
                  ? 'text-amber-gamma text-base font-ssb mb-7.5'
                  : 'font-sb mb-10 text-2xl' + ' text-center'
              }
            >
              <MarkDown data={params?.subHeading ? params?.subHeading : ''}></MarkDown>
            </p>
            <div className="w-full">
              <div className="flex justify-center sm:block">
                {params.features.map((feature, index) => (
                  <FeatureLapis key={index} feature={feature} position={params.position}></FeatureLapis>
                ))}
              </div>
            </div>
            {params?.link && (
              <div className="float-left w-full text-center mt-5">
                {/* <app-lynk [params]="params?.link" class="btn btn-primary">
                            <span class="block px-3 font-ssb">{{ params?.link?.content}}</span>
                            </app-lynk> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedBlockLapis;
