import data from "../api/data";
import { MdArrowRightAlt } from "react-icons/md";

const Featured = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 mx-auto p-3 md:p-0">
        {data.map((item) => {
          const { id, title, img, price, to } = item;
          return (
            <div
              key={id}
              className="w-full sm:w-80 lg:w-72 xl:w-96 bg-white rounded-3xl p-5"
            >
              <img
                src={img}
                alt=""
                className="rounded-3xl relative  w-full h-60 overflow-hidden object-cover"
              />
              <div className="">
                <h1 className="font-Montserrat text-black-150 pt-4 text-3xl font-bold text-left">
                  {title}
                </h1>
                <h4 className="font-Nunito text-left py-4 text-black-50">
                  ${price}
                </h4>
              </div>

              <div className="font-Montserrat text-left text-blue-130 font-bold flex cursor-pointer">
                <button className="font-bold">
                  <a href={to}>View Detail</a>
                </button>
                <div className="mt-1 ml-1">
                  <MdArrowRightAlt />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Featured;
