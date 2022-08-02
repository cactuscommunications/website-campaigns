import { Http2ServerResponse } from 'http2';
import React from 'react';
import { useEffect, useState } from 'react';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';
import { isMobile } from 'react-device-detect';

/**
 * interface for listing ruby parameters
 */
interface IServiceFeatureRubyParams {
  heading: string;
  mobileMedicallBg?: string;
}
interface Idata {
  editors: number;
  jobs: number;
  clients: number;
  image : string
}

const ServiFeatureRuby  = ({ searchText }: { searchText: string }) => {
  const [data, setData] = useState({ editors: 0, jobs: 0, clients: 0, image : '' });
  let [active, setActive] = useState(1);
  const params: IServiceFeatureRubyParams = {
    heading: 'Medicine and Clinical Researcher !!break!! 分野の英文校正サービスと実績',
    mobileMedicallBg: '/assets/images/mobile-medicin-bg.png',
  };
  const url = new URL(location.href);
  var saParam = url.searchParams.get("sa");
  useEffect(() => {
    if(saParam) { 
      searchText = saParam;
  }
    const getSubData = async () => {
      let resp = await getData(searchText);
      setData(resp);
    };
    getSubData();
  }, [searchText]);

  return (
    <>
      <section
        className="w-full pt-20 pb-26 bg-no-repeat bg-cover md:pt-5 md:pb-10 sm:pt-7 sm:px-4 sm:pb-0 sm:mb-16"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      >
        <div className="container sm:px-0">
          <h2 className="text-center leading-44 mb-5 sm:mb-0 sm:leading-29">
            <div className="font-pb text-3xl sm:text-20 sm:leading-29 sm:block md:text-2xl">
              <MarkDown data={params?.heading}></MarkDown>
            </div>
          </h2>
          <div
            className="hidden sm:block bg-contain bg-no-repeat w-90 h-56.75 mx-auto -mt-8 max-w-full"
            style={{
              backgroundImage: `url(${isMobile ? params.mobileMedicallBg : data.image})`,
            }}
          ></div>

          <div className="bg-white shadow rounded-lg w-full flex mx-auto max-w-2xl py-6 px-18 sm:px-3 sm:py-3 justify-between box-border sm:relative sm:-top-3">
            <div className="inline-flex">
              <span className="font-sb text-lapis-delta opacity-40 text-5xl leading-45 -mt-4 sm:text-20 sm:leading-30 sm:-mt-1.5">
                1
              </span>
              <span className="w-1 inline-block h-14 bg-opal-alpha mr-3.75 ml-1.5"></span>
              <div className="inline-flex flex-col">
                <span className="font-pr text-ruby-alpha text-sm leading-4 mb-0.5 sm:text-xs sm:leading-14 sm:mb-1.5">
                  校正者数
                </span>
                <span className="font-pb text-ruby-alpha text-2xl leading-7 sm:text-x-base sm:leading-18">
                  {data.editors}人
                </span>
              </div>
            </div>

            <div className="inline-flex">
              <span className="font-sb text-lapis-delta opacity-40	 text-5xl leading-45 -mt-4 sm:text-20px sm:leading-30 sm:-mt-1.5">
                2
              </span>
              <span className="w-1 inline-block h-14 bg-jade-alpha mr-3.75 ml-1.5"></span>
              <div className="inline-flex flex-col">
                <span className="font-pr text-ruby-alpha text-sm leading-4 mb-0.5 sm:text-xs sm:leading-14 sm:mb-1.5">
                  校正実績
                </span>
                <span className="font-pb text-ruby-alpha text-2xl leading-7 sm:text-x-base sm:leading-18">
                  {data.jobs}稿
                </span>
              </div>
            </div>
            <div className="inline-flex">
              <span className="font-sb text-lapis-delta opacity-40	text-5xl leading-45 -mt-4 sm:text-20 sm:leading-30 sm:-mt-1.5">
                3
              </span>
              <span className="w-1 inline-block h-14 bg-amber-alpha mr-3.75 ml-1.5"></span>
              <div className="inline-flex flex-col">
                <span className="font-pr text-ruby-alpha text-sm leading-4 mb-0.5 sm:text-xs sm:leading-14 sm:mb-1.5">
                  お客様数
                </span>
                <span className="font-pb text-ruby-alpha text-2xl leading-7 sm:text-x-base sm:leading-18">
                  {data.clients}人
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function getData(input:string) {
  return subjectAPIService.getServiceFeatures(input).then(function (response: any) {
    if(response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.editors) { 
      return {
        editors: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.editors,
        jobs: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.jobs,
        clients: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.clients,
        image : response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.image
      };
    } else {
      return {
        editors: 0,
        jobs: 0,
        clients: 0,
        image : ''
      };
    }
   
  });
}

export default ServiFeatureRuby;
