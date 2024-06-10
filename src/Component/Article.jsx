/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setData, removeArticle, paginate } from "../app/feature/articleSlice";

function Article() {
  const dispatch = useDispatch();
  const { data, currentPage, itemsPerPage } = useSelector(
    (state) => state.article
  );

  const [loading, setLoading] = useState(false);

  const fetchArticle = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    dispatch(setData(result));
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  console.log(indexOfLastItem, indexOfFirstItem, currentItems);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const removeArticle = (id) => {
//     const newDate = data.filter((i) => i.id !== id);
//     setData(newDate);
//     setUpdate((prev) => !prev);
//   };

  return (
    <>
      <div className="flex justify-center item-center">
        <div className="m-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-4 gap-x-4 items-center">
          {loading ? (
            <div className="text-3xl font-bold">Loading....</div>
          ) : currentItems.length > 1 ? (
            currentItems.map((item) => {
              return (
                <div
                  key={item.id}
                  name="card"
                  className="border-2 border-black max-height w-[14rem] rounded-md flex flex-col ml-14 p-4 bg-white relative"
                >
                  <span
                    className="absolute top-1 right-1 cursor-pointer"
                    // onClick={() => removeArticle(item.id)}
                    onClick={() => dispatch(removeArticle(item.id))}
                  >
                    ❌
                  </span>
                  <span className="font-bold text-xl">
                    {" "}
                    {item.title.length > 10
                      ? `${item.title.slice(0, 30)}...`
                      : item.title}
                  </span>
                  <span className="text-sm">
                    {" "}
                    {item.body.length > 10
                      ? `${item.body.slice(0, 30)}...`
                      : item.body}
                  </span>
                  <span className="text-[15px] text-gray-400">
                    Mon, 21 Dec 2020 14:57 GMT
                  </span>
                  <img
                    src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
                    alt="articleImg"
                  />
                </div>
              );
            })
          ) : (
            <div> No Data </div>
          )}
        </div>
      </div>

      {!loading && (
        <div className="flex justify-center item-center">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            paginate={pageNumber => dispatch(paginate(pageNumber))}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
}

export default Article;
