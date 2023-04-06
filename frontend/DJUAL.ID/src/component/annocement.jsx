import { useEffect, useState } from "react";

const Dot = ({ gotoSlide, key }) => {
  console.log(key);
  return (
    <svg
      className=" w-7 h-7 cursor-pointer"
      onClick={() => gotoSlide(key)}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

const ChevornLeft = () => {
  return (
    <svg
      className=" w-10 h-10 bg-white rounded-full"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
      />
    </svg>
  );
};

const ChefronRight = () => {
  return (
    <svg
      className="w-10 h-10 bg-white rounded-full"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      />
    </svg>
  );
};

const ImagesItem = ({ data, currentIndex }) => {
  //   return <img className=" rounded-xl" width={"700px"} src={data} alt="" />;
  return (
    <div>
      {/* <div
        className=" w-full max-h-80 bg-cover"
        style={{
          backgroundImage: `url(${data[currentIndex].url})`,
        }}
      ></div> */}
      <img src={data[currentIndex].url} className=" rounded-xl" alt="" />
    </div>
  );
};

const Annouce = () => {
  const images = [
    {
      url: "https://dlcdnwebimgs.asus.com/gain/21AE219C-6E24-4FD8-B83D-EFC9E131B315/fwebp",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/392B3F7C-55CF-474E-8B37-26B0DD7B1D9E/fwebp",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/CD8686E4-3474-4EF3-99D2-2995E04E5D6E/fwebp",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/5F5A44ED-E9AA-4966-BA1A-8BE913F904CF",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/E8F46A14-D8D6-4EF5-932A-6FC50AD2A73D/fwebp",
    },
  ];

  const [currentIndex, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? images.length - 1 : currentIndex - 1;
    setIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastIndex = currentIndex === images.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setIndex(newIndex);
  };

  const autoSlide = true;
  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(nextSlide, 3000);
      return () => clearInterval(slideInterval);
    }
  });

  const gotoSlide = (index) => {
    setIndex(index);
  };
  return (
    <div className=" h-96">
      <div className=" flex gap-3 p-3 relative">
        <ImagesItem data={images} currentIndex={currentIndex} />
        <div
          onClick={prevSlide}
          className=" group-hover:hidden absolute top-20 left-5 cursor-pointer"
        >
          <ChevornLeft />
        </div>
        <div
          onClick={nextSlide}
          className=" group-hover:hidden absolute top-20 right-5 cursor-pointer"
        >
          <ChefronRight />
        </div>
      </div>
      <div className=" flex justify-center">
        {images.map(
          (item, index) => console.log(index)
          //   <Dot key={index} gotoSlide={gotoSlide} />
        )}
      </div>
      <div className=" h-96"></div>
      <div className=" h-96"></div>
      <div className=" h-96"></div>
    </div>
  );
};

export default Annouce;
