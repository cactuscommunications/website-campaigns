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
      route: 'https://www.editage.jp/partner-with-us',
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
        heading: '40以上の雑誌',
      },
      {
        logo: [
          {
            logoPath: '/assets/images/partners/japan/tokyo-university.svg',
          },
          {
            logoPath: '/assets/images/partners/japan/osaka-university.svg',
          },
          {
            logoPath: '/assets/images/partners/japan/nagoya-university-name.svg',
          },
          {
            logoPath: '/assets/images/partners/japan/kyoto-university.svg',
          },
          {
            logoPath: '/assets/images/partners/japan/tohoku-university.svg',
          },
          {
            logoPath: '/assets/images/partners/japan/hokkaido-university-name.svg',
          },
        ],
        heading: '500以上の大学',
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
        heading: '1,100以上の組織',
      },
    ],
    heading: 'エディテージの研究機関・出版社パートナー',
  };

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
              {params.cards.map((card, index) => (
                <FeatureTopaz
                  key={index}
                  card={card}
                  lastElement={index === params.cards.length - 1}
                  cardCount={params.cards.length}
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
