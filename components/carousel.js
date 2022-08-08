import {useState} from "react";
import Image from "next/image";
import Slider from "react-slick";

function ImageLoader({src}) {
  return `https://source.unsplash.com/${src}`;
}

const carouselItems = [
  {
    image: "igfqapT4N2E",
    content: "",
  },
  {
    image: "igfqapT4N2E",
    content: "",
  },
  {
    image: "igfqapT4N2E",
    content: "",
  },
];

export default function Carousel({items}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {carouselItems.map((item, key) => {
        return (
          <div key={key} className="flex justify-center">
            <div className="flex flex-col mx-auto md:flex-row md:max-w-3xl h-64 bg-white shadow-lg">
              <div className="w-48 h-auto object-cover w-64 relative">
                <Image
                  loader={ImageLoader}
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt="Placeholder image"
                />
              </div>
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="text-gray-600 text-xs">Ape Einstein</p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
