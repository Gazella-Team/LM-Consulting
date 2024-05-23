import Slider from "react-infinite-logo-slider";

const imageData = ["/users/burst.png","/users/burst.png","/users/burst.png","/users/burst.png","/users/burst.png","/users/burst.png","/users/burst.png","/users/burst.png",]

export default function CustomerSlider() {
    return (
      <section className="pt-14 overflow-hidden bg-white">
        <div className="flex items-center justify-center pb-12 w-[86%] mx-auto max-w-6xl">
          <p className="uppercase paragraph text-xs text-gray-500">used by fast growing saas startups worldwide</p>
        </div>
        <div>
          <Slider
            width="140px"
            duration={40}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            {imageData.map((v) => (
              <Slider.Slide key={v}>
                <img className="w-[70px]" alt={v} src={v}></img>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }