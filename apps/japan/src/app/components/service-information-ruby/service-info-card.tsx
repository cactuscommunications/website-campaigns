import ServiceInfoList from './service-info-list'
import {ICardInfo} from "./models"
import MarkDown from '../markdown/markdown';


    

export function ServiceInfoCard({ card }: { card: ICardInfo }) {
  let start = 0;
  let end = card.list.length
  let mid = Math.ceil((card.list.length)/2)
  return (
    <div   className={`border rounded-lg ${card.heading?.headingClassName ? card.heading?.headingClassName : ''}`}>
    <div  className={`rounded-t-lg  relative flex justify-between flex-wrap items-center py-4 sm:pb-5 ${card.heading?.subHeadingClass ? card.heading?.subHeadingClass : ''}`}>
      <span className="absolute bg-diamond-delta -top-px -left-px text-base leading-9 text-white font-pr px-3 rounded-br-lg	rounded-tl-lg sm:text-13">{card?.heading.specialHeadingText}</span>
      <div className="flex justify-between w-full">
        <h3 className="text-5xl text-white leading-9 font-pb mt-7 mx-6 sm:text-2xl sm:ml-3">{card?.heading.heading + ">"}</h3>  
        <span className="bg-diamond-kappa py-2 pl-3 pr-10 rounded-l-3xl font-sb text-ruby-alpha text-base -mr-px flex self-center sm:absolute sm:top-full sm:right-px sm:mt-2">
          <span className="w-7 h-7 bg-no-repeat inline-block bg-contain mr-2" style={{backgroundImage: `url(${card.heading.path})`,}}></span>{card.heading.comment}
        </span>
      </div>
    </div>

    <div className="border-b border-ruby-beta/50 px-5 py-4 relative sm:pt-15 sm:px-2.5"> 
        <p className="text-sm leading-6 font-pb text-ruby-alpha sm:text-13">
          <MarkDown data={card.desc}></MarkDown>
        </p>

      <div  className={`mt-5 flex items-center  px-6 rounded-lg py-3 z-10 sm:px-4 content before:absolute before:border-t before:-z-10 before:border-ruby-beta/50 before:left-0 before:right-0 ${card.benefit?.className ? card.benefit?.className : ''}`}>
        <span className="bg-no-repeat bg-contain inline-block w-7	h-7 mr-2 flex-shrink-0 sm:w-5 sm:h-5 sm:mr-1.5" style={{backgroundImage: `url(${card.benefit.path})`,}}></span>
        <span className="text-sm font-pb text-ruby-alpha sm:text-13 sm:leading-19">{card?.benefit.text}</span>
      </div>

      <div className="mt-8 sm:mt-6">
        <h3 className="font-pr text-ruby-alpha text-xl	leading-5 sm:text-base">{card.listHeading}</h3>
       <div className="flex justify-between flex-wrap">
        <ul className="p-0 mt-6 w-1/2 sm:mt-3.5 sm:w-full">
        {card.list.slice(start,mid).map((card, ) => (
                    <ServiceInfoList
                    list={card}
                    ></ServiceInfoList>
                ))}
        </ul>

        <ul className="p-0 mt-6 w-1/2 sm:mt-0 sm:w-full">
        {card.list.slice(mid+1,end).map((card, ) => (
                    <ServiceInfoList
                    list={card}
                    ></ServiceInfoList>
                ))}
        </ul>
       </div>
      </div>
    </div>


    <div className="flex justify-between flex-wrap py-8 px-7 sm:px-2.5 sm:pb-5">
      <div className="w-1/2 sm:w-full sm:mb-8">
        <div className="flex mb-6">
          <span className="w-7.5 h-7.5 inline-block bg-contain bg-no-repeat mr-5 sm:mr-4" style={{backgroundImage: `url(${card.pricing.path1})`,}}></span> 
          <div>
            <h3 className="font-pb text-2xl leading-5 text-ruby-alpha sm:text-lg">{card.pricing.text}<span className="text-garnet-lambda">{card.pricing.wordCount}</span>{card.pricing.days} 
                <span className="block font-pr leading-5 text-sm text-gray-400 mt-2 sm:text-13 sm:mt-1.5">{card?.pricing.disclaimer}</span></h3>
          </div>
        </div>

        <div className="flex">
          <span className="w-10 h-7.5 inline-block mr-5" style={{backgroundImage: `url(${card.pricing.path2})`,}}></span> 
          <div>
            <h3 className="font-pb text-2xl leading-5 text-ruby-alpha sm:text-lg">{card.pricing.word}<span className="text-garnet-lambda">{card?.pricing.price}</span>{card?.pricing.tax} </h3>
          </div>
        </div>
      </div>
      <div className="w-1/2 text-right sm:w-full sm:text-center">  
      <div className="text-right sm:text-center">
       
                <a className= "block" href="/order/ncf">
                    <div
                        className="w-auto mx-auto bg-pearl-beta flex rounded-md justify-between md:w-full sm:w-full ng-star-inserted">
                        <div className="flex px-6 py-4 md:pl-7.5 md:pr-7.5 md:py-3.75 sm:px-5 sm:py-3">
                            <div className="w-9 h-9 bg-contain bg-no-repeat self-center sm:hidden  ng-lazyloaded"
                              style={{backgroundImage: `url(${card.pricing.path2})`,}}></div>
                            <div className="ml-3 text-left sm:ml-0">
                                <h3 className="text-white text-base font-sb sm:text-sm sm:leading-5">自動お見積り・ご注文はこちら</h3>
                                <p className="text-xs font-ssb text-white/80 sm:text-xs sm:leading-17">
                                    単語数の入力で料金・納期をその場でご確認いただけます</p>
                            </div>
                        </div>
                        <div className="w-16 bg-pearl-delta1 flex-shrink-0 flex rounded-r-md sm:w-14 md:w-17.5"><span
                                className="inline-block w-6 h-5.5 bg-contain bg-no-repeat mx-auto self-center sm:w-6.5 sm:h-6  ng-lazyloaded"
                                style={{backgroundImage: `url(${card.pricing.path2})`,}}></span>
                        </div>
                    </div>
                </a>
       
      </div>
        <div className="w-full max-w-[500px] float-right sm:float-none sm:max-w-[100%] mt-4 font-pb text-base leading-5 text-pearl-beta text-center sm:text-sm">{card.pricing.CTAdetails}</div>
      </div>
      
    </div>
  </div>
  );
}

export default ServiceInfoCard;