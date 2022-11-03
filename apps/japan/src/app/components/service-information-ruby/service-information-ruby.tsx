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
  
