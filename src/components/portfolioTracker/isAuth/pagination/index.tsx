import { useState } from "react";

import ReactPaginate from "react-paginate";

const items = [1, 2, 3, 4];

export const PaginatedItems = ({ itemsPerPage = 1 }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="w-[250px] mx-auto">
      <ReactPaginate
        pageLinkClassName="bg-[#2d3038] w-[34px] h-[34px] flex items-center justify-center  font-bold rounded-[50%]"
        className="flex gap-5  "
        activeLinkClassName="opacity-[0.5]"
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
