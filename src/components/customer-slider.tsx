import Slider from "react-infinite-logo-slider";

const imageData = ["/users/prisma.svg", "/users/prisma.svg","/users/prisma.svg","/users/prisma.svg","/users/prisma.svg","/users/prisma.svg","/users/prisma.svg","/users/prisma.svg",]

export default function CustomerSlider() {
    return (
      <section className="pt-24 bflex items-center overflow-hidden">
        <div className="flex items-center justify-center pb-8">
          <p className="uppercase paragraph text-xs text-gray-500">TRUSTED BY +50 LEADING COMMUNITY-FOCUSED TEAMS</p>
        </div>
        <div>
          <Slider
            width="160px"
            duration={40}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            {imageData.map((v) => (
              <Slider.Slide key={v}>
                <img className="w-[130px]" alt={v} src={v}></img>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }