import NiceModal from "@ebay/nice-modal-react";
import Link from "next/link";
import { useRouter } from "next/router";
import JoinWaitlistModal from "../modals/JoinWaitlistModal";

export default function Navbar({ white }: { white: boolean }) {
  const router = useRouter();
  const path = router.pathname;
  return white ? (
    <nav className="h-[90px] flex items-center bg-transparent">
      <div className="w-[96%] mx-auto flex items-center justify-between text-gray-800">
        <div className="w-[250px] flex items-center justify-start">
          <Link href={"/"}>
            <img className="w-[120px]" src="/logos/logogray.svg"></img>
          </Link>
        </div>
        <div className="flex-1 flex items-center gap-5 justify-center text-sm font-medium">
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/about"}>Our story</Link>
          <Link href={"/"}>Community</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="w-[250px] flex items-center justify-end gap-5 font-medium">
          <Link className="hidden text-sm sm:flex" target="_blank" href={"https://app.toolbird.io/auth/login"}>
            Log in
          </Link>
          <button
            onClick={() => NiceModal.show(JoinWaitlistModal)}
            className="bg-main border-[3px] border-main text-sm text-white px-6 py-2 rounded-full"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="h-[90px] flex items-center bg-main">
      <div className="w-[96%] mx-auto flex items-center justify-between text-white">
        <div className="w-[20%] flex items-center justify-start">
          <Link href={"/"}>
            <img
              className="w-28"
              src={
                path === "/guides"
                  ? "/logos/guideslogogray.svg"
                  : "/logos/logogray.svg"
              }
            ></img>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center gap-7">
          <Link href={"/about"}>Our story</Link>
          <Link href={"/"}>Community</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className="w-[20%] flex items-center justify-end gap-5">
          <Link target="_blank" href={"https://app.toolbird.io/auth/login"}>
            Log in
          </Link>
          <button
            onClick={() => NiceModal.show(JoinWaitlistModal)}
            className="bg-white border-[3px] border-main text-main px-6 py-2 rounded-full"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
