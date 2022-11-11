import ServiceInfoCard from './service-info-card'
import {IServiceInformationRuby} from "./models"
import MarkDown from '../markdown/markdown';
import ModalOpal from '../modal-opal/modal-opal';
import {  useState, useEffect } from 'react';
import subjectAPIService from '../../services/api/subject-api';
import pageService from '../../services/renderer/page-service';
const partner = pageService.getPartner();
  
export function ServiceInformationRuby({ params }: { params: IServiceInformationRuby }){
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({ service_flag: ''});
  const url = new URL(location.href);
  var saParam = url.searchParams.get("sa");
  useEffect(() => {
    if(saParam) { 
      params.searchText = saParam;
  }
    const getSubData = async () => {
      let resp = await getData(params.searchText);
      setData(resp);
    };
    getSubData();
  }, [params.searchText]);

   
    return (
      <section className="py-10">
        <div className="container">
          <h2 className="font-pb text-center text-ruby-alpha text-5xl mb-8 sm:text-20 sm:leading-7 sm:mb-3">{params.heading}</h2> 
          <p className="text-base text-center font-pr text-ruby-alpha mx-auto max-w-240 mb-10 leading-6 sm:text-13 sm:mb-6">{params.subHeading}</p>
          {params.infoCard.map((card, index) => (
            <ServiceInfoCard
              key={index}
              index = {index}
              card={card}
              data= {data}
              ></ServiceInfoCard>
          ))}
          {partner == 'JPN' && <div className='p-8 shadow-lg shadow-gray-500/20 max-w-[1138px] m-auto rounded'>
            <div className='flex sm:flex-col'>
              <div className='min-w-[360px] w-90 h-60 mr-5 border sm:w-full sm:max-w-100 sm:min-w-0 sm:m-auto sm:mb-5'>
                <span className='bg-no-repeat bg-cover w-full h-full block' style={{backgroundImage: `url(${'/assets/images/proofreading.jpg'})`}}></span>
              </div>
              <div>
                <p className='font-bold mb-3 text-lg'>
                  [期間限定 お試しサービス 11月31日まで]<br />
                  論文プルーフリーディング＆投稿規定チェックサービス
                </p>
                <p className='mb-10 text-base'>
                  ネイティブのコピーエディターが低料金で英語論文を最終仕上げ。自ら執筆した英語論文、AI翻訳・校正した英語論文などの総仕上げにおすすめのサービス。文法・句読点・タイプミス等のチェックを英語ネイティブが行います。投稿規定に合わせたフォーマット調整も付属。安心して投稿いただけます。
                </p>
                <div className='flex justify-end sm:justify-center'>
                  <a target='_blank' className='relative bg-neutral-400 w-56 py-3 px-5 pl-13 rounded text-white text-xl font-semibold hover:text-white md:text-lg sm:block sm:m-auto sm:text-base' href="https://www.editage.jp/services/proofreading-formatting">
                  <span className='absolute left-4 inset-y-0 m-auto w-8 h-8 inline-block bg-no-repeat' style={{backgroundImage: `url(${'/assets/images/icons/service-icon.svg'})`}}></span>
                    サービス詳細
                    <span className='absolute right-4 inset-y-0 m-auto w-3.5 h-3.5 inline-block bg-no-repeat' style={{backgroundImage: `url(${'/assets/images/icons/arrow-right-white.svg'})`}}></span>
                  </a>
                </div>
              </div>
            </div>
          </div>}
          <div className="text-center mt-10">
            {partner == "JPN" && <a onClick={() => {setOpenModal(true);}}className="btn btn-primary">
              <span className="w-full font-pb mt-2 px-6">{params.CTAtext}</span>
            </a> }
            {partner == "KOR" && <a  href = "https://app.editage.co.kr/order/ncf/english-editing" className="btn btn-primary">
              <span className="w-full font-pb mt-2 px-6">{params.CTAtext}</span>
            </a> }
          </div>
          {openModal && <ModalOpal closeModal={setOpenModal}/>}
        </div>
      </section>
    );
  function getData(input:string) {
    return subjectAPIService.getWholeData(input, 'sa_one_five.social_attributes').then(function (response: any) {
      if (response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.editors) {
        return {
          service_flag: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.service_flag,
        };
      } else {
        return {
          service_flag: ''
        };
      }
  
    });
  }  
        
}
    export default ServiceInformationRuby;
  
