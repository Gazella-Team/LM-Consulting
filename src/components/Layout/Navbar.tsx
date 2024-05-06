import NiceModal from "@ebay/nice-modal-react";
import { useRouter } from "next/router";
import JoinWaitlistModal from "../modals/JoinWaitlistModal";
import Flyout from "./Flyout";
import { Link, Element } from "react-scroll";
import { useState } from "react";

export default function Navbar({ white }: { white: boolean }) {
  const [menuClicked, setMenuClicked] = useState(false)
  const router = useRouter();
  const path = router.pathname;
  return (
     <nav className="h-[90px] flex items-center bg-transparent">
      <div className="w-[96%] mx-auto flex items-center justify-between text-gray-800">
        <div className="w-[250px] flex items-center justify-start">
          <Link href={"/"}>
            <img className="w-[110px]" src="/logos/logo.svg"></img>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center gap-8 font-semibold text-sm">
          {/** <Flyout triggerName="Products" heading="Every tool needed to build products" links={[{name:"Web Analytics", description:"One system for all analytics", href:"path"}, {name:"Web Analytics", description:"One system for all analytics", href:"path"}, {name:"Web Analytics", description:"One system for all analytics", href:"path"}, {name:"Web Analytics", description:"One system for all analytics", href:"path"}]} />*/}
          <Link smooth={true} to="products" href={"/"}>Products</Link>
          <Link smooth={true} to="pricing" href={"/"}>Pricing</Link>
        </div>
        <div className="w-[250px] flex items-center justify-end gap-5 font-medium text-gray-800">
          <Link className="hidden font-semibold text-sm sm:flex" target="_blank" href={"https://app.toolbird.io/auth/login"}>
            Log in
          </Link>
          <button
            onClick={() => NiceModal.show(JoinWaitlistModal)}
            className="bg-main border-[3px] border-main text-sm font-semibold text-white px-6 py-2 rounded-full"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </nav>
  )
}
