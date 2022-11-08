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
  const validationReg =    /^[ A-Za-z\/\s\!@#$%^&*():,-_+;><?|.'\-]+$/
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
      <section className="bg-ruby-delta">
        <div className="container">
            <div className="wrapper pt-10 pb-14 sm:py-4">
              <div className="sm:hidden">
               <h2 className="text-center text-4xl font-sb text-ruby-alpha leading-56">
                <span className="text-diamond-delta">「エディテージ」</span>
                が研究のプロに選ばれる
                <span className="text-diamond-delta">３</span>
                つの理由
              </h2>
              </div>
              <div className="mt-14 flex sm:block sm:align-middle ml-24 sm:ml-0 sm:mt-0">
                <span className="w-56 h-56 sm:block bg-no-repeat sm:ml-25 md:bg-contain" style={{ backgroundImage: "url(/assets/images/puzzels.png)" }}></span>
                <div className="ml-9 sm:ml-0 sm:-mt-8">
                    <h3 className="text-3xl text-ruby-alpha font-sb leading-45 sm:text-2xl px-3">01
                    <span className="inline-block ml-1 text-3xl text-ruby-alpha font-sb leading-45 sm:text-2xl sm:mt-4">圧倒的な専門分野対応数・的確なマッチング</span>
                    </h3>
                  <div className="px-7">
                   <ul className="mt-10 ml-6 sm:mt-4 sm:ml-0 leading-34 list-['・'] sm:leading-22">
                    <li className="text-xl font-pb sm:text-base text-ruby-alpha">
                      校正者の
                      <span className="text-diamond-delta">過去の実績</span>
                       と 
                      <span className="text-diamond-delta">専門分野 </span>
                       を確認して論文を割り当て
                    </li>
                    <li className="text-xl font-pb sm:text-base text-ruby-alpha">
                      校正者全員が 
                      <span className="text-diamond-delta">欧米を中心とする英語圏ネイティブ</span>
                    </li>
                    <li className="text-xl font-pb sm:text-base text-ruby-alpha">
                      <span className="text-diamond-delta">博士号取得者、医師、BELS </span>
                      認定校正者多数
                    </li>
                  </ul>
                  <ul className="hidden sm:list-['・'] sm:block">
                      <li className="text-xl font-pb sm:text-base text-ruby-alpha">
                      必ず 
                      <span className="text-diamond-delta">2段階以上のチェック</span>
                      、 どんなにベテランでも一人では終わらせません。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex justify-center sm:flex-col sm:items-center text-neutral-700 leading-30 font-pr">
                <div className="w-45 px-3 pt-2.5 pb-5.5 bg-white sm:mb-5 sm:w-60">
                  <p className="text-base font-sb">医学・医療分野</p>
                  <p className="text-base font-pr">
                  専門分野：220+
                  <br />
                  専門家：800名+
                  <br />
                  470,000稿以上の実績
                  </p>
                </div>
                <div className="w-45 px-3 pt-2.5 pb-5.5 bg-white ml-5 sm:ml-0 sm:mb-5 sm:w-60">
                  <p className="text-base font-sb">生命科学分野 </p>
                  <p className="text-base font-pr">
                   専門分野：100+
                  <br />
                   専門家：800名+
                   <br />
                  280,000稿以上の実績
                  </p>
                </div>
                <div className="w-45 px-3 pt-2.5 pb-5.5 bg-white ml-5 sm:ml-0 sm:mb-5 sm:w-60">
                  <p className="text-base font-sb">物理化学・工学分野</p>
                  <p className="text-base font-pr">
                    専門分野：400+
                  <br />
                   専門家：1000名+
                   <br />
                  420,000稿以上の実績
                  </p>
                </div>
                <div className="w-45 px-3 pt-2.5 pb-5.5 bg-white ml-5 sm:ml-0 sm:mb-5 sm:w-60">
                  <p className="text-base font-sb">人文社会学分野</p>
                  <p className="text-base font-pr">
                    専門分野：600+
                    <br />
                    専門家：800名+
                    <br />
                   300,000稿以上の実績
                  </p>
                </div>
                <div className="w-45 px-3 pt-2.5 pb-5.5 bg-white ml-5 sm:ml-0 sm:w-60">
                  <p className="text-base font-sb font-pr">ビジネス・経済分野</p>
                  <p className="text-base">
                    専門分野：150+
                    <br />
                    専門家：300名+
                    <br />
                    75000稿以上の実績
                  </p>
                </div>
              </div>
                <p className="mt-6 leading-7 sm:mt-5 inline-block bg-pearl-alpha px-6.5 py-5 mr-28 float-right md:mr-0 sm:mr-11 text-center text-base font-pb text-white ml-5">
                  専門分野を確認する
                 <span className="ml-10 top-1 border-ruby-delta border-r border-b inline-block p-0.5 -rotate-45 sm:border-b-2 sm:border-r-2"></span>
                 <span className="border-ruby-delta border-r border-b inline-block p-0.5 -rotate-45 sm:border-b-2 sm:border-r-2"></span>
               </p>
            </div>
        </div>
      </section>
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
