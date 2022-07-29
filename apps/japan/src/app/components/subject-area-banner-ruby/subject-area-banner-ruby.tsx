import React from 'react';
import { useEffect, useState } from 'react';
import ListingRuby from '../listing-ruby/listing-ruby';
import MarkDown from '../markdown/markdown';
import subjectAPIService from '../../services/api/subject-api';
import ServiFeatureRuby from '../service-feature-ruby/service-feature-ruby';
import CarouselRuby from '../carousel-ruby/carousel-ruby';

/**
 * interface for listing ruby parameters
 */
interface ISubjectAreaBannerRubyParams {
  heading: string;
  heading2?: string;
  heading3?: string;
  mobileBackgroundImg?: string;
  backgroundImg?: string;
  footer?: string;
}
interface IserachList {
  name: string;
  machineName: string
}

const SubjectAreaBannerRuby: React.FC = () => {
  let [active, setActive] = useState(1);
  const params: ISubjectAreaBannerRubyParams = {
    heading: '英文校正は',
    heading2: '専門分野が命です。',
    heading3: 'どちらの専門分野をご検討ですか？',
    footer: '1300以上の専門分野に対応：すべて表示 !!link!! 「すべて表示」 : https://test.com!!/link!!',
    mobileBackgroundImg: '/assets/images/subject-area-banner-m.jpg',
    backgroundImg: '/assets/images/subject-area-banner.jpg',
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [machineName, setMachineName] = useState('');
  const [searchList, setSearchList] = useState<IserachList[]>([]);
  const [searchObj, setSearchObj] = useState({name:'',machineName : ''});
  var url = new URL(location.href);
var saParam = url.searchParams.get('sa');
  useEffect(() => {
    const delayDebounceFn = setTimeout(async (event) => {
      if (searchTerm.length >= 3) {
        setSearchList([]);
        let resp = await getSearchList(searchTerm.toLowerCase().replace(/ /g, '-'));
        setSearchList(resp);
      }
    }, 30);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
  const handleChange = (text: any) => {
    setSearchList([]);
    setSearchObj(text)
    setSearchTerm(text.name);
  };
  const searchResults = () => {
    // setMachineName();
    window.location.replace(location.origin + '?sa=' + searchObj.machineName)

  };
  return (
    <>
      <section
        className="pt-18 pb-21.25 bg-cover bg-center bg-no-repeat sm:bg-full sm:py-4"
        style={{
          backgroundImage: `url(${params.backgroundImg})`,
        }}
      >
        <div className="container">
          <div className="sm:mx-auto sm:w-82">
            <h1 className="text-ruby-alpha text-6xl font-sb leading-64 mb-7.5 sm:mb-5 sm:text-3xl sm:leading-50">
              <MarkDown data={params?.heading}></MarkDown>
              {params?.heading2 && (
                <>
                  <br />
                  <span className="text-white bg-pearl-beta inline-block mt-1.5 py-2.5 sm:pl-2.5 sm:py-0 sm:mt-1">
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
                  className="text-ruby-alpha text-base font-ssb leading-5 py-3 pl-12.5 pr-2.5 w-94 h-12.5 rounded-l border border-lapis-delta focus-visible:outline-0 sm:w-full sm:rounded"
                  placeholder="Enter text here"
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
                  Show Results
                </button>
              </div>
            </div>

            {searchList.length > 1 && (
              <div className="mt-0.5 relative">
                <div className="absolute top-0 left-0 w-94 max-h-61.2 bg-white overflow-auto custom-scroll rounded-lg shadow z-1">
                  {searchList.map((item) => (
                    <div className="w-full text-left">
                      <a
                        className="cursor-pointer hover:bg-ruby-delta transition ease-in duration-300 block px-7.5 py-2.5 text-black/70"
                        onClick={(e) => handleChange(item)}
                        href="javascript:;"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex  mt-3  sm:flex-col sm:items-center">
              {params?.footer && (
                <p className="text-ruby-alpha text-base font-ssb leading-5 sm:text-sm sm:leading-17 sm:mb-3">
                  <MarkDown data={params?.footer}></MarkDown>
                </p>
              )}
            </div>
            <span
              className="hidden w-full h-60 bg-center bg-contain sm:block"
              style={{
                backgroundImage: `url(${params.mobileBackgroundImg})`,
              }}
            ></span>
          </div>
        </div>
      </section>
      {  <ListingRuby hideHeading={false} searchText={machineName} ignoreUrlParams={false}/>}
      {/* {<ServiFeatureRuby searchText={machineName} />}
      <CarouselRuby  searchText={machineName}/> */}
    </>
  );
};

function getSearchList(serachText: string) {
  return subjectAPIService.getSearchList(serachText).then(function (response: any) {
    let returnData: { name: string, machineName: string }[] = [];
    response.data.data.map((key: any) => {
      returnData.push({ name: key.attributes.name, machineName: key.attributes.machine_name });
    });
    return returnData;
  });
}

export default SubjectAreaBannerRuby;
