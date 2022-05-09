const HeadText = ({ text, className }) => {
  return (
    <h1
      className={`font-Montserrat w-full text-4xl lg:text-6xl font-bold p-5 ${className}`}
    >
      {text}
    </h1>
  );
};

export default HeadText;
