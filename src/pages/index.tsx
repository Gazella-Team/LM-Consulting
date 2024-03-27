import { CheckCircleIcon } from "@heroicons/react/20/solid"

export default function Home() {
  function handleSubmit(data:any) {
    fetch('https://api.toolbird.io/v1/waitlist/pk-9215c4ff672e474a/submit', {
        method: 'POST',
        body: JSON.stringify({
            email: data.email,
            name: data.name, // (Optional) Name field
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
  return (
    <section className="bg-[url(/bg.svg)] bg-center bg-cover h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl border border-gray-600/10 p-14 w-[94%] mx-auto max-w-[500px] min-h-[600px] shadow-xl flex flex-col justify-between">
        <div>
          <h1 className="text-2xl leading-8 headingText text-gray-800 mb-4">Introducing ToolBird: The all-in-one toolbox for <span className="headingText text-main">SaaS developers.</span></h1>
          <p className="text-gray-600">
            Tired of having countless tool-subscriptions spread amongst countless providers? Say hello to ToolBird.
            We offer a platform where SaaS developers can manage tools.
          </p>
        </div>
        <div className="flex flex-col gap-4 font-medium text-[15px]">
          <div className="flex items-center gap-2 text-main">
            <CheckCircleIcon width={22} />
            <p>All tools in one place</p>
          </div>
          <div className="flex items-center gap-2 text-main">
            <CheckCircleIcon width={22} />
            <p>Collaborate with your team</p>
          </div>
          <div className="flex items-center gap-2 text-main">
            <CheckCircleIcon width={22} />
            <p>Easy integration with your code</p>
          </div>
          <div className="flex items-center gap-2 text-main">
            <CheckCircleIcon width={22} />
            <p>Flexible fee-free pricing</p>
          </div>
        </div>
        <div>
          <form className="flex justify-between gap-2" action="https://api.toolbird.io/v1/waitlist/sk-f195eaa8253b4f81/submit" method="POST">
            <input className="bg-slate-50 flex-1 pl-5 rounded-xl border border-gray-600/10 placeholder:text-sm" type="email" name="email" placeholder="Enter your email" />
            <button className="bg-main text-white px-5 py-2 rounded-xl text-sm">Subscribe</button>
          </form>
          <p className="text-center text-sm mt-4 text-gray-400">Free usage for the first month. Limited spots.</p>
        </div>
      </div>
    </section>
  )
}