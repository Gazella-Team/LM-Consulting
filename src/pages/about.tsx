import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import Goals from "@/components/goals";
import Stats from "@/components/stats";

export default function About() {
    return (
        <Layout white={true}>
            <PageIntro hook="💜 By developers, for developers" highlighted="easy and seamless" heading="On a mission to make the road to mvp" paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy." />
        </Layout>
    )
}