import { Http2ServerResponse } from 'http2';
import React from 'react';
var axios = require('axios');
import { useEffect, useState } from 'react';
import { setFlagsFromString } from 'v8';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';

interface IServiceFeaturePearlParams {
    heading: string;
}

const CarouselPearl = ({ searchText }: { searchText: string }) => {
    const chunkSize = 3;
    let [position, setPosition] = useState(0);
    let [testimonials, setTestimonials] = useState([{}]);
    let [testimonialsChunk, setTestimonialsChunk] = useState([[]]);
    const url = new URL(location.href);
var saParam = url.searchParams.get("sa");
    const params: IServiceFeaturePearlParams = {
        heading: 'Medicine and Clinical Researcher',
    };
    useEffect(() => {
        if(saParam) { 
            searchText = saParam;
        }
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
            <section className="mt-10 bg-white py-10">
                <div className="container sm:px-5">
                    <h2 className="text-center text-4.5xl font-pb text-ruby-alpha leading-45 sm:text-20 sm:leading-7">
                        お客さまからの声 <span className="sm:hidden">{params.heading}</span>
                    </h2>

                    {testimonialsChunk && testimonialsChunk.length > 0 &&
                        <div className="flex justify-center mt-10 sm:flex-wrap">
                            {testimonialsChunk[position].map((trow: any, ti) => (

                                <div
                                    className="flex-grow float-left pb-1 mb-5 mx-5 sm:mx-1 bg-white shadow rounded flex flex-col md:mx-2 sm:w-70 w-75 xxl:w-70">
                                    <div className="dyna-height-1 flex px-6 pt-7.5 pb-6.25 bg-opal-gamma1" style={{ height: "129.531px" }}>
                                        <div className="w-15 h-15 bg-no-repeat bg-contain relative rounded-full flex-shrink-0"
                                            style={{
                                                backgroundImage: `url(/assets/${trow.attributes.image})`
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
                                            <p className="text-sm font-ssb">{trow.attributes.satisfaction_rate ? trow.attributes.satisfaction_rate : 0} % </p> Satisfaction Rate</div>

                                        <div className="w-1/3 text-xs text-center font-ssb">
                                            <p className="text-sm font-ssb">{trow.attributes.jobs ? trow.attributes.jobs : 0}</p> Papers Edited </div>
                                    </div>
                                    <div className="text-center text-sm font-ssb py-1 px-2 bg-opal-gamma1">Subjectarea</div>
                                    <ul className="bg-white dyna-height-4 mb-3 mt-1 px-6" style={{ height: "287px" }}>
                                        {trow.attributes.expertise_area.split(',').map((area: string) => {
                                           return (
                                           <li className="text-xs flex my-2"><span
                                                className="w-1.25 h-1.25 inline-block bg-amber-alpha rounded-full mt-1.5 mr-3.2 flex-shrink-0"></span>

                                                <div className="text-xs font-ssb">
                                                    {area}

                                                </div>

                                            </li>
                                           )
                                        })}
                                    </ul>
                                    <div className="text-center text-sm font-ssb py-1 px-2 bg-opal-gamma1">Dgrees</div>
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

function getData(input: string) {
    return subjectAPIService.getServiceFeatures(input).then(function (response: any) {
        return response.data.data[0].attributes.sa_one_five.data[0]?.attributes.editors?.data;
    });
}

export default CarouselPearl;
