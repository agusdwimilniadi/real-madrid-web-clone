const CardNews = ({
  isHeader,
  title,
  imageUrl,
}: {
  isHeader?: boolean;
  title: string;
  imageUrl: string;
}) => {
  return (
    <div className="group">
      {isHeader ? (
        <>
          <div className=" rounded-xl bg-[#F2F5F8] lg:grid lg:grid-cols-3 lg:mb-10">
            <div className="overflow-hidden rounded-l-lg col-span-2">
              <img
                src={imageUrl}
                alt="image-news"
                className="group-hover:scale-105 transition-all ease-in-out duration-[1800ms] "
              />
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-xl xl:text-3xl mx-10 mt-5 mb-10 font-bold group-hover:text-indigo-600 transition-all ease-in-out duration-[1800ms]  hidden lg:block"
              >
                {title}
              </a>
            </div>
          </div>
          <a
            href="#"
            className="text-sm md:text-3xl mt-5 mb-10 font-bold group-hover:text-indigo-600 transition-all ease-in-out duration-[1800ms] block lg:hidden"
          >
            {title}
          </a>
        </>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl">
            <img
              src={imageUrl}
              alt="image-news"
              className="group-hover:scale-105 transition-all ease-in-out duration-[1800ms]"
            />
          </div>
          <a
            href="#"
            className="text-sm md:text-base font-bold my-3 group-hover:text-indigo-600 transition-all ease-in-out duration-[1800ms] line-clamp-3"
          >
            {title}
          </a>
        </>
      )}
    </div>
  );
};

export default CardNews;
