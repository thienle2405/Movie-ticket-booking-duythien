import { Carousel } from "antd";

const HomeCarousel = () => {
  return (
    <>
      <Carousel className="w-full h-48 text-center text-9xl" autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </>
  );
};
export default HomeCarousel;
