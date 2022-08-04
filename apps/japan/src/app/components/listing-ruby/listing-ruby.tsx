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
      const { machineName, searchTitle} = await getMachineName(searchText);
      setSearchTitle(searchTitle);
        
      let subData = await getSubjectData(machineName, currentPage, isMobile ? pageColumns : pageRows * pageColumns);
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
    window.location.replace(location.origin + location.pathname + '?sa=' + subject.machineName)

  }
  return (
    <>
      <section className={(hideHeading ? 'bg-pearl-zeta' : 'bg-primary') + ' pt-8 pb-10 '}  >
        <div className="container">
          <div className='max-w-[950px] mx-auto'>
            {!hideHeading &&
              <React.Fragment>
                <h2 className="mb-8 sm:text-xxl sm:leading-8 sm:mb-4 text-center">
                  <MarkDown data={(searchTitle ? searchTitle : params?.heading) + ' では以下の専門分野に対応しています。'}></MarkDown>
                </h2>
                {params?.subHeading && <p className="text-center mb-8">{params?.subHeading}</p>}
              </React.Fragment>
            }
          </div>
          <div
            className={(hideHeading ? '' : 'wrapper') + ' bg-white px-16 rounded-lg  py-7.5 sm:text-center'}>
            <div className="flex justify-center">
              {subjects.length > 0 && chunkedArray?.map((row: ISubjects[], i) => (
                <div key={i} className="w-1/4 sm:w-full float-left">
                  <ul className="mt-2">
                    {row.map((item: ISubjects, index) => (
                      <> <a
                        key={index}
                        onClick={(e) => selectSubject(item)}>
                        <li className="text-base leading-6 font-ssb px-2 pb-3 pt-3 sm:pt-1 sm:pb-1">{item.content}</li>
                      </a> <br />
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
    if (!input) {
      return {
        machineName: '',
        searchTitle: ''
      }
    }
    const query = '[$eq]=' + input;
    return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five').then(function (response: any) {
      return {
        machineName: response.data.data[0]?.attributes.sa_one.data[0].attributes.machine_name ? response.data.data[0]?.attributes.sa_one.data[0].attributes.machine_name : '',
        searchTitle: response.data.data[0]?.attributes.search_title ? response.data.data[0]?.attributes.search_title : '',
      }
    });

  }
  function getSubjectData(input: string, page: number, pageSize: number) {
    return subjectAPIService.getSubjectsList(input, page, pageSize).then(function (response: any) {
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
