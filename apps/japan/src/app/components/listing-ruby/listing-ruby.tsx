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
interface IListingRubyParams {
  heading: string;
  pagination: boolean;
  mobilePageSize: number;
  pageNumber: number;
  pageIcon: string[];
  subjects: ISubjects[];
  link?: string;
  subHeading?: string;
}
interface ISubjects {
  content: String;
  machineName: string;
}
interface ISubjectList {
  subjects: ISubjects[];
  pageCount: number;
}
const params: IListingRubyParams = {
  heading: 'エディテージ',
  pageIcon: ['assets/images/icons/circle-arrow-left.svg', 'assets/images/icons/circle-arrow-right.svg'],
  subjects: [],
  pageNumber: 1,
  pagination: true,
  mobilePageSize: 8,
};
let startIndex = 0;
let endIndex: number;
let chunkedArray: ISubjects[][];
let mobileRows = 1;
let pages = 1;
const ListingRuby = ({ searchText, hideHeading, ignoreUrlParams, pageRows, pageColumns }:
  { searchText: string, hideHeading: boolean, ignoreUrlParams: boolean, pageRows: number, pageColumns: number }) => {
  // const navigator = useNavigate();
  const [subjects, setSubjects] = useState([{}]);
  let [active, setActive] = useState(1);
  let [page, setPage] = useState(1);
  let [pageCount, setPageCount] = useState(1);
  let [pageSize, setpageSize] = useState(1);
  let [total, setPageTotal] = useState(1);
  let [currentPage, setCurrentPage] = useState(1);
  let [searchTitle, setSearchTitle] = useState('');
  const url = new URL(location.href);
  var saParam = url.searchParams.get("sa");
  useEffect(() => {
    if (saParam && !ignoreUrlParams) {
      searchText = saParam;
    }
    const getSubData = async () => {
      const { machineNameTop, machineNameBottom, searchTitle, machineType } = await getMachineName(searchText);
      setSearchTitle(searchTitle);
      const machineName = ignoreUrlParams ? machineNameBottom : machineNameTop;

      let subData = await getSubjectData(machineName, currentPage, isMobile ? pageColumns : pageRows * pageColumns, ignoreUrlParams ? 'sa_one' : machineType);
      setSubjects(subData.subjects);
      setPage(subData.pageObj.page);
      setPageCount(subData.pageObj.pageCount);
      setpageSize(subData.pageObj.pageSize);
      setPageTotal(subData.pageObj.total);
      getPageDetails(subData.subjects, params.pageNumber, isMobile ? pageColumns : pageRows * pageColumns);
    };
    getSubData();
  }, [searchText, currentPage]);
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
    <section className='py-9'>
        <div className='container'>
            <div className='w-260 m-auto sm:w-full'>
                <div className='flex items-center justify-between py-3.5 bg-pearl-beta sm:px-3.5 sm:py-2.5'>
                    <p className='text-white font-bold text-4.5xl leading-48 md:text-2xl sm:text-base'>スタンダード英文校正</p>
                    <p className='text-white font-bold text-2.5xl leading-42 pr-4 md:text-xxl sm:hidden'>不動の定番</p>
                </div>
                <div className='hidden sm:block sm:mb-7'>
                    <div className='w-full max-w-md h-56 bg-no-repeat bg-cover m-auto mb-3.5' style={{backgroundImage: `url(${'/assets/images/standard-editing-service-banner.jpg'})`}}></div>
                    <p className='text-slate-900 font-bold text-xl'>不動の定番</p>
                    <div className='text-base font-bold text-neutral-700'>
                        最短で<span className='text-diamond-delta'>4,000単語</span>/1日～
                        <br />
                        1単語 <span className='text-diamond-delta'>5円</span>～(税抜)
                    </div>
                </div>
                <p className='text-base text-neutral-700 my-6 leading-29 font-light sm:py-0 sm:mb-10 sm:leading-6'>
                    <span className='text-diamond-delta'>圧倒的な発注数を誇る</span>定番の英文校正。<span className='text-diamond-delta'>徹底的な言語チェック</span>で文法、語彙、専門用語エラーなどを校正するスタンダード英文校正は、品質に妥協せずにリーズナブルな価格で英文校正を受けたい方に最適です。<span className='text-diamond-delta'>専門分野のネイティブ校正者２名によるダブルチェックで、365日有効の再校正（１回分）</span> も初回注文時+2円/単語、もしくは60%割引でご利用可能。その他の論文投稿に必要な様々なサポートも無料もしくはオプションで追加可能です。<span className='text-diamond-delta'>急ぎのアブストラクト校正や、論文以外の用途</span>でも頼れるサービスとして支持を得ています。
                </p>
                <div className='flex'>
                    <div className='min-w-80 w-80 h-52 mr-2.5 bg-no-repeat bg-cover sm:hidden' style={{backgroundImage: `url(${'/assets/images/standard-editing-service-banner.jpg'})`}}></div>
                    <div className='flex flex-wrap sm:justify-center sm:m-auto sm:text-center'>
                        <div className='w-52 h-32 mx-3.5 mb-6 sm:w-1/2 sm:mb-1.5 sm:mx-0 sm:px-1'>
                            <div className='flex items-center justify-center flex-col w-full h-full text-base font-bold text-neutral-700 bg-garnet-gamma text-center sm:text-sm'>フォーマット <span className='text-diamond-delta block'>無料調整</span></div>
                        </div>
                        <div className='w-52 h-32 mx-3.5 mb-6 sm:w-1/2 sm:mb-1.5 sm:mx-0 sm:px-1'>
                            <div className='flex items-center justify-center flex-col w-full h-full text-base font-bold text-neutral-700 bg-garnet-gamma text-center sm:text-sm'> 担当校正者への質問は <span className='text-diamond-delta block'>何回でも無料</span></div>
                        </div>
                        <div className='w-52 h-32 mx-3.5 mb-6 sm:w-1/2 sm:mb-1.5 sm:mx-0 sm:px-1'>
                            <div className='flex items-center justify-center flex-col w-full h-full text-base font-bold text-neutral-700 bg-garnet-gamma text-center sm:text-sm'>納得いくまで書き直します <span className='text-diamond-delta block'>100%品質保証</span></div>
                        </div>
                        <div className='w-52 h-32 mx-3.5 mb-6 sm:w-1/2 sm:mb-1.5 sm:mx-0 sm:px-1'>
                            <div className='flex items-center justify-center flex-col w-full h-full text-base font-bold text-neutral-700 bg-garnet-gamma text-center sm:text-sm'>業界最速！<span className='text-diamond-delta block'>最短8.5時間納品</span></div>
                        </div>
                        <div className='w-52 h-32 mx-3.5 mb-6 sm:w-1/2 sm:mb-1.5 sm:mx-0 sm:px-1'>
                            <div className='flex items-center justify-center flex-col w-full h-full text-base font-bold text-neutral-700 bg-garnet-gamma text-center sm:text-sm'>
                                リーズナブルに追加
                                <span className='text-diamond-delta block'>365日有効の再校正</span>
                                <span>※365日有効1回</span>
                                <span>【修正量の上限なし】</span>
                            </div>
                        </div>
                        <div className='w-52 h-32 mx-3.5 mb-6 sm:w-1/2 sm:mb-1.5 sm:mx-0 sm:px-1'>
                            <div className='flex items-center justify-center flex-col w-full h-full text-base font-bold text-neutral-700 bg-garnet-gamma text-center sm:text-sm'>単語数削減 <span className='text-diamond-delta block'>10％まで無料</span></div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-3.5 mb-10 sm:mt-7'>
                    <div className='w-1/3 text-3xl font-bold text-neutral-700 md:text-2xl sm:hidden'>
                        最短で<span className='text-diamond-delta'>4,000単語</span>/1日～
                        <br />
                        1単語 <span className='text-diamond-delta'>5円</span>～(税抜)
                    </div>
                    <div className='w-2/3 text-center sm:m-auto sm:w-full sm:max-w-96'>
                        <a target='_blank' className='mb-6 relative text-white bg-gradient-to-b from-emerald-600 to-emerald-800 text-2xl font-bold rounded-lg py-4 pl-6 pr-10 hover:text-white hover:shadow-xl hover:shadow-emerald-200/40 md:text-lg sm:max-w-full sm:py-3 sm:px-10 sm:text-base sm:mb-16' href='https://app.editage.jp/order/ncf/english-editing/standard-editing/'>
                            自動簡単お見積もり・ご注文
                            <span className='block font-light text-base md:text-sm sm:absolute sm:text-neutral-500 sm:top-full sm:left-0 sm:text-left sm:text-sm sm:pt-2'>単語数を入力するだけで、その場でお見積りが確認できます</span>
                            <span className='absolute right-3 inset-y-0 m-auto w-3.5 h-3.5 inline-block bg-no-repeat' style={{backgroundImage: `url(${'/assets/images/icons/double-rightarrow-white.svg'})`}}></span>
                        </a>
                        <a target='_blank' className='relative bg-neutral-400 w-80 py-3 text-white text-xl font-semibold hover:text-white md:text-lg sm:block sm:m-auto sm:text-base sm:w-72' href='https://www.editage.jp/services/english-editing/standard-editing-plan'>
                            サービス詳細はこちら
                            <span className='absolute right-4 inset-y-0 m-auto w-3.5 h-3.5 inline-block bg-no-repeat' style={{backgroundImage: `url(${'/assets/images/icons/double-rightarrow-white.svg'})`}}></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <section className={(hideHeading ? 'bg-pearl-zeta' : 'bg-primary') + ' pt-8 pb-10 '}  >
        <div className="container">
          <div className='max-w-[900px] mx-auto'>
            {!hideHeading &&
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
            className='bg-white px-16 rounded-lg  py-7.5 max-w-[1100px] mx-auto sm:text-center'>
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
  function getSubjectData(input: string, page: number, pageSize: number, machineType: string) {
    return subjectAPIService.getSubjectsList(input, page, pageSize, machineType).then(function (response: any) {
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
    const chunkSize = pageRows;
    const tempArray = [];
    for (index = 0; index < listItems.length; index += chunkSize) {
      const chunk = listItems.slice(index, index + chunkSize);
      tempArray.push(chunk);
    }
    return tempArray;
  }
}
export default ListingRuby;
