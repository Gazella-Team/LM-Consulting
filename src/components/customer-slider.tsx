import Slider from "react-infinite-logo-slider";

const imageData = ["/users/slack.webp", "/users/slack.webp","/users/slack.webp","/users/slack.webp","/users/slack.webp","/users/slack.webp","/users/slack.webp","/users/slack.webp",]

export default function CustomerSlider() {
    return (
      <section className="py-14 bflex items-center overflow-hidden">
        <div>
          <Slider
            width="170px"
            duration={40}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            {imageData.map((v) => (
              <Slider.Slide key={v}>
                <img className="w-[100px]" alt={v} src={v}></img>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }