import MarkDown from '../markdown/markdown';
import FeatureTopaz from './feature-topaz';
 /**
   * Types for featured block topaz params
   * @author Goutham Reddy.
   */
  interface IFeaturedBlockTopazParams {
    id?: string;
    heading: string;
    subHeading?: string;
    link: {
      route?: string;
      content?: string;
      tracking: {};
    };
    featureCards: ITopazFeatureCards[];
  }

  /**
   * Types for ITopazFeatureCards
   * @author Goutham Reddy.
   */
  interface ITopazFeatureCards {
    heading?: string;
    logo: Ilogo[];
    content?: string;
    link?: {
      content?: string;
    };
  }

  /**
   * Logos of Ilogo
   * @author Goutham Reddy.
   */
  interface Ilogo {
    logoPath: string;
  }
export function FeaturedBlockTopaz({ params }: { params: IFeaturedBlockTopazParams }) {
   return (
    <>
      <div id="{{ params?.id }}" className="bg-primary py-16 w-full float-left sm:py-10">
        <section className="container">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="mb-3 text-center leading-9 sm:text-xxl sm:leading-8 sm:font-black">
              <MarkDown data={params?.heading}></MarkDown>
            </h2>
            {params?.subHeading && <p className="text-xsm text-center pb-3">{params?.subHeading} </p>}
            <div className="w-250 mt-8 mx-auto bg-white rounded shadow p-8 flex justify-center sm:w-full sm:inline-block sm:px-0 sm:mt-2 md:p-4 md:w-full">
              {params.featureCards.map((card, index) => (
                <FeatureTopaz
                  key={index}
                  card={card}
                  lastElement={index === params.featureCards.length - 1}
                  cardCount={params.featureCards.length}
                ></FeatureTopaz>
              ))}
            </div>
            <div className="clearfix"></div>
            {/* {params?.link && (
              <div className="text-center mt-8">
                <a className="text-pearl-beta font-ssb text-underline-hover" href={params?.link.route}>
                  {params?.link?.content}
                </a>
              </div>
            )} */}
          </div>
        </section>
      </div>
    </>
  );
}

export default FeaturedBlockTopaz;
