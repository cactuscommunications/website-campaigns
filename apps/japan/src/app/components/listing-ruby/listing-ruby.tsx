import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '../pagination/pagination';
import subjectAPIService from '../../services/api/subject-api';
import MarkDown from '../markdown/markdown';
import { isMobile } from 'react-device-detect';

// import { useNavigate } from "react-router-dom";

/**
 * interface for listing ruby parameters
 */
export interface IListingRubyParams {
  heading: string
  pagination: boolean;
  mobilePageSize: number;
  pageNumber: number;
  pageIcon: string[];
  subjects: ISubjects[];
  link?: string;
  subHeading?: string;
  showSearch ? : boolean,
  hideHeading: boolean, 
  ignoreUrlParams: boolean,
  pageRows: number, 
  pageColumns: number
}
interface ISubjects {
  content: String;
  machineName: string;
}
interface ISubjectList {
  subjects: ISubjects[];
  pageCount: number;
}
let startIndex = 0;
let endIndex: number;
let chunkedArray: ISubjects[][];
let mobileRows = 1;
let pages = 1;
const ListingRuby = ({ params , searchText}: { params: IListingRubyParams, searchText : string }) => {
  // const navigator = useNavigate();
  let [searchFilter, setSearchFilter] = useState('');
  const [subjects, setSubjects] = useState([{}]);
  let [active, setActive] = useState(1);
  let [page, setPage] = useState(1);
  let [pageCount, setPageCount] = useState(1);
  let [pageSize, setpageSize] = useState(1);
  let [total, setPageTotal] = useState(1);
  let [currentPage, setCurrentPage] = useState(1);
  let [searchTitle, setSearchTitle] = useState('');
  const url = new URL(location.href);
  let searchInput;
  var saParam = url.searchParams.get("sa");
  useEffect(() => {
    if (saParam && !params.ignoreUrlParams) {
      searchText = saParam;
    }
    const getSubData = async () => {
      const { machineNameTop, machineNameBottom, searchTitle, machineType } = await getMachineName(searchText);
      // setSubjects([{}]);
      setSearchTitle(searchTitle);
      const machineName = params.ignoreUrlParams ? machineNameBottom : machineNameTop;
      let subData = await getSubjectData(machineName, currentPage, isMobile ? params.pageColumns : params.pageRows * params.pageColumns, params.ignoreUrlParams ? 'sa_one' : machineType, searchFilter);
      setSubjects(subData.subjects);
      setPage(subData.pageObj.page);
      setPageCount(subData.pageObj.pageCount);
      setpageSize(subData.pageObj.pageSize);
      setPageTotal(subData.pageObj.total);
      getPageDetails(subData.subjects, params.pageNumber, isMobile ? params.pageColumns : params.pageRows * params.pageColumns);
    };
    getSubData();
  }, [searchText, currentPage, searchFilter]);
  const pageChanged = (num: number) => {
    setCurrentPage(num);
  };
  const selectSubject = (subject: ISubjects) => {
    if (subject.machineName === saParam)
      return;

    window.location.replace(location.origin + location.pathname + '?sa=' + subject.machineName)

  }
  return (
    <>
      <section>
        <div className='container'>
          <div className='pt-32 pb-16 px-0 sm:pb-0 sm:pt-42.5 bg-cover bg-center bg-[size:150%] sm:bg-[size:360%]' style={{backgroundImage: `url(${'/assets/images/bannerbooks.png'})`}}>
              <div className='p-5 bg-white relative'>
                  <div className='text-center'>
                      <p className='text-xl md:text-sm sm:text-sm'>創業20年で、世界80万人のお客様、200万稿の校正実績</p>
                      <div className='text-42 font-black leading-60 md:text-3xl sm:text-2xl sm:mb-4.8'>研究者が薦める英文校正 <br />エディテージ</div>
                      <div className='text-lg font-bold mb-6 md:text-base sm:text-sm'>初めてご利用いただく方の
                          <span className='text-garnet-omega sm:block'>約60％が、お客様、所属研究機関からの推薦です。
                              <sup className='text-black'>*1</sup>
                          </span>
                          <div className='hidden mt-2.5 text-xs font-normal text-right sm:block'>*1 弊社調べ（2022年1月）</div>
                      </div>
                      <span className='block text-lg font-bold text-pearl-alpha md:text-sm sm:text-base'>Editageのプロフェッショナルサービス</span>
                  </div>
                  <div className='flex justify-center items-center'>
                      <a href='#' className='bg-gradient-to-b from-indigo-500 to-indigo-900 mx-1.5 mt-3 font-bold btn btn-primary h-14 md:h-11 md:text-xs md:min-w-45 md:leading-44 sm:min-w-max sm:h-fit sm:py-2.5 sm:px-6 sm:text-xs sm:mx-1'>英文校正</a>
                      <a href='#' className='bg-gradient-to-b from-indigo-500 to-indigo-900 mx-1.5 mt-3 font-bold btn btn-primary h-14 md:h-11 md:text-xs md:min-w-45 md:leading-44 sm:min-w-max sm:h-fit sm:py-2.5 sm:px-6 sm:text-xs sm:mx-1 relative'>論文翻訳 <span className='absolute w-5 h-5 right-8 inset-y-0 m-auto inline-block bg-no-repeat md:w-4 md:h-4 md:bg-cover sm:w-3 sm:h-3 sm:bg-cover sm:right-2' style={{backgroundImage: `url(${'/assets/images/icons/button-icon.svg'})`}}></span></a>
                      <a href='#' className='bg-gradient-to-b from-indigo-500 to-indigo-900 mx-1.5 mt-3 font-bold btn btn-primary h-14 md:h-11 md:text-xs md:min-w-45 md:leading-44 sm:min-w-max sm:h-fit sm:py-2.5 sm:px-6 sm:text-xs sm:mx-1 relative'>投稿支援 <span className='absolute w-5 h-5 right-8 inset-y-0 m-auto inline-block bg-no-repeat md:w-4 md:h-4 md:bg-cover sm:w-3 sm:h-3 sm:bg-cover sm:right-2' style={{backgroundImage: `url(${'/assets/images/icons/button-icon.svg'})`}}></span></a>
                  </div>
                  <div className='text-center mt-12 md:mt-6 sm:mt-5'>
                      <a href="https://app.editage.jp/order/ncf" target='_blank' className='relative text-white bg-gradient-to-b from-emerald-600 to-emerald-800 text-lg font-bold rounded-lg py-4 px-16 hover:text-white hover:shadow-xl hover:shadow-emerald-200/40 md:h-11 md:text-xs md:leading-44 md:py-0 sm:max-w-full sm:py-2 sm:px-10 sm:text-sm'>
                          自動簡易見積もり・ご注文 
                          <span className='absolute right-4 inset-y-0 m-auto w-3.5 h-3.5 inline-block bg-no-repeat' style={{backgroundImage: `url(${'/assets/images/icons/double-rightarrow-white.svg'})`}}></span>
                      </a>
                  </div>
                  <div className='mt-5 text-xs text-right sm:hidden'>*1 弊社調べ（2022年1月）</div>
              </div>
            </div>
        </div>
      </section>
      <section className={(params.hideHeading ? 'bg-pearl-zeta' : 'bg-primary') + ' pt-8 pb-10 '}  >
        <div className="container">

          <div className='max-w-[900px] mx-auto'>
            {!params.hideHeading &&
              <React.Fragment>
                {searchTitle &&
                  <h2 className="mb-8 sm:text-xxl sm:leading-8 sm:mb-4 text-center">
                    <span className="text-pearl-beta"><MarkDown data={searchTitle.split('を含む')[0]}></MarkDown></span>
                    <MarkDown data={searchTitle.split('を含む')[1] ? 'を含む' : ''}></MarkDown>
                    <MarkDown data={((searchTitle && searchTitle.split('を含む')[1]) ? searchTitle.split('を含む')[1] : '') + 'では以下の専門分野に対応しています。'}></MarkDown>
                  </h2>}
                {!searchTitle &&
                  <h2 className="mb-8 sm:text-xxl sm:leading-8 sm:mb-4 text-center">
                    <MarkDown data={(params?.heading) + 'では以下の専門分野に対応しています。'}></MarkDown>
                  </h2>
                }
                {params?.subHeading && <p className="text-center mb-8">{params?.subHeading}</p>}
              </React.Fragment>
            }
          </div>

          <div
            className='bg-white px-16 rounded-lg  py-7.5 max-w-[1100px] mx-auto sm:text-center sm:px-6'>
            {params.showSearch && <div key="searchlist" className="flex justify-center sm:flex-col">

              {params.showSearch && <div className="relative">
                <input
                  type="text"
                  value={searchInput}
                  className="text-ruby-alpha text-base font-sb leading-5 py-3 pl-12.5 pr-2.5 w-94 h-12.5 rounded-l border border-lapis-delta focus-visible:outline-0 sm:w-full sm:rounded sm:text-xs sm:pl-10"
                  placeholder="キーワードを英語で入力してください"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <span
                  className="absolute left-4.5 top-1/2 -translate-y-1/2 inline-block w-4.5 h-4.5 bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url(/assets/images/icons/search-gray-icon.svg)`,
                  }}
                ></span>
              </div> }
            </div>}
            <div className="flex justify-center">

              {subjects.length > 0 && chunkedArray?.map((row: ISubjects[], i) => (
                <div key={i} className="w-1/4 sm:w-full float-left">
                  <ul className="mt-2">
                    {row.map((item: ISubjects, index) => (
                      <>
                        <a
                          className={item.machineName === saParam ? 'cursor-not-allowed' : 'cursor-pointer'}
                          key={index}
                          onClick={(e) => selectSubject(item)}>
                          <li className="text-base leading-6 font-ssb px-2 pb-3 pt-3 sm:pt-1 sm:pb-1">{item.content}</li>
                        </a>
                        <br />
                      </>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {subjects.length == 0 && <div className="flex justify-center">No Data Available</div>}
            <div className="clearfix"></div>
            {subjects.length > 0 && <Pagination
              triggerPageClick={pageChanged}
              pageSize={pageSize}
              currentPage={page}
              itemsCount={total}
              pageUrl={''}
              icon={params?.pageIcon}
            />}
          </div>
        </div>


      </section>
    </>
  );


  /**
   * Get details of records to displayed on the currentPage
   * @param currentPage currentPage
   */
  function getPageDetails(subjects: ISubjects[], currentPage: number, pageSize: number) {
    startIndex = (currentPage - 1) * pageSize;
    endIndex = Math.min(startIndex + pageSize - 1, subjects.length - 1);
    let items = subjects.slice(startIndex, endIndex + 1);
    chunkedArray = createChunks(items);
  }
  function getMachineName(input: string) {
    let returnData = {
      machineNameTop: '',
      machineNameBottom: '',
      machineType: '',
      searchTitle: ''
    }
    if (!input) {
      return returnData;
    }
    const query = '[$eq]=' + input;
    return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five').then(function (response: any) {
      returnData.machineNameBottom = response.data.data[0]?.attributes.sa_one.data[0].attributes.machine_name ? response.data.data[0]?.attributes.sa_one.data[0].attributes.machine_name : '';
      returnData.searchTitle = response.data.data[0]?.attributes.search_title ? response.data.data[0]?.attributes.search_title : '';
      switch (response.data.data[0]?.attributes.type) {
        case 'SA1':
        case 'SA1.0': {
          returnData.machineNameTop = response.data.data[0]?.attributes.sa_one.data[0].attributes.machine_name;
          returnData.machineType = 'sa_one';
          break;
        }
        case 'SA1.5': {
          returnData.machineNameTop = response.data.data[0]?.attributes.sa_one_five.data[0].attributes.machine_name;
          returnData.machineType = 'sa_one_five';
          break;
        }
        case 'SA2.0': {
          returnData.machineNameTop = response.data.data[0]?.attributes.sa_one_five.data[0].attributes.machine_name;
          returnData.machineType = 'sa_one_five';
          break;
        }
        default: {
          returnData.machineNameTop = response.data.data[0]?.attributes.sa_one.data[0].attributes.machine_name;
          returnData.machineType = 'sa_one';
          break;
        }
      }
      return returnData;
    });

  }
  function getSubjectData(input: string, page: number, pageSize: number, machineType: string, searchFiletr: string) {
    return subjectAPIService.getSubjectsList(input, page, pageSize, machineType, searchFiletr).then(function (response: any) {
      let returnData: ISubjects[] = [];
      let responseData = response.data.data;
      responseData.map((key: any) => {
        if (key?.attributes)
          returnData.push({ content: key.attributes.name, machineName: key.attributes.machine_name });
      });
      return {
        subjects: returnData,
        pageObj: response.data.meta.pagination,
      };
    });
  }

  /**
   * Get the array chunks which we need to display on a particular page
   * @param listItems items within start and endINdex
   */
  function createChunks(listItems: any) {
    let index = 0;
    const chunkSize = params.pageRows;
    const tempArray = [];
    for (index = 0; index < listItems.length; index += chunkSize) {
      const chunk = listItems.slice(index, index + chunkSize);
      tempArray.push(chunk);
    }
    return tempArray;
  }

  function setSearchInput(value:string) {
    if(value.length >= 3 || value == '')
    setSearchFilter(value)
  }
}
export default ListingRuby;
