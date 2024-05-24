import Link from "next/link";
import Slider from "react-infinite-logo-slider";

const imageData = [
  {
    path: "/users/burst.svg",
    website: "https://burstcreators.com/",
    size: "w-[150px]",
  },
  {
    path: "/users/burst.svg",
    website: "https://burstcreators.com/",
    size: "w-[150px]",
  },
  {
    path: "/users/burst.svg",
    website: "https://burstcreators.com/",
    size: "w-[150px]",
  },
  {
    path: "/users/burst.svg",
    website: "https://burstcreators.com/",
    size: "w-[150px]",
  },
  {
    path: "/users/burst.svg",
    website: "https://burstcreators.com/",
    size: "w-[150px]",
  },
  {
    path: "/users/burst.svg",
    website: "https://burstcreators.com/",
    size: "w-[150px]",
  },
  {
    path: "/users/matematiktutor.svg",
    website: "https://burstcreators.com/",
    size: "w-[150px]",
  },

]

export default function CustomerSlider() {
    return (
        <div>
          <Slider
            width="380px"
            duration={70}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            {imageData.map((v) => (
              <Slider.Slide key={v}>
                <div className="bg-white paragraph w-[360px] select-none border border-gray-600/10 p-8 rounded-3xl shadow-sm">
                  <h2>Villads Leth</h2>
                </div>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
    );
  }