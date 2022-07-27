import { Http2ServerResponse } from 'http2';
import React from 'react';
var axios = require('axios');
import { useEffect, useState } from 'react';
import { setFlagsFromString } from 'v8';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';

/**
 * interface for listing ruby parameters
 */
interface IServiceFeatureRubyParams {
  heading: string;
  mobileMedicallBg?: string;
  medicallBg?: string;
}

const CarouselRuby = ({ searchText }: { searchText: string }) => {
  const chunkSize = 3;
  let [position, setPosition] = useState(0);
  let [testimonials, setTestimonials] = useState([{}]);
  let [testimonialsChunk, setTestimonialsChunk] = useState([[]]);
  const params: IServiceFeatureRubyParams = {
    heading: 'Medicine and Clinical Researcher !!break!! 分野の英文校正サービスと実績',
    mobileMedicallBg: '/assets/images/mobile-medicall-bg.jpg',
    medicallBg: '/assets/images/medicine-bg.jpg',
  };
  useEffect(() => {
    const getTestimonialsData = async () => {
      let resp = await getData(searchText);
      setTestimonials(resp);
      setIndicator(resp);
    };
    getTestimonialsData();
  }, [searchText]);
  /**
   * carousal indicators (dots) modifier
   * @author Goutham Reddy
   */
  function setIndicator(input: any) {
    let chunks = [];
    for (let i = 0; i < input.length; i += chunkSize) {
      let ch = input.slice(i, i + chunkSize);
      chunks.push(ch);
    }
    setTestimonialsChunk(chunks);
  }
  function goToIndicator(index: number) {
    setPosition(index);
    setIndicator(testimonials);
  }

  return (
    <>
      <section className="bg-white py-10">
        <div className="container sm:px-5">
          <h2 className="text-center text-4.5xl font-pb text-ruby-alpha leading-45 sm:text-20 sm:leading-7">
            お客さまからの声 <span className="sm:hidden">：Medicine and Clinical Researcher 分野</span>
          </h2>
          {testimonialsChunk && (
            <div className="flex justify-center mt-10 sm:flex-wrap">
              {testimonialsChunk[position].map((trow: any, ti) => (
                <div className="w-360px shadow rounded-lg bg-white h-full mx-5">
                  <div className="px-5 pb-5 pt-3 relative bg-pearl-epsilon/50 rounded-t-lg	min-h-57.5 md:min-h-[16rem] sm:min-h-fit">
                    <span
                      className="w-17 h-17 bg-no-repeat bg-contain absolute top-2.5 left-3"
                      style={{
                        backgroundImage: `url(${'/assets/images/Shapequote.svg'})`,
                      }}
                    ></span>
                    {/* <app-markdown> */}
                    <p className="text-lg font-ssb text-ruby-alpha md:text-base sm:text-base sm:leading-6">
                      {trow.attributes.comment}
                    </p>
                    {/* </app-markdown> */}
                  </div>
                  <div className="border-t border-dashed border-ruby-beta px-5 py-4 min-h-[160px] sm:min-h-max flex flex-col">
                    <div className="flex justify-between">
                      <div className="w-[calc(100%-70px)] mb-4 md:w-[calc(100%-80px)]">
                        <h3 className="text-20 font-sb text-ruby-alpha leading-6 md:text-base sm:text-lg	sm:leading-21">
                          <span className="inline-block mr-2 w-1 h-3.5 bg-emerald-600	"></span> {trow.attributes.user}
                        </h3>
                        {/* <app-markdown> */}

                        <p className="text-sm leading-4 text-ruby-beta font-ssb mt-1 sm:text-13 sm:leading-15">
                          {trow.attributes.designation}
                        </p>
                        {/* </app-markdown> */}
                      </div>
                      <div
                        className="h-12.5 w-12.5 bg-no-repeat bg-contain inline-flex"
                        style={{
                          backgroundImage: `url(${trow.attributes.image})`,
                        }}
                      ></div>
                    </div>
                    <div className="mt-auto sm:mt-3">
                      <span className="block uppercase font-sb text-xs text-ruby-beta leading-4 mb-1 tracking-wider sm:text-11">
                        SUBJECT AREA
                      </span>
                      <span className="block text-sm font-ssb text-ruby-beta leading-4 sm:text-13">
                        {trow.attributes.subject}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        <div className="text-center w-full float-left mt-7">
          {testimonialsChunk.map((card, index) => (
            <span
              onClick={(e) => goToIndicator(index)}
              className={
                (index !== position ? 'bg-lapis-delta' : '') +
                ' w-2.5 h-2.5 inline-block rounded-full mx-2 cursor-pointer sm:mt-0 sm:mb-2 '
              }
            ></span>
          ))}
        </div>
        </div>
        <div className='clearfix'></div>
      </section>
      
    </>
  );
};

function getData(input : string) {
  return subjectAPIService.getServiceFeatures(input).then(function (response: any) {
    return response.data.data[0].attributes.sa_one.data[0].attributes.sa_testimonials.data;
  });
}

export default CarouselRuby;
