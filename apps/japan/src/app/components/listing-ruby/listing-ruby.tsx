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
      <section className='py-12 sm:py-11'>
        <div className='container'>
          <div className='text-4xl leading-56 font-sb text-center mb-6 text-gray-700 sm:text-2xl sm:text-left sm:mb-2'>
            研究のプロに選ばれる
            <span className='text-diamond-delta'>「エディテージ」</span>
            は <span className='block sm:inline-block'>こんな方にご利用いただいています！</span>
          </div>
          <div className='flex justify-center flex-wrap'>
            <div className='text-white bg-pearl-alpha mt-3 p-7 w-125 mx-1.5 md:w-110 sm:w-full sm:p-3.5 sm:mx-0 sm:mt-6'>
              <div className='flex pb-4 sm:flex-col sm:pb-8'>
                <div className='border border-gray-500 min-w-40 w-40 h-40 bg-no-repeat bg-cover mr-4 sm:max-w-sm sm:w-full sm:m-auto sm:mb-4' style={{backgroundImage: `url(${'/assets/images/researchprofessional-1.jpg'})`}}></div>
                <div>
                  <p className='text-base leading-7 font-sb sm:leading-6'>
                    エディテージのプレミアム英文校正は再校正をすればする度、原稿がシンプルになって良くなって行きます。 
                    <span className='text-base leading-7 opacity-70 block font-normal'>エディテージさんはもう20 回以上は使わせていただいておりますが、特にプレミアム英文校正プラスが出てからは、ずっとプラスを使っています。</span>
                  </p>
                </div>
              </div>
              <div>
                <p className='text-base leading-7 font-sb sm:leading-6'>鈴木 翔先生 </p>
                <p className='opacity-80 leading-7 sm:leading-6'>日本大学医学部　内科学系消化器肝臓内科学分野</p>
                <div className='flex sm:flex-col'>
                  <p className='text-base leading-7 font-sb sm:leading-6'>ご利用サービス：</p>
                  <p className='text-base leading-7 sm:pl-7 sm:leading-6'>
                    <span className='block font-bold'>プレミアム英文校正プラス</span>
                    <span className='block font-bold'>ベーシック翻訳</span>
                    <span className='block font-bold'>論文剽窃チェックサービス</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='text-white bg-pearl-alpha mt-3 p-7 w-125 mx-1.5 md:w-110 sm:w-full sm:p-3.5 sm:mx-0 sm:mt-6'>
              <div className='flex pb-4 sm:flex-col sm:pb-8'>
                <div className='border border-gray-500 min-w-40 w-40 h-40 bg-no-repeat bg-cover mr-4 sm:max-w-sm sm:w-full sm:m-auto sm:mb-4' style={{backgroundImage: `url(${'/assets/images/researchprofessional-2.jpg'})`}}></div>
                <div>
                  <p className='text-base leading-7 font-sb sm:leading-6'>
                    <span className='text-base leading-7 opacity-70 font-normal'>これは私だけではないと思いますが、臨床医で研究や論文執筆に時間をしっかりと確保できる方はほとんどいないと思います。</span>
                    ですからエディテージのようなプロの業者に英文校正や論文投稿のサポートをお任せできるのは、時間の節約といった意味でも本当にありがたい ですね。
                  </p>
                </div>
              </div>
              <div>
                <p className='text-base leading-7 font-sb sm:leading-6'>柏浦 正広先生</p>
                <p className='opacity-80 leading-7 sm:leading-6'>自治医科大学付属さいたま医療センター</p>
                <div className='flex sm:flex-col'>
                  <p className='text-base leading-7 font-sb sm:leading-6'>ご利用サービス：</p>
                  <p className='text-base leading-7 sm:pl-7 sm:leading-6'>
                    <span className='block font-bold'>プレミアム英文校正プラス</span>
                    <span className='block font-bold'>プレミアム英文校正</span>
                    <span className='block font-bold'>スタンダード英文校正</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='text-white bg-pearl-alpha mt-3 p-7 w-125 mx-1.5 md:w-110 sm:w-full sm:p-3.5 sm:mx-0 sm:mt-6'>
              <div className='flex pb-4 sm:flex-col sm:pb-8'>
                <div className='border border-gray-500 min-w-40 w-40 h-40 bg-no-repeat bg-cover mr-4 sm:max-w-sm sm:w-full sm:m-auto sm:mb-4' style={{backgroundImage: `url(${'/assets/images/researchprofessional-3.jpg'})`}}></div>
                <div>
                  <p className='text-base leading-7 font-sb sm:leading-6'>
                    かなり突っ込んだやり取りを何回もすることが想定されましたので、プレミアム英文校正プラスを使おうかなと思いました。
                    <span className='text-base leading-7 opacity-70 font-normal'>査読コメントへの返答時に、言葉の問題で相手に自分たちの意図が伝わらず審査がうまくいかないと嫌だなと思ったので。</span>
                  </p>
                </div>
              </div>
              <div>
                <p className='text-base leading-7 font-sb sm:leading-6'>出野 智史先生</p>
                <p className='opacity-80 leading-7 sm:leading-6'>慶應義塾大学医学部麻酔学教室　助教（研究奨励）</p>
                <div className='flex sm:flex-col'>
                  <p className='text-base leading-7 font-sb sm:leading-6'>ご利用サービス：</p>
                  <p className='text-base leading-7 sm:pl-7 sm:leading-6'>
                    <span className='block font-bold'>プレミアム英文校正プラス</span>
                    <span className='block font-bold'>プレミアム英文校正</span>
                    <span className='block font-bold'>スタンダード英文校正</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='text-white bg-pearl-alpha mt-3 p-7 w-125 mx-1.5 md:w-110 sm:w-full sm:p-3.5 sm:mx-0 sm:mt-6'>
              <div className='flex pb-4 sm:flex-col sm:pb-8'>
                <div className='border border-gray-500 min-w-40 w-40 h-40 bg-no-repeat bg-cover mr-4 sm:max-w-sm sm:w-full sm:m-auto sm:mb-4' style={{backgroundImage: `url(${'/assets/images/researchprofessional-4.jpg'})`}}></div>
                <div>
                  <p className='text-base leading-7 font-sb sm:leading-6'>
                    <span className='text-base leading-7 opacity-70 font-normal'>「やっぱり、どうしても英文法として絶対おかしなところがあると思いますので、そこは絶対チェックしてもらいますね。 </span>
                    それだけじゃなく、このプレミアム英文校正プラスみたいに論文の本文とコメントを突き合わせてもらって、査読者からのコメントの内容とも突き合わせてチェックしてもらえるんだったら、助かりますよね。
                  </p>
                </div>
              </div>
              <div>
                <p className='text-base leading-7 font-sb sm:leading-6'>早川 峰司先生</p>
                <p className='opacity-80 leading-7 sm:leading-6'>北海道大学病院先進急性期医療センター　助教</p>
                <div className='flex sm:flex-col'>
                  <p className='text-base leading-7 font-sb sm:leading-6'>ご利用サービス：</p>
                  <p className='text-base leading-7 sm:pl-7 sm:leading-6'>
                    <span className='block font-bold'>プレミアム英文校正プラス</span>
                    <span className='block font-bold'>プレミアム英文校正</span>
                    <span className='block font-bold'>スタンダード英文校正</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-16 sm:mt-12'>
            <a target='_blank' className='mb-6 relative text-white bg-gradient-to-b from-emerald-600 to-emerald-800 text-2xl font-sb rounded-lg py-4 pl-6 pr-10 hover:text-white hover:shadow-xl hover:shadow-emerald-200/40 md:text-lg sm:max-w-full sm:py-3 sm:pl-5 sm:pr-10 sm:text-base sm:mb-16' href='https://app.editage.jp/order/ncf/english-editing/standard-editing/'>
              自動簡単お見積もり・ご注文
              <span className='block font-light text-base md:text-sm sm:absolute sm:text-neutral-500 sm:top-full sm:left-0 sm:text-left sm:text-sm sm:pt-2'>単語数を入力するだけで、その場でお見積りが確認できます</span>
              <span className='absolute right-3 inset-y-0 m-auto w-3.5 h-3.5 inline-block bg-no-repeat' style={{backgroundImage: `url(${'/assets/images/icons/double-rightarrow-white.svg'})`}}></span>
            </a>
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
