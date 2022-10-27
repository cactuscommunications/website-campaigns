import PromiseCard from '../promise-card/promise-card';
interface IOurPromiseParams {
  id?: string;
  promiseCards: IPromiseCard[];
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
export function OurPromise({ params }: { params: IOurPromiseParams }) {
    return (
    <>
      <div className="py-20 w-full float-left sm:py-10 md:py-10">
        {params.heading && (
          <h2 className="text-center mb-10 sm:text-xxl sm:leading-8 sm:mb-4 sm:font-black">{params.heading} </h2>
        )}
        <section className="container">
          <div className=' flex justify-center max-w-6xl mx-auto sm:block'>
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
              {params.promiseCards.map((card, index) => (
                <PromiseCard key={index} card={card}></PromiseCard>
              ))}
            </div>
            <div className="clearfix"></div>
          </div>
        </section>
      </div>

    </>
  );
}

export default OurPromise;
