import { isMobile } from "react-device-detect";

export function FeaturedBlockPearl() {
  interface IFeaturedBlockPearlParams {
    heading: string;
    srNo?: string;
    features?: IFeatures[];
    image: string;
  }

  interface IFeatures {
    content: string;
  }

  const params: IFeaturedBlockPearlParams = {
    features: [
      {
        content:
          '採用 : 学術的な専門知識と英語力を評価する多段階の厳しい選考過程を経て、慎重に選ばれます。採用プロセスをクリアできるのは、応募者のわずか2％です。',
      },
      {
        content:
          'オリエンテーション:校正者は、厳しい採点基準で定期的に評価され、集中的なトレーニングを受けることで、常に高品質の英文校正を提供することができます。',
      },
      {
        content:
          '継続的な改善:エディターは豊富なリソースにアクセスでき、ウェビナーなどによる情報共有も定期的に開催しています。',
      },
      {
        content:
          'エディターマッチング：AIによる10ポイントマッチングシステムで、あなたの論文に最も適したエディターを選びます。',
      },
      {
        content:
          'ご希望のエディターをリクエスト：2回目のご注文後、ご希望のエディターをリクエストすることができます。*受付はエディターの都合によります。',
      },
    ],
    image: '/assets/images/featured-block-pearl.svg',
    heading: '選び抜かれた専門分野の校正者',
  };

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
              className="w-93 h-56.75 bg-no-repeat bg-center float-left order-1 sm:w-80"
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
