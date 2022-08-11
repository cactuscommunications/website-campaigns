import React from 'react';
var axios = require('axios');
import { useEffect, useState } from 'react';
import { setFlagsFromString } from 'v8';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';
import ModalPearl from '../modal-pearl/modal-pearl';
import { isMobile } from 'react-device-detect';

/**
 * interface for listing ruby parameters
 */
interface IServiceFeatureRubyParams {
  heading: string;
  textLength: number;
}

const CarouselRuby = ({ searchText }: { searchText: string }) => {
  const chunkSize = isMobile ? 1 : 3;
  let [position, setPosition] = useState(0);
  let [testimonials, setTestimonials] = useState([{}]);
  let [testimonialsChunk, setTestimonialsChunk] = useState([[]]);

  const [openModal, setOpenModal] = useState(false);
  const [readMoreComment, setReadMoreComment] = useState('');
  const [readMoreSubject, setReadMoreSubject] = useState('');

  const params: IServiceFeatureRubyParams = {
    heading: 'お客さまからの声',
    textLength: 100
  };
  const url = new URL(location.href);
  var saParam = url.searchParams.get("sa");
  useEffect(() => {
    if (saParam) {
      searchText = saParam;
    }

    const getTestimonialsData = async () => {
      let machineName = '';
      machineName = await getMachineName(searchText);
      let resp = await getData(machineName);
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
    if (input && input.length > 0) {
      for (let i = 0; i < input.length; i += chunkSize) {
        let ch = input.slice(i, i + chunkSize);
        chunks.push(ch);
      }
    }
    setTestimonialsChunk(chunks);
  }
  function goToIndicator(index: number) {
    setPosition(index);
  }
  function prev() {
    setPosition(position - 1);
  }
  function next() {
    setPosition(position + 1);
  }

  return (
    <>
      <section className="bg-white py-10">
        <div className="container sm:px-5">
          <h2 className="text-center text-4.5xl font-pb text-ruby-alpha leading-45 sm:text-20 sm:leading-7">
            <span className="sm:hidden">{params.heading}</span>
          </h2>
          {testimonialsChunk && testimonialsChunk[position] && (
            <>
              <div className="relative flex justify-center mt-10 max-w-6xl mx-auto sm:flex-wrap">
                {position != testimonialsChunk.length - 1 &&
                  <div onClick={(e) => next()}
                    className="cursor-pointer w-16 h-16 absolute float-right opacity-100 transition duration-300 ease-in-out  -right-1 transform -translate-y-1/2 top-1/2 bg-cover bg-no-repeat opacity-100 sm:w-12 sm:h-12 md:w-12.5 md:h-12.5 md:-right-14 sm:-right-7 sm:hidden"
                    style={{ backgroundImage: `url(${'assets/images/icons/circle-arrow-right.svg'})`, right: "-4%" }}
                  ></div>}
                {position != 0 &&
                  <div onClick={(e) => prev()}
                    className="cursor-pointer w-16 absolute h-16 float-left opacity-100 transition duration-300 ease-in-out  -left-1 transform -translate-y-1/2 top-1/2 bg-cover bg-no-repeat opacity-100 sm:w-12 sm:h-12 md:w-12.5 md:h-12.5 md:-left-14 sm:-left-7  sm:hidden"
                    style={{ backgroundImage: `url(${'assets/images/icons/circle-arrow-left.svg'})`, left: "-4%" }}
                  ></div>}
                {testimonialsChunk[position].map((trow: any, ti) => (
                  <div key={ti} className="w-360px shadow rounded-lg bg-white h-full mx-5">
                    <div className="px-5 pb-5 pt-3 relative bg-pearl-epsilon/50 rounded-t-lg	min-h-57.5 max-h-57.5 md:min-h-[16rem] sm:min-h-fit">
                      <span
                        className="w-17 h-17 bg-no-repeat bg-contain absolute top-2.5 left-3"
                        style={{
                          backgroundImage: `url(${'/assets/images/Shapequote.svg'})`,
                        }}
                      ></span>
                      <p className="text-lg font-ssb text-ruby-alpha relative md:text-base sm:text-base sm:leading-6">
                        {/* {trow.attributes.comment} */}
                        {trow.attributes.comment.length > params.textLength ? trow.attributes.comment.slice(0, params.textLength) : trow.attributes.comment}
                        {<span
                          onClick={() => {
                            setOpenModal(true);
                            setReadMoreComment(trow.attributes.comment);
                            setReadMoreSubject(trow.attributes.subject);
                          }}
                          className="text-pearl-beta font-ssb text-underline-hover">
                          {trow.attributes.comment.length > params.textLength ? "...続きを読む" : ''}
                        </span>}
                      </p>
                    </div>
                    <div className="border-t border-dashed border-ruby-beta px-5 py-4 min-h-[160px] sm:min-h-max flex flex-col" style={{ height: "200px" }}>
                      <div className="flex justify-between">
                        <div className="w-[calc(100%-70px)] mb-4 md:w-[calc(100%-80px)]">
                          <h3 className="text-20 font-sb text-ruby-alpha leading-6 md:text-base sm:text-lg	sm:leading-21">
                            <span className="inline-block mr-1 w-1 h-3.5 bg-amber-alpha"></span> {trow.attributes.user}
                          </h3>
                          <p className="text-sm leading-4 text-ruby-beta font-ssb mt-1 sm:text-13 sm:leading-15">
                            {trow.attributes.designation}
                          </p>
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
                          専門分野
                        </span>
                        <span className="block text-sm font-ssb text-ruby-beta leading-4 sm:text-13">
                          {trow.attributes.subject}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="text-center w-full float-left mt-7">
            {testimonialsChunk.map((card, index) => (
              <span
                key={index}
                onClick={(e) => goToIndicator(index)}
                className={
                  (index !== position ? 'bg-lapis-delta/20' : 'bg-lapis-delta') +
                  ' w-2.5 h-2.5 inline-block rounded-full mx-2 cursor-pointer sm:mt-0 sm:mb-2 '
                }
              ></span>
            ))}
          </div>
          {testimonialsChunk && testimonialsChunk.length == 0 && <div className="text-center w-full float-left mt-7">No Data Available</div>}

        </div>
        <div className='clearfix'></div>
      </section>
      {openModal && <ModalPearl closeModal={setOpenModal} comment={readMoreComment} subject={readMoreSubject} />}
    </>
  );
};
function getMachineName(input: string) {
  return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five').then(function (response: any) {
    return response.data.data[0]?.attributes.sa_one.data[0].attributes.machine_name ? response.data.data[0].attributes.sa_one.data[0].attributes.machine_name : '';
  })
}
function getData(input: string) {
  return subjectAPIService.getWholeData(input, 'sa_one.sa_testimonials').then(function (response: any) {
    return response.data.data[0]?.attributes.sa_one?.data[0]?.attributes.sa_testimonials.data ? response.data.data[0]?.attributes.sa_one?.data[0]?.attributes.sa_testimonials.data : [];
  });
}

export default CarouselRuby;
