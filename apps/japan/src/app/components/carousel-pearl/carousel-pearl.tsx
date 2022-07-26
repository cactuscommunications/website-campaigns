import { Http2ServerResponse } from 'http2';
import React from 'react';
var axios = require('axios');
import { useEffect, useState } from 'react';
import { setFlagsFromString } from 'v8';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';
import ModalRuby from '../modal-ruby/modal-ruby'
import { isMobile } from 'react-device-detect';
import { FLAG } from "../../config/flag-mapping";
import pageService from '../../services/renderer/page-service';
const partner = pageService.getPartner();

interface IServiceFeaturePearlParams {
    heading: string;
    subjectLabel: string;
    qualificationLabel: string;
    experienceLabel : string;
    satisfactionLabel : string;
    jobLabel : string;
    searchText  : string;
}

const CarouselPearl = ({ params }: { params: IServiceFeaturePearlParams }) => {
    const chunkSize = isMobile ? 1 : 3;
    let [position, setPosition] = useState(0);
    let [testimonials, setTestimonials] = useState([{}]);
    let [testimonialsChunk, setTestimonialsChunk] = useState([[]]);
    let [title, setTitle] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState();
    const url = new URL(location.href);
    var saParam = url.searchParams.get("sa");
    let viewAll =  (partner == 'JPN' ? '全て見る' : '전체 보기')

    useEffect(() => {
        if (saParam) {
            params.searchText = saParam;
        }
        const getEditorsData = async () => {
            let machineName = '';
            machineName = await getMachineName(!params.searchText ? 'default' : params.searchText);
            let resp = await getData(machineName);
            setTestimonials(resp.data);
            setIndicator(resp.data);
            setTitle(resp.title)
        };
        getEditorsData();
    }, [params.searchText]);
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
    function setModal(index: number) {
        setOpenModal(true);
        setModalData(testimonialsChunk[position][index])
    }
    function getFlag(country: string) {
        // @ts-ignore
        return FLAG[country];
    }
    function prev() {
        setPosition(position - 1);
    }
    function next() {
        setPosition(position + 1);
    }


    return (
        <>
            <section className={"bg-primary py-10" }>
                <div className="container sm:px-5">
                    <h2 className="text-center text-4.5xl font-pb text-ruby-alpha leading-45 sm:text-20 sm:leading-7">
                        {params.heading}<span className="sm:hidden">{partner == "JPN" ? title : ''}</span>
                    </h2>

                    {testimonialsChunk && testimonialsChunk.length > 0 &&
                        <div className="flex relative justify-center mt-10 sm:flex-wrap max-w-[1000px] mx-auto md:max-w-[850px]">
                            {position != testimonialsChunk.length - 1 &&
                                <div onClick={(e) => next()}
                                    className="cursor-pointer w-16 h-16 absolute float-right opacity-100 transition duration-300 ease-in-out  -right-1 transform -translate-y-1/2 top-1/2 bg-cover bg-no-repeat opacity-100 sm:w-12 sm:h-12 md:w-12.5 md:h-12.5 md:-right-14 sm:-right-7"
                                    style={{ backgroundImage: `url(${'assets/images/icons/circle-arrow-right.svg'})`, right: "-4%" }}
                                ></div>}
                            {position != 0 &&
                                <div onClick={(e) => prev()}
                                    className="cursor-pointer w-16 absolute h-16 float-left opacity-100 transition duration-300 ease-in-out  -left-1 transform -translate-y-1/2 top-1/2 bg-cover bg-no-repeat opacity-100 sm:w-12 sm:h-12 md:w-12.5 md:h-12.5 md:-left-14 sm:-left-7"
                                    style={{ backgroundImage: `url(${'assets/images/icons/circle-arrow-left.svg'})`, left: "-4%" }}
                                ></div>}
                            {testimonialsChunk[position].map((trow: any, ti) => (

                                <div
                                    key={ti}
                                    className="float-left pb-1 mb-5 mx-5 sm:mx-1 bg-white shadow rounded flex flex-col md:mx-2 sm:w-70 w-75 xxl:w-87">
                                    <div className="dyna-height-1 flex px-5 pt-5 pb-5 bg-opal-gamma1" style={{ height: "110px" }}>
                                        <div className="w-15 h-15 bg-no-repeat bg-contain relative rounded-full flex-shrink-0"
                                            style={{
                                                backgroundImage: `url(${trow.attributes.image})`
                                            }}>
                                            <div className={
                                                ('flag flag-' + getFlag(trow.attributes.nationality)) +
                                                ' -mr-2.5 absolute bottom-0 right-0 rounded-full '
                                            }
                                            ></div>
                                        </div>
                                        <div className="dyna-height-2 ml-6 my-auto pt-1" style={{ height: "71.0781px" }}>
                                            <h5 className="text-base text-ruby-alpha font-ssb leading-19">{trow.attributes.name}</h5><span
                                                className="text-10 font-ssb text-ruby-alpha/60 inline-block align-text-top leading-14">{trow.attributes.degree}</span>

                                            <p className="text-xs text-ruby-alpha font-ssb pt-0 -mt-0.5">{trow.attributes.nationality}</p>
                                        </div>
                                    </div>
                                    <div className="dyna-height-3 flex bg-white px-5 pt-4 w-full pb-4" style={{ height: "72.25px" }}>
                                        <div className="w-1/3 text-xs text-center font-ssb">
                                            {params?.experienceLabel}
                                            <p className="text-sm font-ssb">{trow.attributes.experience ? trow.attributes.experience : 0} {partner == 'JPN' ?  '年以上' : '년 이상'}</p>
                                        </div>
                                        <div className="w-1/3 text-xs text-center font-ssb">
                                            {params.satisfactionLabel}
                                            <p className="text-sm font-ssb">{trow.attributes.satisfaction_rate ? trow.attributes.satisfaction_rate : 0} </p>
                                        </div>
                                        <div className="w-1/3 text-xs text-center font-ssb">
                                             {params?.jobLabel}
                                            <p className="text-sm font-ssb">{trow.attributes.jobs ? trow.attributes.jobs : 0}</p> </div>
                                    </div>
                                    <div className="text-center text-sm font-ssb py-1 px-2 bg-opal-gamma1">{params.subjectLabel}</div>
                                    <ul className="bg-white dyna-height-4 mb-3 mt-1 px-5 overflow-hidden" style={{ height: "287px" }} >
                                        {trow.attributes.expertise_area.split(',').slice(0, 10).map((area: string) => {
                                            return (
                                                <li className="text-xs flex my-2"><span
                                                    className="w-1.25 h-1.25 inline-block bg-amber-alpha rounded-full mt-1.5 mr-3.2 flex-shrink-0"></span>

                                                    <div className="text-xs font-ssb">
                                                        {area}

                                                    </div>

                                                </li>
                                            )
                                        })}
                                        <span
                                            onClick={() => {
                                                setModal(ti)
                                            }}
                                            className="text-xs text-pearl-beta font-ssb text-underline-hover">
                                            {trow.attributes.expertise_area.length > 10 ? viewAll : ''}
                                        </span>
                                        {openModal && <ModalRuby key={ti} closeModal={setOpenModal} data={modalData} />}

                                    </ul>
                                    <div className="text-center text-sm font-ssb py-1 px-2 bg-opal-gamma1">{params.qualificationLabel}</div>
                                    <ul className="bg-white dyna-height-5 mb-2 mt-1 px-5" style={{ height: "39.5px" }}>
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
    return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five').then(function (response: any) {
        return response.data.data[0]?.attributes.sa_one_five.data[0].attributes.machine_name ? response.data.data[0].attributes.sa_one_five.data[0].attributes.machine_name : '';
    })
}
function getData(input: string) {
    let returnData = { data: [], title: '' }

    return subjectAPIService.getWholeData(input, 'sa_one_five.editors,sa_one_five.social_attributes').then(function (response: any) {
        returnData = {
            data: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.editors?.data ? response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.editors?.data : [],
            title: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.title ?? ''
        }
        if(partner == 'KOR') {
            returnData.title = returnData.title.replace(/エディテージ/g, "").replace(/分野/g, "분야")
          }
        return returnData

    });
}

export default CarouselPearl;
