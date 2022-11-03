import { MarkDown } from '../markdown/markdown';
import pageService from '../../services/renderer/page-service';
const partner = pageService.getPartner();
const ModalRuby = ({closeModal,data}: { closeModal: any,data :any}) => {
  const closeIcon = 'assets/images/icons/close.svg'
  return (

    <div className="overlay flex flex-col fixed top-0 bottom-0 left-0 right-0 items-center justify-center z-10 bg-black/70">
    <div  className="relative sm:px-5">
      <button
        className="button float-right relative top-8 right-10 z-10 focus:outline-none sm:right-4.75"
        onClick={(e) => closeModal(false)}
      >
        <span className="w-3 h-3 float-right inline-block bg-no-repeat bg-cover" style={{backgroundImage: `url(${closeIcon})`}}></span>
      </button>
      <div className="clearfix"></div>
      <section className="bg-white rounded-lg border border-lapis-epsilon p-1">
       <div className="w-232.5 max-h-90vh overflow-y-auto custom-scroll py-12 sm:w-full sm:py-6 md:py-6 md:w-184.5 flex sm:block md:block">
          <div className="w-1.08/4 float-left text-ruby-beta relative px-10 sm:w-full sm:px-4">
             <div className="w-26 h-26 rounded-full bg-center bg-no-repeat bg-cover mx-auto  ng-lazyloaded"  style={{backgroundImage: `url(${data.attributes.image})`}}></div>
             <div className="text-xl text-center m-auto pt-2 text-ruby-alpha font-sb">{data.attributes.name}</div>
                <div className="text-center font-ssb text-xsm">{data.attributes.degree}</div>

             <section className="flex mt-4">
               <div className="mr-5">
                   <div className="h-8 py-1 text-xsm text-ruby-alpha font-ssb"> {data.attributes.nationality} </div>
                   <div className="h-8 py-1 text-xsm text-ruby-alpha font-ssb"> {partner == 'JPN' ? '校正実績' : '교정 횟수'} </div>
                   <div className="h-8 py-1 text-xsm text-ruby-alpha font-ssb"> {partner == 'JPN' ? '出版経験' : '출판 경험'}</div>
                   <div className="h-8 py-1 text-xsm text-ruby-alpha font-ssb"> {partner == 'JPN' ? '満足度' : '만족도'}</div>
                </div>
                <div className="">
                   <div className="py-2 flag-us flag">  </div>
                   <div className="py-2 undefined text-black font-ssb h-8 w-8"> {data.attributes.jobs ? data.attributes.jobs : 0} </div>
                   <div className="py-2 undefined text-black font-ssb h-8 w-8"> {data.attributes.experience ? data.attributes.experience : 0} </div>
                   <div className="py-2 undefined text-black font-ssb h-8 w-8"> {data.attributes.satisfaction_rate ? data.attributes.satisfaction_rate : 0}   </div>
                </div>
             </section>
          </div>
          <div className="float-left flex flex-wrap w-2.92/4 pl-10 pr-14 border-lapis-epsilon border-l min-h-48 sm:px-4 sm:border-l-0 sm:p-4 sm:w-full">
             <div className="my-auto text-sm flex sm:text-center md:text-center">
                {/* <app-markdown>
                   <p className="text-ruby-alpha font-ssb sm:text-xsm sm:normal sm:leading-6 text-base leading-30"> I have enjoyed working as a medical writer and editor for the past 5 years. During this time I have come to meet very interesting people from many countries and I have had the privilege of working with very respected people from different scientific fields. I am a member of the American Medical Writer's Association and I have been taking several of their workshops in order to improve my writing and editing skills. Throughout the years, I have developed my own editing techniques, which have helped me deliver documents with the highest quality and I continue to develop and adjust these techniques based on my experiences. </p>
                </app-markdown> */}
                
             </div>
             <div className="mt-4 w-full">
                {/* <app-markdown>
                   <h2 className="text-base text-ruby-alpha pb-4 pt-8">専門領域</h2>
                </app-markdown> */}
                <ul className="ml-2.5">
                {data.attributes.expertise_area.split(',').map((area: string) => {
                                            return (
                                             <li className="text-xsm mb-1 font-ssb text-ruby-alpha -indent-10"><span className="rounded-full h-0.75 w-0.75 bg-ruby-alpha inline-flex mr-1 mb-1"></span> {area} </li>
                                            )
                                        })}                   
                </ul>
             </div>
             
             <div className="clearfix"></div>
             
          </div>
          <div className="clearfix"></div>
       </div>
    </section>
    </div>
  </div>


  );
};


export default ModalRuby;