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
      <div className="bg-white rounded-xl border border-gray-600/10 p-14 w-[94%] mx-auto max-w-[500px] min-h-[600px] shadow-xl">
        <div>
          <h1 className="text-2xl leading-8 headingText text-gray-800 mb-4">Introducing ToolBird: The all-in-one toolbox for <span className="headingText text-main">SaaS developers.</span></h1>
          <p className="text-gray-600">
            Tired of having countless tool-subscriptions spread amongst countless providers? Say hello to ToolBird.
            We offer a platform where SaaS developers can manage tools.
          </p>
        </div>
        <form action="https://api.toolbird.io/v1/waitlist/sk-f195eaa8253b4f81/submit" method="POST">
          <input type="text" name="name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  )
}