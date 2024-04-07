import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import Goals from "@/components/goals";
import Stats from "@/components/stats";

export default function PublicBuilding() {
    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const month = new Date().getUTCMonth()
    return (
        <Layout white={false}>
            <PageIntro hook="💼 Public building" highlighted={`${months[month]}`} heading="Stats for" paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy." />
            <Stats />
            <Goals />
        </Layout>
    )
}