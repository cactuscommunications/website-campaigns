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
        content: 'And if you are still not satisfied, you get a full refund of your fees, no questions asked.',
        heading: 'Guaranteed Quality',
        subHeading: "In the rare case our work fails to delight you, we'll re-work on it till you're 100% happy.",
      },
      {
        class: 'border-pearl-gamma',
        content: 'And, if we ever miss a promised deadline by even one minute, we offer a full refund of your fees.',
        heading: 'On Time !!break!!Always',
        subHeading: 'We always help you meet your deadlines, often, by turning around work in just 8 hours',
      },
      {
        class: 'border-amber-gamma',
        content: 'Your files are also secure on our latest ISO standard systems (ISO/IEC 27001:2013 certified).',
        heading: 'Highest Standard Data Security',
        subHeading: 'We work hard to protect your work. All our experts and employees follow a strict NDA.',
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
      </div>
      <section className="container flex justify-center sm:block">
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
        <div className="border-opal-gamma border-pearl-gamma border-amber-gamma hidden"></div>
        <div className="flex justify-end sm:grid sm:px-0 sm:justify-center">
          {params.cards.map((card) => (
            <PromiseCard card={card}></PromiseCard>
          ))}
        </div>
        <div className="clearfix"></div>
      </section>
    </>
  );
}

export default OurPromise;
