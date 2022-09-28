import React from 'react';
import { useEffect, useState } from 'react';
import ListingRuby from '../listing-ruby/listing-ruby';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';
import ServiceFeatureRuby from '../service-feature-ruby/service-feature-ruby';
import CarouselRuby from '../carousel-ruby/carousel-ruby';
import { isMobile } from 'react-device-detect';

/**
 * interface for listing ruby parameters
 */
interface ISubjectAreaBannerRubyParams {
  heading: string;
  heading2?: string;
  heading3?: string;
  mobileBackgroundImg?: string;
  backgroundImg?: string;
  searchMessage: string;
  validationMessage: string;
  enterAreaMessage : string;
  search : string;
  placeHolder : string;
  showListing: boolean;
}
interface IserachList {
  name: string;
  searchTitle: string;
  machineName: string
}

const SubjectAreaBannerRuby= ({ params }: { params: ISubjectAreaBannerRubyParams }) => {
  let [active, setActive] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [machineName, setMachineName] = useState('');
  const [saSelected, setSaSelected] = useState(false);
  const [searchList, setSearchList] = useState<IserachList[]>([]);
  const [searchObj, setSearchObj] = useState({ name: '', machineName: '' });
  var url = new URL(location.href);
  var saParam = url.searchParams.get('sa');
  const [loadCounter, setloadCounter] = useState(true);
  const [noDataMessage, setNoDataMessage] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [showNoTextValidation, setShowNoTextValidation] = useState(false);
  const validationReg =    /^[ A-Za-z\/\s\!@#$%^&*():,-_+;><?|.'\-]+$/
  useEffect(() => {
    const getSaData = async () => {
      if (saParam && loadCounter) {
        let resp = await getSearchList(saParam, 'eq');
        setSearchTerm(resp[0]?.name);
        setMachineName(resp[0]?.machineName)
        setloadCounter(false);
        setSaSelected(true)
      }
    }
    getSaData();
    const delayDebounceFn = setTimeout(async (event) => {
      setSaSelected(false)
      setShowValidation(false);
      setShowNoTextValidation(false);
      setNoDataMessage(false);
      if (searchTerm &&searchTerm.length > 0 && !searchTerm.match(validationReg)) {
        setShowValidation(true);
        setSearchList([]);
      }
      if (searchTerm && searchTerm.length >= 3 && !saSelected && searchTerm.match(validationReg)) {
        setSearchList([]);
        setNoDataMessage(false);
        let resp = await getSearchList(searchTerm.toLowerCase().replace(/ /g, '-'), 'contains');
        if (resp.length == 0) {
          setNoDataMessage(true);
        }
        setSearchList(resp);
      }
    }, 30);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
  const handleChange = (text: any) => {
    setSaSelected(true)
    setNoDataMessage(false);
    setSearchList([]);
    setSearchObj(text);
    setSearchTerm(text.name);
  };
  const searchResults = () => {
    // setMachineName();
    if (!searchTerm || searchTerm == '') {
      setShowNoTextValidation(true);
    } else if (!showValidation && !noDataMessage)
      window.location.replace(location.origin + location.pathname + '?sa=' + (searchObj.machineName ? searchObj.machineName : machineName))

  };
  return (
    <>
      <section
        className="pt-18 pb-4 bg-contain bg-right bg-no-repeat min-h-120 sm:py-4"
        style={{
          backgroundImage: `url(${!isMobile ? params.backgroundImg : ''})`,
        }}
      >
        <div className="container">
          <div className="sm:mx-auto sm:w-82">
            <h1 className="text-ruby-alpha text-6xl font-sb leading-64 mb-7.5 sm:mb-5 sm:text-3xl sm:leading-50">
              <MarkDown data={params?.heading}></MarkDown>
              {params?.heading2 && (
                <>
                  <br />
                  <span className="text-white bg-pearl-beta inline-block mt-1.5 py-2.5 sm:pl-2.5 sm:py-0 sm:mt-1 text-4xl">
                    <MarkDown data={params?.heading2}></MarkDown>
                  </span>
                </>
              )}
            </h1>
            {params?.heading3 && (
              <h3 className="text-ruby-alpha text-3xl font-ssb leading-9 mb-4 sm:text-20 sm:leading-6">
                <MarkDown data={params?.heading3}></MarkDown>
              </h3>
            )}
            <div className="flex sm:flex-col">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  className="text-ruby-alpha text-base font-sb leading-5 py-3 pl-12.5 pr-2.5 w-94 h-12.5 rounded-l border border-lapis-delta focus-visible:outline-0 sm:w-full sm:rounded"
                  placeholder={params.placeHolder}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span
                  className="absolute left-4.5 top-1/2 -translate-y-1/2 inline-block w-4.5 h-4.5 bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url(/assets/images/icons/search-gray-icon.svg)`,
                  }}
                ></span>
              </div>

              <div className="w-40 h-12.5 sm:w-full sm:mt-3">
                <button
                  className="btn btn-primary min-w-fit rounded-l-none rounded-r w-full outline-none text-white text-base font-sb leading-5 sm:rounded"
                  onClick={searchResults}
                >
                  {params.search}
                </button>
              </div>
            </div>

            {searchList && searchList.length >= 1 && searchTerm.length >0 && (
              <div className="mt-0.5 relative">
                <div className="absolute top-0 left-0 w-94 max-h-61.2 bg-white overflow-auto custom-scroll rounded-lg shadow z-1">
                  {searchList.map((item) => (
                    <div className="w-full text-left">
                      <a
                        className="cursor-pointer hover:bg-ruby-delta transition ease-in duration-300 block px-7.5 py-2.5 text-ruby-alpha"
                        onClick={(e) => handleChange(item)}
                        href="javascript:;"
                      >
                        {item.searchTitle}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {noDataMessage && (
              <div className="flex  mt-3  sm:flex-col sm:items-center">
                <p className="text-ruby-alpha text-base font-ssb leading-6 sm:text-sm sm:leading-17 sm:mb-3">
                  <MarkDown data={params.searchMessage}></MarkDown>
                </p>
              </div>
            )}
            {showValidation && searchTerm.length > 0 && (
              <div className="flex  mt-3  sm:flex-col sm:items-center">
                <p className="text-ruby-alpha text-base font-ssb leading-5 sm:text-sm sm:leading-17 sm:mb-3" style={{ "color": "red" }}>
                  <MarkDown data={params.validationMessage}></MarkDown>
                </p>
              </div>
            )}
            {showNoTextValidation && searchTerm.length == 0 && (
              <div className="flex  mt-3  sm:flex-col sm:items-center">
                <p className="text-ruby-alpha text-base font-ssb leading-5 sm:text-sm sm:leading-17 sm:mb-3" style={{ "color": "red" }}>
                  <MarkDown data={params.enterAreaMessage}></MarkDown>
                </p>
              </div>
            )}
            <span
              className="hidden w-full h-60 bg-center bg-contain bg-no-repeat sm:block"
              style={{
                backgroundImage: `url(${params.mobileBackgroundImg})`,
              }}
            ></span>
          </div>
        </div>
      </section>
      {params.showListing && <ListingRuby hideHeading={false} searchText={machineName} ignoreUrlParams={false} pageRows={4} pageColumns={4} />}
      {/* {<ServiceFeatureRuby searchText={machineName} />}
      <CarouselRuby  searchText={machineName}/> */}
    </>
  );
};

function getSearchList(input: string, type:string) {
  return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five', type).then(function (response: any) {
    let returnData: { name: string, searchTitle: string, machineName: string }[] = [];
    response.data.data.map((key: any) => {
      let machineName = '';
      switch (key.attributes.type) {
        case 'SA1': 
        case 'SA1.0' : {
          machineName = key.attributes.sa_one.data[0].attributes.machine_name;
          break;
        }
        case 'SA1.5': {
          machineName = key.attributes.sa_one_five.data[0].attributes.machine_name;
          break;
        }
        case 'SA2.0': {
          machineName = key.attributes.machine_name;
          break;
        }
        default: {
          machineName = key.attributes.sa_one.data[0].attributes.machine_name;
          break;
        }
      }
      returnData.push({ name: key.attributes.name, searchTitle: key.attributes.search_title, machineName: machineName });
    });
    return returnData;
  });
}

export default SubjectAreaBannerRuby;
