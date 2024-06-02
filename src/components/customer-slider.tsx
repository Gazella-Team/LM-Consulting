import Link from "next/link";
import Slider from "react-infinite-logo-slider";
import { cn } from "utils/cs";

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
                <section style={{background: "linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)"}} className="my-24 max-w-7xl mx-auto lg:rounded-[100px] backdrop:blur-3xl border-y border-gray-600/10">
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
            </section>
    );
  }