import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <section className="relative h-[10vh-200px] shadow-2xl w-full  border-b-8 border-b-[#007a70]">
      <div className="">
      <Carousel className="h-full"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img loading="lazy" src="/lostcity1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/lostcity2.jpg" alt="" />
        </div>
      </Carousel>
      </div>
    </section>
  );
}

export default Slider;