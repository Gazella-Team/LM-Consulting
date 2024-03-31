import { CheckCircleIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

export default function Home() {
  function handleSubmit() {
    fetch('https://api.toolbird.io/v1/waitlist/pk-9215c4ff672e474a/submit', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
  }

  const [email, setEmail] = useState("")

  return (
    <section className="bg-[url(/bg.svg)] bg-center bg-cover h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl border border-gray-600/10 p-14 w-[94%] mx-auto max-w-[1000px] min-h-[580px] shadow-xl flex flex-col justify-between">
        <div>
          <img className="w-[120px] mb-2" src="/logos/logograytext.svg"></img>
          <h1 className="text-4xl leading-[44px] max-w-[600px] headingText text-gray-800 mb-4">Introducing ToolBird: The ultimate toolbox for <span className="headingText text-main">SaaS developers.</span></h1>
          <p className="text-gray-600 max-w-[700px] mb-8">
            Tired of having countless tool-subscriptions spread amongst countless providers? Say hello to ToolBird.
            We offer a platform where SaaS developers can manage tools.
          </p>
          <div className="flex gap-10 font-medium text-[15px]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>All tools in one place</p>
            </div>
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>Collaborate with your team</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>All tools in one place</p>
            </div>
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>Collaborate with your team</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>All tools in one place</p>
            </div>
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>Collaborate with your team</p>
            </div>
          </div>
        </div>
        </div>
        
        <div className="flex gap-4">
          <input type="e-mail" placeholder="lasse@toolbird.io" className="bg-slate-50 border placeholder:pl-3 placeholder:text-sm border-gray-600/10 rounded-md flex-1" value={email} onChange={(value) => setEmail(value.currentTarget.value)}></input>
          <button className="bg-main text-white px-4 py-2 rounded-md text-sm font-medium" onClick={() => handleSubmit()}>
            Join waitlist
          </button>
        </div>
        <p className="text-center text-sm mt-0 text-gray-400">Free usage for the first month. Limited spots.</p>
      </div>
    </section>
  )
}