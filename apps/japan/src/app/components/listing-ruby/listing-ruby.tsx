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
      <section>
        <div className='text-white font-bold py-5 bg-pearl-alpha text-center text-3xl leading-45 mb-12 md:text-2xl sm:text-xl sm:py-5 sm:leading-6 sm:mb-6'>
          よくある質問：不安を事前に解消しましょう
        </div>
        <div className='container max-w-5xl'>
          <div className='mb-12 sm:mb-10'>
            <div className='flex sm:items-center'>
              <div className='mr-10 mb-3 font-black text-white text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center bg-diamond-delta sm:mr-3'>Q</div>
              <p className='text-lg font-bold mb-2.5 text-neutral-700 sm:text-base'>英文校正サービスの依頼方法。</p>
            </div>
            <div className='flex'>
              <div className='mr-10 mb-3 font-black text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center border border-pearl-beta text-pearl-beta sm:mr-3'>A</div>
              <p className='text-lg font-light text-neutral-700 sm:text-base'>初めてのお客様はお見積り依頼・ご注文フォームから英語原稿をお送りください。エディテージをご利用いただいたことのあるお客様は、弊社オンラインシステムをご利用ください。</p>
            </div>
          </div>
          <div className='mb-12 sm:mb-10'>
            <div className='flex sm:items-center'>
              <div className='mr-10 mb-3 font-black text-white text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center bg-diamond-delta sm:mr-3'>Q</div>
              <p className='text-lg font-bold mb-2.5 text-neutral-700 sm:text-base'>どのようなファイルで依頼をできますか？</p>
            </div>
            <div className='flex'>
              <div className='mr-10 mb-3 font-black text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center border border-pearl-beta text-pearl-beta sm:mr-3'>A</div>
              <p className='text-lg font-light text-neutral-700 sm:text-base'>
                エディテージでは Word、PowerPoint、HTML、Adobe(pdf)、Frame Maker、TeX、など様々なファイルを取り扱っております。英文校正取り扱いファイルの 詳細は
                <a href='https://www.editage.jp/services/english-editing/fileformats' target='_blank' className='text-pearl-eta font-bold'>こちらよりご覧いただけます</a>。
              </p>
            </div>
          </div>
          <div className='mb-12 sm:mb-10'>
            <div className='flex sm:items-center'>
              <div className='mr-10 mb-3 font-black text-white text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center bg-diamond-delta sm:mr-3'>Q</div>
              <p className='text-lg font-bold mb-2.5 text-neutral-700 sm:text-base'>英文校正証明書は発行できますか？</p>
            </div>
            <div className='flex'>
              <div className='mr-10 mb-3 font-black text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center border border-pearl-beta text-pearl-beta sm:mr-3'>A</div>
              <p className='text-lg font-light text-neutral-700 sm:text-base'>
                英文校閲証明書・英文校正証明書の発行は無料（追加料金不要）で行っております。
              </p>
            </div>
          </div>
          <div className='mb-12 sm:mb-10'>
            <div className='flex sm:items-center'>
              <div className='mr-10 mb-3 font-black text-white text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center bg-diamond-delta sm:mr-3'>Q</div>
              <p className='text-lg font-bold mb-2.5 text-neutral-700 sm:text-base'>どの納期・料金コースが良いかわからない</p>
            </div>
            <div className='flex'>
              <div className='mr-10 mb-3 font-black text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center border border-pearl-beta text-pearl-beta sm:mr-3'>A</div>
              <p className='text-lg font-light text-neutral-700 sm:text-base'>
                どの料金コースが最適かよくわからない場合には、選択しないでも大丈夫です。ご希望の納品日をお見積り依頼用のフォーム上で選択していただくだけで、弊社から最適なコースに基づいたお見積りを送信いたします。
              </p>
            </div>
          </div>
          <div className='mb-12 sm:mb-10'>
            <div className='flex sm:items-center'>
              <div className='mr-10 mb-3 font-black text-white text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center bg-diamond-delta sm:mr-3'>Q</div>
              <p className='text-lg font-bold mb-2.5 text-neutral-700 sm:text-base'>英文校閲をした内容に関してご質問があるのですが？</p>
            </div>
            <div className='flex'>
              <div className='mr-10 mb-3 font-black text-2xl w-11 min-w-[46px] h-11 rounded-full flex items-center justify-center border border-pearl-beta text-pearl-beta sm:mr-3'>A</div>
              <p className='text-lg font-light text-neutral-700 sm:text-base'>
                ご質問を英語で書いて、オンラインシステム内の専用フォームから送信していただくか、Eメールで送信ください。校正内容に対するご質問へは、通常1～3営業日以内に回答いたしますが、正確な回答日はご質問を受け取った時点で弊社クライアントサービスよりご連絡いたします。
              </p>
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
