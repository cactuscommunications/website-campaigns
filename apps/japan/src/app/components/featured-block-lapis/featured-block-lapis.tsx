import FeatureLapis from './feature-lapis';

export function FeaturedBlockLapis() {
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
  const params: IFeaturedBlockLapisParams = {
    heading: 'お見積り・ご注文・お問い合せ',
    features: [
      {
        title: '電話',
        content: '直接話をしたい時はこちら',
        imagePath: '/assets/images/icons/call-round-icon.svg',
        contactLink: {
          route: 'tel:0120502987',
          content: '0120-50-2987',
        },
      },
      {
        title: 'チャット',
        content: 'その場で返事が欲しい時はページ右下のチャットをご利用ください。',
        imagePath: '/assets/images/icons/chat-round-icon.svg',
      },
      {
        title: 'Eメール',
        content: 'メールでのお問い合わせはこちら',
        imagePath: '/assets/images/icons/email-round-icon.svg',
        contactLink: {
          route: 'mailto:submissions@editage.com',
          content: 'submissions@editage.com',
        },
      },
    ],
    position: 'left',
    subHeading: '平日・祝日 9:30～24:00 土 12:30～21:30 (論文投稿支援のみ 月～金 11:00～22:00)',
    backgroundColor: 'bg-primary',
  };

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
              {params?.subHeading}
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
