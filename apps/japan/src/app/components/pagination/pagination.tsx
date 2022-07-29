/**
 * @todo:  have to send total pages from backend
 * not a right pratice to do operation in front end
 */

import { useEffect, useState } from 'react';

export function Pagination({
  currentPage,
  pageSize,
  itemsCount,
  icon,
  pageUrl,
  triggerPageClick = () => {},
}: {
  currentPage: number;
  pageSize: number;
  itemsCount: number;
  icon: string[];
  pageUrl: string;
  triggerPageClick: (pageNum: number) => void;
}) {
  let pagesArray: Array<number> = [];
  /**
   * Clubs the pages for each display
   *  1,2,3,4,5,6,7,8,9
   *  10,11,12,13,14,15,16,17,18
   * So the iteration moves accordingly
   */

  let pageClubPointer = 9;
  /**
   * The number of pages a pagination list can show.
   * Default comes from Host config, but for items less than host config new number is set
   */
  let lastPage: number = 1;
  let listMaxLength: number;
  /**
   * create a array of total number of
   * pages to itrarte through ngfor
   * @author Goutham Reddy.
   */

  useEffect(() => {}, [currentPage, pageSize, itemsCount]);
  _setInitialProperties();

  function _setInitialProperties() {
    listMaxLength = pageClubPointer = 9;
    pagesArray = [];
    currentPage = currentPage;
    const minValue = _getPageClubPointerStart();
    lastPage = Math.ceil(itemsCount / pageSize);
    listMaxLength = lastPage < listMaxLength ? lastPage : listMaxLength;
    pageClubPointer = minValue + listMaxLength;
    const maxValue = _getPageClubPointerEnd(minValue);
    for (let i = minValue; i < maxValue; i++) {
      pagesArray.push(i);
    }
  }
  /**
   * Get Minimum Value For Club Pointer
   * @author Goutham Reddy
   */

  function _getPageClubPointerStart() {
    if (currentPage % pageClubPointer) {
      return currentPage - (currentPage % pageClubPointer) + 1;
    }

    return currentPage - pageClubPointer + 1;
  }
  /**
   * Get Max Value For Club Pointer
   * @params minValue
   * @author Goutham Reddy
   */
  function _getPageClubPointerEnd(minValue: number) {
    if (minValue + listMaxLength > lastPage) {
      return lastPage + 1;
    }

    return minValue + listMaxLength;
  }
  /**
   * Set Page
   * @params pageNumber
   * @author Goutham Reddy
   *  1,2,3,4,5,6,7,8,9
   *  10,11,12,13,14,15,16,17,18
   */
  function setPage(pageNumber: number, direction = false) {
    if (!pageNumber) return;
    if (pageNumber === currentPage) return;
    currentPage = pageNumber;
    triggerPageClick(pageNumber);
    if (direction) {
      _moveForward(pageNumber);
    } else {
      _moveBackward(pageNumber);
    }
    // _setAndNotify(false, pageNumber);
  }

  /**
   * Logic for moving the pagination numbered list backward
   *  @author Goutham Reddy
   */
  function _moveBackward(pageNumber: number): void {
    if (pageNumber % listMaxLength !== 0) {
      return;
    }

    pagesArray = [];
    for (let i = pageNumber - (listMaxLength - 1); i <= pageNumber; i++) {
      pagesArray.push(i);
    }
    pageClubPointer = pageNumber;
  }

  /**
   * Logic for moving the pagination numbered list forward
   * @author Goutham Reddy
   */
  function _moveForward(pageNumber: number): void {
    if (pageNumber <= pageClubPointer) {
      return;
    }
    if (pageNumber >= lastPage) {
      return;
    }
    pagesArray = [];
    for (let i = pageClubPointer + 1; i <= pageClubPointer + listMaxLength; i++) {
      if (i > lastPage) {
        pagesArray.push(0);
        continue;
      }
      pagesArray.push(i);
    }
    pageClubPointer = pageClubPointer + listMaxLength;
  }

  return (
    <div className="container mt-10">
      <div className="pagination relative h-7.5 mx-auto w-62.5 text-center">
        {pagesArray.length > 1 && currentPage !== lastPage && (
          <a
            className="-mr-14 mt-0.5 -translate-y-1/2 absolute cursor-pointer float-right h-14 w-14 right-0 top-1/2 transform bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${icon[1]})`,
            }}
          ></a>
        )}
        {pagesArray.length > 1 && currentPage !== lastPage && (
          <a
            className="-mr-14 mt-0.5 -translate-y-1/2 absolute cursor-pointer float-right h-14 w-14 right-0 top-1/2 transform bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${icon[1]})`,
            }}
            onClick={(e) => setPage(currentPage + 1, true)}
          ></a>
        )}

        {pagesArray.length > 1 && (
          <ul className="border border-lapis-gamma rounded-full h-full bg-white">
            {pagesArray.map((page, index) => (
              <li
                className={
                  (currentPage === page ? 'bg-lapis-gamma text-white ' : ' ') +
                  ' inline-block h-full text-center leading-30 w-6'
                }
                onClick={(e) => setPage(page)}
              >
                {
                  <a className="inline-block align-middle h-full w-full float-left font-ssb text-xsm hover:bg-lapis-gamma hover:text-white">
                    {page ? page : ''}
                  </a>
                }
              </li>
            ))}
          </ul>
        )}

        {currentPage !== 1 && (
          <a
            className="-ml-14 mt-0.5 -translate-y-1/2 absolute cursor-pointer float-right h-14 w-14 left-0 top-1/2 transform bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${icon[0]})`,
            }}
          ></a>
        )}

        {currentPage !== 1 && (
          <a
            className="-ml-14 mt-0.5 -translate-y-1/2 absolute cursor-pointer float-right h-14 w-14 left-0 top-1/2 transform bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${icon[0]})`,
            }}
            onClick={(e) => setPage(currentPage - 1)}
          ></a>
        )}
      </div>
    </div>
  );
}

export default Pagination;
