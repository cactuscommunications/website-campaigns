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
      <section className='bg-primary pb-10 pt-12 sm:pt-9 sm:pb-7'>
        <div className='container'>
            <div className='font-sb mb-7 text-4xl text-center leading-50 md:text-3xl sm:text-2xl sm:leading-9 sm:text-left sm:mb-3'>ニーズに合わせた3種類の英文校正支援サービス</div>
            <p className='font-sb text-base'>
                エディテージの校正レベルは３段階 。必要に応じて一番最適なものをお選びください。
                <span className='block sm:inline'>付属する無料サービスや、追加できるオプション なども変わります。</span>
            </p>
            <div className='flex items-end justify-between sm:flex-col'>
                <div className='w-4/12 sm:w-full'>
                    <p className='text-xl font-sb mb-5 md:text-base sm:text-base sm:text-white sm:bg-pearl-alpha sm:py-2.5 sm:px-3 sm:mb-2 sm:mt-7'>スタンダード英文校正</p>
                    <p className='relative text-white bg-pearl-alpha w-10/12 flex items-center justify-center px-5 py-2.5 mb-3 text-base leading-6 font-sb md:text-sm sm:text-black sm:bg-inherit sm:w-full sm:h-auto sm:p-0 sm:justify-start'>
                        語彙・文法をネイティブ校正者2名がチェック
                        <span className='absolute w-5 h-full border-[36px] border-l-[20px] border-solid border-transparent border-l-pearl-alpha right-[-56px] sm:hidden'></span>
                    </p>
                    <a className='relative text-white bg-garnet-mu text-center rounded w-96 p-2.5 mt-7 text-lg font-sb md:text-sm sm:mt-6 sm:w-full sm:mb-2.5'>
                        スタンダード英文校正の詳細
                      <span className='absolute w-5 h-5 right-5 inset-y-0 m-auto inline-block bg-no-repeat md:w-4 md:h-4 md:bg-cover sm:w-3 sm:h-3 sm:bg-cover sm:right-3' style={{backgroundImage: `url(${'/assets/images/icons/button-icon.svg'})`}}></span>
                    </a>
                </div>
                <div className='w-4/12 sm:w-full'>
                    <p className='text-xl font-sb mb-5 md:text-base sm:text-base sm:text-white sm:bg-pearl-alpha sm:py-2.5 sm:px-3 sm:mb-2 sm:mt-7'>スタンダード英文校正</p>
                    <p className='relative text-white bg-pearl-alpha w-10/12 flex items-center justify-center px-5 py-2.5 mb-3 text-base font-sb md:text-sm sm:font-normal sm:text-black sm:bg-inherit sm:w-full sm:h-auto sm:p-0 sm:justify-start'>
                        段落レベルの論理構造まで見直し、 論旨をより明確に伝える
                        <span className='absolute w-5 h-full border-[36px] border-l-[20px] border-solid border-transparent border-l-pearl-alpha right-[-56px] sm:hidden'></span>
                    </p>
                    <p className='relative text-black bg-white w-10/12 h-16 flex items-center justify-center px-5 py-2.5 mb-3 border border-pearl-alpha text-base md:text-sm sm:text-black sm:bg-inherit sm:w-full sm:h-auto sm:p-0 sm:justify-start sm:border-0 sm:font-sb sm:mt-8 sm:font-sb'>
                        語彙・文法をネイティブ校正者2名がチェック
                        <span className='hidden sm:inline-block absolute text-2xl inset-x-0 top-0 -mt-10 m-auto w-3 h-3 '>+</span>
                        <span className='absolute w-5 h-full border-[33px] border-l-[20px] border-solid border-transparent border-l-white right-[-53px] z-10 sm:hidden'></span>
                        <span className='absolute w-5 h-full border-[33px] border-l-[20px] border-solid border-transparent border-l-pearl-alpha right-[-54px] sm:hidden'></span>
                    </p>
                    <a className='relative text-white bg-garnet-mu text-center rounded w-96 p-2.5 mt-7 text-lg font-sb md:text-sm sm:mt-6 sm:w-full sm:mb-2.5'>
                        プレミアム英文校正の詳細
                        <span className='absolute w-5 h-5 right-5 inset-y-0 m-auto inline-block bg-no-repeat md:w-4 md:h-4 md:bg-cover sm:w-3 sm:h-3 sm:bg-cover sm:right-3' style={{backgroundImage: `url(${'/assets/images/icons/button-icon.svg'})`}}></span>
                    </a>
                </div>
                <div className='w-4/12 sm:w-full'>
                    <p className='text-xl font-sb mb-5 md:text-base sm:text-base sm:text-white sm:bg-pearl-alpha sm:py-2.5 sm:px-3 sm:mb-2 sm:mt-7'>スタンダード英文校正</p>
                    <p className='relative text-white bg-pearl-alpha w-10/12 flex items-center justify-center px-5 py-2.5 mb-3 text-base font-sb md:text-sm sm:text-black sm:font-normal sm:bg-inherit sm:w-full sm:h-auto sm:p-0 sm:justify-start'>
                        査読経験校正者が、研究内容まで踏み込んで論文校正
                        <span className='absolute w-5 h-full border-[36px] border-l-[20px] border-solid border-transparent border-l-pearl-alpha right-[-56px] sm:hidden'></span>
                    </p>
                    <p className='relative text-black bg-white w-10/12 h-16 flex items-center justify-center px-5 py-2.5 mb-3 border border-pearl-alpha text-base md:text-sm sm:font-normal sm:text-black sm:bg-inherit sm:w-full sm:h-auto sm:p-0 sm:justify-start sm:border-0 sm:font-sb sm:mt-8'>
                        段落レベルの論理構造まで見直し、論旨をより明確に伝える
                        <span className='hidden sm:inline-block absolute text-2xl inset-x-0 top-0 -mt-10 m-auto w-3 h-3 '>+</span>
                        <span className='absolute w-5 h-full border-[33px] border-l-[20px] border-solid border-transparent border-l-white right-[-53px] z-10 sm:hidden'></span>
                        <span className='absolute w-5 h-full border-[33px] border-l-[20px] border-solid border-transparent border-l-pearl-alpha right-[-54px] sm:hidden'></span>
                    </p>
                    <p className='relative text-black bg-white w-10/12 h-16 flex items-center justify-center px-5 py-2.5 mb-3 border border-pearl-alpha text-base md:text-sm sm:text-black sm:bg-inherit sm:w-full sm:h-auto sm:p-0 sm:justify-start sm:border-0 sm:font-sb sm:mt-8 sm:font-sb'>
                        語彙・文法をネイティブ校正者2名がチェック
                        <span className='hidden sm:inline-block absolute text-2xl inset-x-0 top-0 -mt-10 m-auto w-3 h-3 '>+</span>
                        <span className='absolute w-5 h-full border-[33px] border-l-[20px] border-solid border-transparent border-l-white right-[-53px] z-10 sm:hidden'></span>
                        <span className='absolute w-5 h-full border-[33px] border-l-[20px] border-solid border-transparent border-l-pearl-alpha right-[-54px] sm:hidden'></span>
                    </p>
                    <a className='relative text-white bg-garnet-mu text-center rounded w-96 p-2.5 mt-7 text-lg font-sb md:text-sm sm:mt-6 sm:w-full sm:mb-2.5'>
                        トップジャーナル英文校正の詳細
                        <span className='absolute w-5 h-5 right-5 inset-y-0 m-auto inline-block bg-no-repeat md:w-4 md:h-4 md:bg-cover sm:w-3 sm:h-3 sm:bg-cover sm:right-3' style={{backgroundImage: `url(${'/assets/images/icons/button-icon.svg'})`}}></span>
                    </a>
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
