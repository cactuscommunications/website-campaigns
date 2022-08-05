import PromiseCard from '../promise-card/promise-card';

export function OurPromise() {
  interface IOurPromiseParams {
    id?: string;
    cards: IPromiseCard[];
    image?: string;
    backgroundColor?: string;
    heading?: string;
  }
  interface IPromiseCard {
    heading: string;
    subHeading: string;
    content: string;
    class: string;
  }
  const params: IOurPromiseParams = {
    heading: '',
    cards: [
      {
        class: 'border-opal-gamma',
        content: 'それでもご満足いただけない場合は、全額返金保証。',
        heading: '英文品質保証',
        subHeading: "お客様の満足が品質の基準です。納品後、ご不満な点や変更内容は、満足いくまで何度でも修正。",
      },
      {
        class: 'border-pearl-gamma',
        content: '納期に1分でも遅れた場合は、全額返金保証。',
        heading: '納品締切厳守',
        subHeading: '私たちは常にお客様の締め切りに間に合うようご支援し、最短8時間以内に納品いたします。',
      },
      {
        class: 'border-amber-gamma',
        content: 'お客様の重要な研究データを厳重に保護します。',
        heading: '徹底した情報管理',
        subHeading: 'ISO/IEC 27001:2013 認証の最新セキュリティと厳格な機密保持契約で論文のデータを保護。',
      },
    ],
    image: '/assets/images/editage-promise-logo.svg',
  };

  return (
    <>
      <div className="py-20 w-full float-left sm:py-10 md:py-10">
        {params.heading && (
          <h2 className="text-center mb-10 sm:text-xxl sm:leading-8 sm:mb-4 sm:font-black">{params.heading} </h2>
        )}
        <section className="container flex justify-center max-w-6xl mx-auto sm:block">
        {params?.image && (
          <div className="flex items-center sm:block">
            <div
              className="w-52 h-52 bg-cover bg-no-repeat mr-8 sm:block sm:m-auto sm:mb-10 sm:w-37.5 sm:h-37.5 md:w-35 md:h-35 md:mr-2.5"
              style={{
                backgroundImage: `url(${params.image})`,
              }}
            ></div>
          </div>
        )}
        
        <div className="flex justify-end sm:grid sm:px-0 sm:justify-center">
          {params.cards.map((card, index) => (
            <PromiseCard key={index} card={card}></PromiseCard>
          ))}
        </div>
        <div className="clearfix"></div>
      </section>
      </div>
      
    </>
  );
}

export default OurPromise;
