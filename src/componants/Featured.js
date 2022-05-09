import data from "../api/data";
import { MdArrowRightAlt } from "react-icons/md";

const Featured = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center lg:w-10/12 gap-8 mx-auto">
        {data.map((item) => {
          const { id, title, img, price } = item;
          return (
            <div
              key={id}
              className="w-96 sm:w-72 lg:w-96 bg-white rounded-3xl p-5"
            >
              <img
                src={img}
                alt="image"
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
                  <a href="#">View Detail</a>
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
