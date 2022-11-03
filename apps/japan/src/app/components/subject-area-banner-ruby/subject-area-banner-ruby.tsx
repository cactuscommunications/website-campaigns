import React from 'react';
import { useEffect, useState } from 'react';
import ListingRuby from '../listing-ruby/listing-ruby';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';
import ServiceFeatureRuby from '../service-feature-ruby/service-feature-ruby';
import CarouselRuby from '../carousel-ruby/carousel-ruby';
import { isMobile , isDesktop, isTablet } from 'react-device-detect';
import pageService from '../../services/renderer/page-service';
const partner = pageService.getPartner();
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
  const validationReg =   /^[ A-Za-z\/\s\!@#$%^&*():,-_+;><?|.'\-]+$/
  let backgroundColour = (partner == 'JPN') ? 'bg-pearl-beta' : '';
  let textColor = (partner == 'JPN') ? 'text-white' : 'text-pearl-beta'
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
  let backgroundImage = isDesktop ?  params.backgroundImg : isTablet ? '/assets/images/subject-area-banner-tab.png' : '';
  return (
    <>
      <section
        className="pt-18 pb-4 bg-contain bg-right bg-no-repeat min-h-120 sm:py-4 md:bg-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="container">
          <div className="sm:mx-auto sm:w-82">
            <h1 className="text-ruby-alpha text-6xl font-sb leading-64 mb-7.5 sm:mb-5 sm:text-3xl sm:leading-50">
              <MarkDown data={params?.heading}></MarkDown>
              {params?.heading2 && (
                <>
                  <br />
                  <span className={textColor + " inline-block mt-1.5 py-2.5 sm:pl-2.5 sm:py-0 sm:mt-1 text-4xl " + backgroundColour}>
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
                        {partner == "JPN" ? item.searchTitle : item.searchTitle.replace(/を含む/g, "포함").replace(/分野/g, "분야")}
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
            {isMobile && !isTablet && <span
              className="hidden w-full h-60 bg-center bg-contain bg-no-repeat sm:block"
              style={{
                backgroundImage: `url(${params.mobileBackgroundImg})`,
              }}
            ></span>}
          </div>
        </div>
      </section>
      {params.showListing && <ListingRuby hideHeading={false} searchText={machineName} ignoreUrlParams={false} pageRows={4} pageColumns={4} />}
      {/* {<ServiceFeatureRuby searchText={machineName} />}
      <CarouselRuby  searchText={machineName}/> */}

      <div className="container">
        <div className="pt-11 pb-15">
          <h2 className="text-center text-2xl font-pb sm:text-xl">
            研究のプロがエディテージを選ぶ
            <span className="text-diamond-delta whitespace-nowrap text-4xl pl-2.5">3つの理由</span>
          </h2>
          <div className="mt-9 sm:mt-7.5 flex justify-center sm:items-center sm:flex-col">
            <a href="" className="w-80 border-2 border-pearl-alpha p-5 sm:mb-6 relative before:absolute before:w-2.5 before:h-full before:content-[''] after:content-[''] before:bg-pearl-alpha before:-right-2.5 before:top-2.5 after:h-2.5 after:absolute after:w-full after:left-2.5 after:-bottom-2.5 after:bg-pearl-alpha">
              <div className="font-pb text-2xl text-pearl-alpha text-center leading-8">
                <span>
                  圧倒的な
                  <br />
                  専門分野対応数
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-base text-ruby-alpha leading-22 font-pr">
                1300の専門分野を大きく20カテゴリーに分割。
                <span className="text-diamond-delta">
                  最適なネイティブ校正者がしっかり割り当てられているかをそれぞれの分野の責任者が監視しています。 
                </span>
              </p>
              <br />
              <div className="absolute bottom-6 -translate-x-1/2 left-1/2">
                <span className="w-7 h-5 inline-block bg-no-repeat bg-contain" style={{ backgroundImage: "url(/assets/images/icons/angle-down.svg)" }}></span>
              </div>
            </a>
            <a href="" className="w-80 border-2 border-pearl-alpha p-5 ml-8 sm:ml-0 sm:mb-6 relative before:absolute before:content-[''] after:content-[''] before:w-2.5 before:h-full before:bg-pearl-alpha before:-right-2.5 before:top-2.5 after:h-2.5 after:absolute after:w-full after:left-2.5 after:-bottom-2.5 after:bg-pearl-alpha">
              <div className="font-pb text-2xl text-pearl-alpha text-center leading-8">
                <span>
                  充実の
                  <br />
                  アフターサービス
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-base text-diamond-delta leading-22 font-pr">
                英文校正証明書やフォーマット調整はもちろん無料
                <span className="text-ruby-alpha">
                  。校正納品後も、あなたの論文の受理を目指し全力でサポートします。
                </span>
              </p>
              <br />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
                <span className="w-7 h-5 inline-block bg-no-repeat bg-contain" style={{ backgroundImage: "url(/assets/images/icons/angle-down.svg)" }}></span>
              </div>
            </a>
            <a href="" className="w-80 border-2 border-pearl-alpha p-5 ml-8 sm:ml-0 relative before:absolute before:content-[''] after:content-[''] before:w-2.5 before:h-full before:bg-pearl-alpha before:-right-2.5 before:top-2.5 after:h-2.5 after:absolute after:w-full after:left-2.5 after:-bottom-2.5 after:bg-pearl-alpha">
              <div className="font-pb text-2xl text-pearl-alpha text-center leading-8">
                <span>
                  高品質・スピード
                  <br />
                  最短8.5時間で当日納品
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-base text-ruby-alpha sm:pb-6 leading-22 font-pr">
                品質も納期も満足保証付きで安心。
                <span className="text-diamond-delta">
                  スピードだけでなく、品質も保証します。
                </span>
              </p>
              <br />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
                <span className="w-7 h-5 inline-block bg-no-repeat bg-contain" style={{ backgroundImage: "url(/assets/images/icons/angle-down.svg)" }}></span>
              </div>
            </a>
          </div>
        </div>
      </div>
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
