import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  images: string[];
};

const ImageCarousel = ({ images }: Props) => {
  return (
    <div className="">
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        dynamicHeight={true}
      >
        {images.map((imageSrc) => (
          <img src={imageSrc} key={imageSrc} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
