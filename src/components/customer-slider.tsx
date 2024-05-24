import Link from "next/link";
import Slider from "react-infinite-logo-slider";

const imageData = [
  {
    path: "/users/burst.png",
    website: "https://burstcreators.com/",
    size: "w-[70px]",
  },
  {
    path: "/users/burst.png",
    website: "https://burstcreators.com/",
    size: "w-[70px]",
  },
  {
    path: "/users/burst.png",
    website: "https://burstcreators.com/",
    size: "w-[70px]",
  },
  {
    path: "/users/burst.png",
    website: "https://burstcreators.com/",
    size: "w-[70px]",
  },
  {
    path: "/users/burst.png",
    website: "https://burstcreators.com/",
    size: "w-[70px]",
  },
  {
    path: "/users/burst.png",
    website: "https://burstcreators.com/",
    size: "w-[70px]",
  },
  {
    path: "/users/matematiktutor.png",
    website: "https://burstcreators.com/",
    size: "w-[150px]",
  },

]

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
                <Link href={v.website}>
                  <img className={v.size} src={v.path}></img>
                </Link>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }