import { Reveal } from "../Animations/Reveal"

type CompareHeroProps = {
    iconPath: string,
    company: string,
    paragraph: string,
}

export default function CompareHero(props:CompareHeroProps) {
    return (
        <section className="py-[50px] pt-[60px] relative">
                <div className='flex items-center justify-center'>
                    <div className="absolute top-[100px] h-[500px] w-[700px] overflow-hidden -z-1" style={{background: "radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 62%)"}}></div>
                </div>
                <div className="w-[96%] mx-auto max-w-[1000px] flex flex-col text-center">
                    <Reveal delayTime={0}>
                        <p className="font-[Caveat] text-main mb-4 text-3xl">
                            Compare
                        </p>
                    </Reveal>
                    <Reveal delayTime={0}>
                        <h1 className="text-[40px] heading md:text-[50px] xl:text-[55px] leading-[110%] max-w-[600px] mx-auto font-black text-gray-800">
                            Toolbird.io<span> vs </span>{props.company}
                        </h1>
                    </Reveal>
                    {props.paragraph && 
                    <Reveal delayTime={0.1}>
                        <p className="text-base paragraph md:text-lg mt-4 xl:text-lg font-regular max-w-[350px] mx-auto text-gray-600">
                            {props.paragraph}
                        </p>
                    </Reveal>}
                </div>
            </section>
    )
}