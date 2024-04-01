import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    await fetch(
      "https://api.toolbird.io/v1/waitlist/pk-9215c4ff672e474a/submit",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        setEmail("");
        toast.success("You have been added to the waitlist!");
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again later.");
      });
  }

  const [email, setEmail] = useState("");

  return (
    <section className="bg-[url(/bg.svg)] bg-center bg-cover h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl border border-gray-600/10 p-4 sm:p-14 w-[94%] mx-auto max-w-[1000px] min-h-[580px] shadow-xl flex flex-col justify-between">
        <div className="flex flex-col">
          <img
            className="w-[120px] h-auto mb-4"
            src="/logos/logograytext.svg"
            alt="Toolbird Logo"
          />
          <h1 className="text-2xl leading-[30px] md:text-4xl md:leading-[44px] max-w-[600px] headingText text-gray-800 mb-4">
            Introducing ToolBird: The ultimate toolbox for{" "}
            <span className="headingText text-main">SaaS developers.</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-[700px] mb-8">
            Tired of having countless tool-subscriptions spread amongst
            countless providers? Say hello to ToolBird. We offer a platform
            where SaaS developers can manage all their tools in one place.
          </p>
          <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-4 font-medium text-sm">
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>Web Analytics</p>
            </div>
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>Event Tracking</p>
            </div>
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>User Feedback</p>
            </div>
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>Monitoring</p>
            </div>
            <div className="flex items-center gap-2 text-main">
              <CheckCircleIcon width={22} />
              <p>Feature Flags</p>
            </div>
          </div>
          <form
            className="mx-auto w-full flex gap-2 mt-16 max-w-md justify-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              placeholder="lasse@toolbird.io"
              type="email"
              className="bg-slate-50 text-sm pl-2 text-gray-800 border border-gray-600/10 rounded-md flex-1 placeholder:text-sm active:outline-main focus:outline-main"
              value={email}
              onChange={(value) => setEmail(value.currentTarget.value)}
            />
            <button
              type="submit"
              className="bg-main hover:bg-main/90 text-white px-4 py-2 text-sm font-medium rounded-md active:scale-[0.99] active:bg-main/90 focus:bg-main/90 focus:outline-none active:outline-none"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
