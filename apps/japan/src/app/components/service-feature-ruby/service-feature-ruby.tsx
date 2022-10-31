import { Http2ServerResponse } from 'http2';
import React from 'react';
import { useEffect, useState } from 'react';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';
import { isMobile } from 'react-device-detect';
import pageService from '../../services/renderer/page-service';
const partner = pageService.getPartner();
/**
 * interface for listing ruby parameters
 */
interface IServiceFeatureRubyParams {
  heading: string;
  mobileMedicallBg?: string;
  searchText: string;
  headingOne: string;
  headingOneParam: string
  headingTwo: string;
  headingTwoParam: string
  headingThree: string;
  headingThreeParam: string
}
interface Idata {
  editors: number;
  jobs: number;
  clients: number;
  image: string;
  title?: string;
}

const ServiceFeatureRuby = ({ params }: { params: IServiceFeatureRubyParams }) => {
  const [data, setData] = useState({ editors: 0, jobs: 0, clients: 0, image: '', title: '' });
  let [active, setActive] = useState(1);
  const url = new URL(location.href);
  var saParam = url.searchParams.get("sa");
  useEffect(() => {
    if (saParam) {
      params.searchText = saParam;
    }
    const getSubData = async () => {
      let resp = await getData(params.searchText);
      if(partner == 'KOR') {
        resp.title = resp.title.replace(/エディテージ/g, "에디티지").replace(/分野/g, "분야")
      }
      setData(resp);
    };
    getSubData();
  }, [params.searchText]);

  return (
    <>
      <section className='sm:bg-grd-iota2'>
        <div
          className="w-full pt-20 pb-26 bg-no-repeat bg-contain bg-right md:pt-5 md:pb-10 sm:pt-7 sm:px-4 sm:pb-0 sm:mb-16"
          style={{
            backgroundImage: `url(${data.image})`,
            // backgroundImage: isMobile ? "none" : `url(${data.image})`,
          }}
        >
          <div className="container sm:px-0">
            <div className='max-w-[600px] mx-auto'>
              <h2 className="text-center leading-44 mb-5 sm:mb-0 sm:leading-29">
                <div className="font-pb text-3xl sm:text-20 sm:leading-29 sm:block md:text-2xl">
                  {data.title ? data.title : ''}{params.heading}
                </div>
              </h2>
            </div>
            <div
              className="hidden sm:block bg-contain bg-no-repeat w-90 h-56.75 mx-auto max-w-full"
              style={{
                backgroundImage: `url(${'/assets/images/backgrounds/mobile' + data.image.replace('/assets/images/backgrounds', '')})`,
              }}
            ></div>

            <div className="bg-white shadow rounded-lg w-full flex mx-auto max-w-3xl py-6 px-18 sm:px-3 sm:py-3 justify-between box-border sm:relative sm:-top-3">
              <div className="inline-flex">
                <span className="font-sb text-lapis-delta opacity-40 text-5xl leading-45 -mt-4 sm:text-20 sm:leading-30 sm:-mt-1.5">
                  1
                </span>
                <span className="w-1 inline-block h-12 bg-opal-alpha mr-3.75 ml-1.5"></span>
                <div className="inline-flex flex-col">
                  <span className="font-pr text-ruby-alpha text-sm leading-4 mb-0.5 sm:text-xs sm:leading-14 sm:mb-1.5">
                    {params.headingOne}
                  </span>
                  <span className="font-pb text-ruby-alpha text-2xl leading-7 sm:text-x-base sm:leading-18">
                    {commarize(data.editors)}{params.headingOneParam}
                  </span>
                </div>
              </div>

              <div className="inline-flex">
                <span className="font-sb text-lapis-delta opacity-40	 text-5xl leading-45 -mt-4 sm:text-20 sm:leading-30 sm:-mt-1.5">
                  2
                </span>
                <span className="w-1 inline-block h-12 bg-jade-alpha mr-3.75 ml-1.5"></span>
                <div className="inline-flex flex-col">
                  <span className="font-pr text-ruby-alpha text-sm leading-4 mb-0.5 sm:text-xs sm:leading-14 sm:mb-1.5">
                    {params.headingTwo}
                  </span>
                  <span className="font-pb text-ruby-alpha text-2xl leading-7 sm:text-x-base sm:leading-18">
                    {commarize(data.jobs)}{params.headingTwoParam}
                  </span>
                </div>
              </div>
              <div className="inline-flex">
                <span className="font-sb text-lapis-delta opacity-40	text-5xl leading-45 -mt-4 sm:text-20 sm:leading-30 sm:-mt-1.5">
                  3
                </span>
                <span className="w-1 inline-block h-12 bg-amber-alpha mr-3.75 ml-1.5"></span>
                <div className="inline-flex flex-col">
                  <span className="font-pr text-ruby-alpha text-sm leading-4 mb-0.5 sm:text-xs sm:leading-14 sm:mb-1.5">
                    {params.headingThree}
                  </span>
                  <span className="font-pb text-ruby-alpha text-2xl leading-7 sm:text-x-base sm:leading-18">
                    {commarize(data.clients)}{params.headingThreeParam}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
function commarize(numStr: number) {
  return Number(numStr).toLocaleString()
}
function getMachineName(input: string) {
  const query = '[$eq]=' + input;
  return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five').then(function (response: any) {
    return response.data.data[0]?.attributes.sa_one_five.data[0].attributes.machine_name ? response.data.data[0].attributes.sa_one_five.data[0].attributes.machine_name : '';
  })
}
function getData(input: string) {
  return subjectAPIService.getWholeData(input, 'sa_one_five.social_attributes').then(function (response: any) {
    if (response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.editors) {
      return {
        editors: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.editors,
        jobs: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.jobs,
        clients: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.clients,
        image: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.image,
        title: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.title ?? ''
      };
    } else {
      return {
        editors: 0,
        jobs: 0,
        clients: 0,
        image: '',
        title: ''
      };
    }

  });
}

export default ServiceFeatureRuby;
