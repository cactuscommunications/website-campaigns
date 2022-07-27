import { MarkDown } from '../markdown/markdown';
interface IPromiseCard {
  heading: string;
  subHeading: string;
  content: string;
  class: string;
}
export function PromiseCard({ card }: { card: IPromiseCard }) {
  return (
    <div
      className={
        card.class +
        ' p-8 ml-7.5 border-l-5 bg-white rounded shadow sm:ml-0 sm:w-full sm:mb-6 sm:p-4  w-67.5 md:ml-3.5 md:w-60'
      }
    >
      <h3 className="text-ruby-alpha mb-5 leading-30 sm:text-xxl-base sm:leading-6 text-lg font-ssb font-normal text-20">
        <MarkDown data={card.heading}></MarkDown>
      </h3>
      <p className="font-pr text-ruby-beta mb-5 sm:text-xsm sm:normal md:text-sm">
        <MarkDown data={card.subHeading}></MarkDown>
      </p>
      <p className="font-ssb sm:text-xsm sm:normal">
        <MarkDown data={card.content}></MarkDown>
      </p>
    </div>
  );
}

export default PromiseCard;
