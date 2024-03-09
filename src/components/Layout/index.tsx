import Navbar from "./Navbar";
import Meta from "./Meta";
import localFont from "next/font/local"
import Footer from "./Footer";

const GazellaTeamFont = localFont({
  src: [
    {
      path: '../fonts/stolzl_bold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../Fonts/stolzl_regular.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../Fonts/stolzl_book.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../Fonts/stolzl_light.otf',
      weight: '100',
      style: 'normal',
    },
  ],
})
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
        <div className={GazellaTeamFont.className}>
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