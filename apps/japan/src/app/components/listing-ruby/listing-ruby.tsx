import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '../pagination/pagination';
import subjectAPIService from '../../services/api/subject-api';

/**
 * interface for listing ruby parameters
 */
interface IListingRubyParams {
  heading: string;
  pagination: boolean;
  pageSize: number;
  mobilePageSize: number;
  pageNumber: number;
  pageIcon: string[];
  subjects: ISubjects[];
  column: number;
  row: number;
  link?: string;
  subHeading?: string;
}
interface ISubjects {
  content: String;
}
interface ISubjectList {
  subjects: ISubjects[];
  pageCount: number;
}
const params: IListingRubyParams = {
  row: 5,
  column: 5,
  heading: 'Explore Social Science subjects',
  pageIcon: ['assets/images/icons/circle-arrow-left.svg', 'assets/images/icons/circle-arrow-right.svg'],
  pageSize: 25,
  subjects: [],
  pageNumber: 1,
  pagination: true,
  mobilePageSize: 8,
};
let startIndex = 0;
let endIndex: number;
let chunkedArray: ISubjects[][];
let singlePageItemCount = params.pageSize;
let mobileRows = 1;
let pages = 1;
const ListingRuby = ({ searchText }: { searchText: string }) => {
  const [subjects, setSubjects] = useState([{}]);
  let [active, setActive] = useState(1);
  let [page, setPage] = useState(1);
  let [pageCount, setPageCount] = useState(1);
  let [pageSize, setpageSize] = useState(1);
  let [total, setPageTotal] = useState(1);
  let [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const getSubData = async () => {
      let subData = await getSubjectData(searchText, currentPage);
      setSubjects(subData.subjects);
      setPage(subData.pageObj.page);
      setPageCount(subData.pageObj.pageCount);
      setpageSize(subData.pageObj.pageSize);
      setPageTotal(subData.pageObj.total);
      getPageDetails(subData.subjects, params.pageNumber);
    };
    getSubData();
  }, [searchText, currentPage]);
  const pageChanged = (num: number) => {
    setCurrentPage(num);
  };
  return (
    <>
      <section className="bg-primary pt-8 pb-10">
        <div className="container">
          <h2 className="mb-8 sm:text-xxl sm:leading-8 sm:mb-4 text-center">{params?.heading}</h2>
          {params?.subHeading && <p className="text-center mb-8">{params?.subHeading}</p>}
          <div className="bg-white px-16 rounded-lg  wrapper py-15 ">
            <div className="flex justify-center">
              {chunkedArray?.map((row: ISubjects[]) => (
                <div className="w-1/4 sm:w-full float-left">
                  <ul className="mt-2">
                    {row.map((item: ISubjects) => (
                      <li className="text-base leading-6 font-ssb px-2 pb-3 pt-3 sm:pt-1 sm:pb-1">{item.content}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {subjects.length == 0 && <div className="flex justify-center">No Data Available</div>}
            <div className="clearfix"></div>
          </div>
        </div>

        <Pagination
          triggerPageClick={pageChanged}
          pageSize={pageSize}
          currentPage={page}
          itemsCount={total}
          pageUrl={''}
          icon={params?.pageIcon}
        />
      </section>
    </>
  );
};

/**
 * Get details of records to displayed on the currentPage
 * @param currentPage currentPage
 */
function getPageDetails(subjects: ISubjects[], currentPage: number) {
  startIndex = (currentPage - 1) * singlePageItemCount;
  endIndex = Math.min(startIndex + singlePageItemCount - 1, subjects.length - 1);
  let items = subjects.slice(startIndex, endIndex + 1);
  chunkedArray = createChunks(items);
}
function getSubjectData(input: string, page: number) {
  return subjectAPIService.getSubjectsList(input, page).then(function (response: any) {
    let returnData: ISubjects[] = [];
    let responseData = response.data.data;
    responseData.map((key: any) => {
      returnData.push({ content: key.attributes.name });
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
  const chunkSize = params.row;
  const tempArray = [];
  for (index = 0; index < listItems.length; index += chunkSize) {
    const chunk = listItems.slice(index, index + chunkSize);
    tempArray.push(chunk);
  }
  return tempArray;
}

export default ListingRuby;