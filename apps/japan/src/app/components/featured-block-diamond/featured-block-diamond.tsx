import { MarkDown } from '../markdown/markdown';
export function FeaturedBlockDiamond() {
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

  const params: IFeaturedBlockDiamondParams = {
    link: {
      content: '無料お見積りはこちら',
      route: 'https://cactuscommunications.formstack.com/forms/editor_in_your_subject_area',
      tracking: {
        event: 'click',
        custom: {
          ga_label: '',
          ga_action: '',
          ga_category: '',
        },
        description: '',
      },
    },
    image: '/assets/images/featured-block-diamond-cta.svg',
    heading: '無料でお見積りいたします！',
    subHeading:
      '料金と納期は、お客様のご依頼内容に合わせてカスタマイズさせていただきます。お気軽にお問い合わせください。',
    backgroundColor: 'bg-jade-gamma',
  };

  return (
    <>
      <div className="clearfix"></div>
      <section className={' w-full float-left sm:pt-6 mb-2 mt-4 ' + params?.backgroundColor}>
        <div className="wrapper">
          <div className="w-full relative flex sm:block">
            <div className={'float-left sm:block w-1/5 self-center text-right pr-2 sm:pr-0 ' + params?.backgroundColor}>
              <span
                className={
                  ' w-50 h-32 inline-block bg-no-repeat bg-center bg-contain sm:block sm:m-auto sm:my-1 sm:bg-center '
                }
                style={{
                  backgroundImage: `url(${params?.image})`,
                }}
              ></span>
            </div>
            <div className="float-right py-8.75 sm: pt-2 flex sm:block sm:w-full sm:px-5 w-full px-8 sm:pt-4">
              <div className="sm:w-full w-1/2 float-left sm:float-none md:w-3/5">
                {params.heading && (
                  <h3 className="text-pearl-alpha mb-3 font-sb sm:text-xxl-base sm:leading-8 sm:text-center">
                    {params.heading}{' '}
                  </h3>
                )}
                <p className="text-pearl-alpha font-ssb leading-6 sm:text-center sm:pr-0">
                  <MarkDown data={params.subHeading}></MarkDown>
                </p>
              </div>
              {params?.link && (
                <div className="w-1/2 float-right text-center self-center sm:w-full sm:mt-3 sm:mr-auto sm:ml-auto sm:float-none md:w-2/5">
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