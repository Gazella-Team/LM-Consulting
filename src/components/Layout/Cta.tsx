import NiceModal from "@ebay/nice-modal-react";
import { Reveal } from "../Animations/Reveal";
import Link from "next/link";
import JoinWaitlistModal from "../modals/JoinWaitlistModal";

export default function Cta() {
  return (
    <section className="bg-main py-[100px]">
      <div className="w-[90%] mx-auto text-center max-w-[1000px]">
        <Reveal delayTime={0.3}>
          <h1 className="font-bold leading-[100%] tracking-tighter text-white text-[60px] mb-8">
            Ready to boost your development?
          </h1>
        </Reveal>
        <Reveal delayTime={0.3}>
          <p className="font-regular text-[18px] w-[80%] mx-auto text-gray-200 mb-[50px]">
            Wake up to an inbox full of new testimonial alerts. Share them
            everywhere in seconds. Get more visits, convert more, and close more
            deals. Senja makes it easy.
          </p>
        </Reveal>
        <Reveal delayTime={0.3}>
          <button
            onClick={() => NiceModal.show(JoinWaitlistModal)}
            className="bg-white text-main text-center px-[40px] py-[14px] text-[15px] rounded-full font-medium"
          >
            Join Waitlist
          </button>
        </Reveal>
      </div>
    </section>
  );
}
