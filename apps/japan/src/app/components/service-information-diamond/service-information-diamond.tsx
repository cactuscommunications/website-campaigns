import { MarkDown } from '../markdown/markdown';

export function ServiceInformationDiamond() {
  interface IServiceInformationDiamondParams {
    logo: string;
    info: IInfo;
    pitch: IPitch;
    coins: ICoins;
  }

  interface IInfo {
    content: string;
    list: {
      text: string;
    }[];
  }

  interface IPitch {
    image: string;
    bottomLabel: string;
  }
    
  interface ICoins {
    image: string;
    details: {
      text: string;
    }[];
    label: string;
  }

  const params: IServiceInformationDiamondParams = {
    logo: "/assets/images/logo/editage-20-white-logo.svg",
    coins: {
      image: "/assets/images/coin1.svg",
      label: "創業 !!custom!!20!!/custom!! 周年の信頼と実績",
      details: [
        { text: "売上" },
        { text: "原稿量" },
        { text: "リピート率"}
      ]
    },
    pitch: {
      "image": "/assets/images/number-one-logo.svg",
      "bottomLabel": "東京商工リサーチ調べ  (2022年5月)"
    },
    info: {
      list: [
        { text: "売上" },
        { text: "原稿量" },
        { text: "リピート率"}
      ],
      content: "エディテージは、!!break!!英文校正業界"
    }
  };

  return (
    <>
      <div className="clearfix"></div>
      <div className="h-0.25 w-full bg-grd-iota1"></div>
      <div className="clearfix"></div>
      <section className="py-5 bg-pearl-alpha sm:pt-3 sm:pb-7 ">
        <div className="container">
          <div className="flex items-center justify-center">
            <div
              className="w-44 h-9.5 bg-contain bg-no-repeat mx-5 flex-shrink-0 sm:order-2 sm:w-40 sm:h-8 sm:ml-4 md:w-40 order-1" 
              style={{ backgroundImage: `url(${params.logo})` }}>
            </div>
            <div className="inline-flex flex-col px-4 sm:hidden order-2">
              <p className="font-pb text-white text-26 leading-42 md:text-base">
                <MarkDown data={params.info.content}></MarkDown>
              </p>
              <div>
                {params.info.list.map((list, index, array) => (
                  <span key={index} className="text-base text-white leading-42 font-pr inline-block md:text-sm">{list.text}
                    {index + 1 !== array.length && (
                      <span className="text-base text-white leading-42 font-pr inline-block mx-2 md:text-sm">|</span>
                    )}
                  </span>
                  ))}
              </div>
            </div>
            <div
              className="inline-flex flex-col flex-shrink-0 w-77.5 h-26.75 bg-cover bg-no-repeat mx-5 md:w-52 md:h-19 sm:order-1 sm:w-33 sm:h-15 sm:hidden md:-mt-4 order-3"
              style={{backgroundImage: `url(${params?.pitch.image})`}}>
              <div className="text-amber-200 text-sm font-pr text-center mt-24 font-light w-full md:mt-19 md:text-xsm">
                { params?.pitch.bottomLabel}
              </div>
            </div>
            <div className="inline-flex flex-col mx-5 sm:hidden order-4">
              <div className="flex justify-center mb-1.5">
                {params.coins.details.map((detail, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 bg-contain bg-no-repeat relative mx-1"
                    style={{ backgroundImage: `url(${params?.coins.image})` }}>
                      <span className="block text-center w-full font-pb text-10 text-pearl-alpha mt-3.5 -ml-px px-1.5">{ detail?.text }</span>
                  </div>
                ))}
              </div>
            <div className="flex justify-center">
              <span className="w-7.5 h-7.5 bg-cover bg-no-repeat -mt-1.5 -mr-2.5" 
                style={{ backgroundImage: `url('/assets/images/blue-ribbon-left-shape.svg')` }}>&nbsp;</span>
                <div className="bg-pearl-beta h-6.5 px-3 text-x-base text-white font-pb relative z-4 flex items-center ng-star-inserted">創業
                  <span className=" text-opal-alpha font-sb text-2xl self-center mx-0.5 -mt-0.5">20</span> 周年の信頼と実績</div>
                <span className="w-7.5 h-7.5 bg-cover bg-no-repeat -mt-1.5 -ml-2.5 relative z-0"
                  style={{ backgroundImage: `url('/assets/images/blue-ribbon-right-shape.svg)` }}>&nbsp;</span>
            </div>
          </div>
      </div>
        </div>
      </section>
      <div className="h-0.25 w-full bg-grd-iota1"></div>
      <div className="clearfix"></div>
    </>
  );
}

export default ServiceInformationDiamond;
