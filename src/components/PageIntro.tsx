import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";

interface PageIntroProps {
  heading: string;
  paragraph: string;
  highlighted: string;
  hook: string;
}

export default function PageIntro(props: PageIntroProps) {
  return (
    <section className="py-[100px] pb-[50px]">
      <div className="w-[96%] mx-auto max-w-[1000px] flex flex-col gap-6 text-center">
        {props.hook && (
          <RevealLight delayTime={0.4}>
            <div>
              <div className="inline-block text-sm mx-auto bg-slate-50 py-2 text-gray-600 px-6 rounded-full border border-gray-600/10">
                <p>{props.hook}</p>
              </div>
            </div>
          </RevealLight>
        )}
        <Reveal delayTime={0.1}>
          <h1 className="text-[50px] md:text-[60px] xl:text-[70px] leading-[100%] font-semibold text-gray-800 heading">
            {props.heading}{" "}
            {props.highlighted && (
              <span className="text-main heading">{props.highlighted}</span>
            )}
          </h1>
        </Reveal>
        <Reveal delayTime={0.2}>
          <p className="text-base md:text-lg xl:text-xl font-light max-w-[870px] mx-auto text-gray-600">
            {props.paragraph}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
