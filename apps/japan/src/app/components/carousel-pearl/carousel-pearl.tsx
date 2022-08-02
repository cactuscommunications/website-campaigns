import { Http2ServerResponse } from 'http2';
import React from 'react';
var axios = require('axios');
import { useEffect, useState } from 'react';
import { setFlagsFromString } from 'v8';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';
import ModalRuby from '../modal-ruby/modal-ruby'
import { isMobile } from 'react-device-detect';

interface IServiceFeaturePearlParams {
  heading: string;
  subjectLabel: string;
  qualificationLabel: string;
}

const CarouselPearl = ({ searchText }: { searchText: string }) => {
    const chunkSize = isMobile ? 1 : 3;
    let [position, setPosition] = useState(0);
    let [testimonials, setTestimonials] = useState([{}]);
    let [testimonialsChunk, setTestimonialsChunk] = useState([[]]);
    let [title, setTitle] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const url = new URL(location.href);
    var saParam = url.searchParams.get("sa");
    const params: IServiceFeaturePearlParams = {
      heading: 'Medicine and Clinical Researcher',
      subjectLabel: 'Subject Area',
      qualificationLabel: 'Degree'
    };
    useEffect(() => {
        if (saParam) {
            searchText = saParam;
        }
        const getEditorsData = async () => {
            let machineName = '';
              machineName = await getMachineName(searchText);
            let resp = await getData(searchText);
            setTestimonials(resp.data);
            setIndicator(resp.data);
            setTitle (resp.title)
        };
        getEditorsData();
    }, [searchText]);
    /**
     * carousal indicators (dots) modifier
     * @author Goutham Reddy
     */
  function setIndicator(input: any) {
        if (input && input.length > 0) {
            let chunks = [];
            for (let i = 0; i < input.length; i += chunkSize) {
                let ch = input.slice(i, i + chunkSize);
                chunks.push(ch);
            }
            setTestimonialsChunk(chunks);
        } else {
            setTestimonialsChunk([]);
        }

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
                        お客さまからの声<span className="sm:hidden">{title}</span>
                    </h2>

                    {testimonialsChunk && testimonialsChunk.length > 0 &&
                        <div className="flex justify-center mt-10 sm:flex-wrap">
                            {testimonialsChunk[position].map((trow: any, ti) => (

                                <div
                                  key={ti}
                                  className="flex-grow float-left pb-1 mb-5 mx-5 sm:mx-1 bg-white shadow rounded flex flex-col md:mx-2 sm:w-70 w-75 xxl:w-70">
                                    <div className="dyna-height-1 flex px-6 pt-7.5 pb-6.25 bg-opal-gamma1" style={{ height: "129.531px" }}>
                                        <div className="w-15 h-15 bg-no-repeat bg-contain relative rounded-full flex-shrink-0"
                                            style={{
                                                backgroundImage: `url(${trow.attributes.image})`
                                            }}>

                                            <div className="-mr-2.5 absolute bottom-0 flag flag-us right-0 rounded-full"></div>

                                        </div>
                                        <div className="dyna-height-2 ml-6 my-auto pt-1" style={{ height: "71.0781px" }}>
                                            <h5 className="text-base text-ruby-alpha font-ssb leading-19">{trow.attributes.name}</h5><span
                                                className="text-10 font-ssb text-ruby-alpha/60 inline-block align-text-top leading-14">{trow.attributes.degree}</span>

                                            <p className="text-xs text-ruby-alpha font-ssb pt-0 -mt-0.5">{trow.attributes.nationality}</p>
                                        </div>
                                    </div>
                                    <div className="dyna-height-3 flex bg-white px-6 pt-4 inline-block w-full pb-4" style={{ height: "72.25px" }}>
                                        <div className="w-1/3 text-xs text-center font-ssb">
                                            <p className="text-sm font-ssb">{trow.attributes.experience ? trow.attributes.experience : 0} years</p>
                                            Experience </div>
                                        <div className="w-1/3  text-xs text-center font-ssb">
                                            <p className="text-sm font-ssb">{trow.attributes.satisfaction_rate ? trow.attributes.satisfaction_rate : 0} </p> Satisfaction Rate</div>

                                        <div className="w-1/3 text-xs text-center font-ssb">
                                            <p className="text-sm font-ssb">{trow.attributes.jobs ? trow.attributes.jobs : 0}</p> Papers Edited </div>
                                    </div>
                                <div className="text-center text-sm font-ssb py-1 px-2 bg-opal-gamma1">{ params.subjectLabel }</div>
                                    <ul className="bg-white dyna-height-4 mb-3 mt-1 px-6 overflow-hidden" style={{ height: "287px" }} >
                                        {trow.attributes.expertise_area.split(',').slice(0,10).map((area: string) => {
                                            return (
                                                <li className="text-xs flex my-2"><span
                                                    className="w-1.25 h-1.25 inline-block bg-amber-alpha rounded-full mt-1.5 mr-3.2 flex-shrink-0"></span>

                                                    <div className="text-xs font-ssb">
                                                        {area}

                                                    </div>

                                                </li>
                                            )
                                        })}
                        {<span
                        onClick={() => {
                          setOpenModal(true);
                        }}
                        className="text-xs text-pearl-beta font-ssb text-underline-hover">
                        {trow.attributes.expertise_area.length > 10? "read more" : ''}
                      </span>}
                                        {openModal && <ModalRuby closeModal={setOpenModal} data = {trow} />}

                                    </ul>
                                    <div className="text-center text-sm font-ssb py-1 px-2 bg-opal-gamma1">{ params.qualificationLabel }</div>
                                    <ul className="bg-white dyna-height-5 mb-3 mt-1 px-6" style={{ height: "39.5px" }}>
                                        <li className="text-xs flex my-2"><span
                                            className="w-1.25 h-1.25 inline-block bg-amber-alpha rounded-full mt-1.5 mr-3.2 flex-shrink-0"></span>
                                            <div className="text-xs font-ssb">{trow.attributes.degree}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    }
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

        </>
    );
};
function getMachineName(input: string) {
    const query = '[$eq]=' + input;
    return subjectAPIService.getSearchList(query).then(function (response: any) {
      return response.data.data[0].attributes.sa_one_five.data[0].attributes.machine_name ? response.data.data[0].attributes.sa_one_five.data[0].attributes.machine_name : '';
    })
  }
function getData(input: string) {
    let returnData = { data: [], title: '' }
    
    return subjectAPIService.getServiceFeatures(input).then(function (response: any) {
        returnData = {
            data: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.editors?.data ? response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.editors?.data : [],
            title : response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.search_title ? response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.search_title : ''
        }
    return returnData

    });
}

export default CarouselPearl;
