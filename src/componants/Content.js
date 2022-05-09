import React from "react";
import Button from "./Button";
import HeadText from "./HeadText";
import Img from "./Img";
import ParagraphText from "./ParagraphText";

const Content = ({ order, path, head, sub, click }) => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className={`w-full md:w-1/2 ${order} py-5`}>
        <Img src={`image/${path}`} alt="img" />
      </div>
      <div className="w-full md:w-1/2 relative flex flex-wrap justify-center">
        <div className="xl:pl-44">
          <HeadText text={head} />
          <ParagraphText text={sub} />
          <div className="my-8 px-5">
            <Button text={click} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
