import localFont from "next/font/local"

const GazellaTeamFont = localFont({
  src: [
    {
      path: '../fonts/gelix-semibold.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
})

export default function SecondPage() {
    return (
        <section className={GazellaTeamFont.style}>
            <p className="text-8xl text-center py-40 tracking-tight w-[70%] mx-auto text-gray-800">The ultimate toolbox for <span className="text-main">SaaS developers</span></p>
        </section>
    )
}