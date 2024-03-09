import Navbar from "./Navbar";
import Meta from "./Meta";
import localFont from "next/font/local"
import Footer from "./Footer";

export default function Layout({
  className,
  children,
  mode,
}: {
  className?: string;
  children: React.ReactNode;
  mode: string,
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
    <Meta />
      <div>
        <div>
            <Navbar white={mode === "white"} />
            <div>
                {children}
            </div>
            <Footer />
        </div>
      </div>
    </div>
  );
}