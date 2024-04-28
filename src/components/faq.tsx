const faqData = [
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
    {question: "How many tools are included?", answer:"SocialKiwi is a social media management tool that allows you to schedule and manage your social media posts from one place."},
]

export default function FAQ() {
    return (
        <section className="py-24 bg-gray-50 text-center">
            <h1 className="font-bold mx-auto text-3xl mb-16">Frequently Asked Questions</h1>
            <div className="w-[95%] mx-auto max-w-6xl grid grid-cols-3 gap-5">
                {faqData.map((v) => <FaqCard Obj={v} key={v.question} />)}
            </div>
        </section>
    )
}

function FaqCard(props:any) {
    return (
        <div className="p-5 border border-gray-600/10 text-gray-800 rounded-xl shadow-sm text-left flex flex-col gap-3">
            <h2 className="font-semibold">{props.Obj.question}</h2>
            <p className="text-gray-600 font-medium text-sm">{props.Obj.answer}</p>
        </div>
    )
}