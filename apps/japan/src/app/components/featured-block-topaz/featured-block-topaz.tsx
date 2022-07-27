import MarkDown from '../markdown/markdown';
import FeatureTopaz from './feature-topaz';
export function FeaturedBlockTopaz() {
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
    cards: ITopazFeatureCards[];
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
  const params: IFeaturedBlockTopazParams = {
    link: {
      route: '/partner-with-us',
      content: 'Explore Corporate Partnership >',
      tracking: {
        event: 'click',
        custom: {
          ga_label: 'Corporatepage',
          ga_action: 'Explorelink',
          ga_category: 'Homepage',
        },
        description: 'hp-partner with us-success stories-null-click-null-null',
      },
    },
    cards: [
      {
        logo: [
          {
            logoPath: '/assets/images/partners/wiley.svg',
          },
          {
            logoPath: '/assets/images/partners/sage.svg',
          },
          {
            logoPath: '/assets/images/partners/tnf.svg',
          },
          {
            logoPath: '/assets/images/partners/elsevier.svg',
          },
          {
            logoPath: '/assets/images/partners/bmj.svg',
          },
          {
            logoPath: '/assets/images/partners/frontiers.svg',
          },
          {
            logoPath: '/assets/images/partners/emrald-publishing.png',
          },
          {
            logoPath: '/assets/images/partners/wolters-kluwer.png',
          },
          {
            logoPath: '/assets/images/partners/hindawi.svg',
          },
        ],
        heading: '40+ Journals & Publishers',
      },
      {
        logo: [
          {
            logoPath: '/assets/images/partners/korea-university.svg',
          },
          {
            logoPath: '/assets/images/partners/sungkyunkwan-university.svg',
          },
          {
            logoPath: '/assets/images/partners/yonsel-university.svg',
          },
          {
            logoPath: '/assets/images/partners/iet.svg',
          },
          {
            logoPath: '/assets/images/partners/japan/nagoya-university-name-logo.svg',
          },
          {
            logoPath: '/assets/images/partners/japan/tokyo-university-name.svg',
          },
        ],
        heading: '500+ Universities',
      },
      {
        logo: [
          {
            logoPath: '/assets/images/partners/cope.svg',
          },
          {
            logoPath: '/assets/images/partners/science-journals.svg',
          },
          {
            logoPath: '/assets/images/partners/osa.svg',
          },
          {
            logoPath: '/assets/images/partners/seg.svg',
          },
          {
            logoPath: '/assets/images/partners/iop.svg',
          },
          {
            logoPath: '/assets/images/partners/royal-society-of-chemistry.svg',
          },
          {
            logoPath: '/assets/images/korea/partners/altas-korea.png',
          },
          {
            logoPath: '/assets/images/korea/partners/kamje.png',
          },
        ],
        heading: '1,100+ Societies',
      },
    ],
    heading: 'Trusted & endorsed by industry experts & partners',
  };

  return (
    <>
      <div id="{{ params?.id }}" className="bg-primary py-16 w-full float-left sm:py-10">
        <section className="container">
          <div className="wrapper">
            <h2 className="mb-3 text-center leading-9 sm:text-xxl sm:leading-8 sm:font-black">
              <MarkDown data={params?.heading}></MarkDown>
            </h2>
            {params?.subHeading && <p className="text-xsm text-center pb-3">{params?.subHeading} </p>}
            <div className="w-250 mt-8 mx-auto bg-white rounded shadow p-8 flex justify-center sm:w-full sm:inline-block sm:px-0 sm:mt-2 md:p-4 md:w-full">
              {params.cards.map((card, index) => (
                <FeatureTopaz
                  card={card}
                  lastElement={index === params.cards.length - 1}
                  cardCount={params.cards.length}
                ></FeatureTopaz>
              ))}
            </div>
            <div className="clearfix"></div>
            {params?.link && (
              <div className="text-center mt-8">
                {/* <app-lynk       
                                [params]="params?.link" class="text-underline-hover">
                                    <span class="text-pearl-beta font-ssb ">{{ params?.link?.content}}</span>
                                </app-lynk> */}
                <a className="text-pearl-beta font-ssb " href={params?.link.route}>
                  {params?.link?.content}
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default FeaturedBlockTopaz;
