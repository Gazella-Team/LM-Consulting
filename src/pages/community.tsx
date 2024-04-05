import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import getUseHallAuthToken from "@/queries/usehall/getUseHallAuthToken";
import { HallEmbed, useHallEmbed } from "@usehall/react";
import { useEffect } from "react";

export default function Community() {
  const { login } = useHallEmbed();

  useEffect(() => {
    async function loginToHall() {
      const data = await getUseHallAuthToken();
      login(data.token);
    }
    loginToHall();
  }, [login]);

  return (
    <Layout
      footerProps={{
        withCTA: false,
      }}
    >
      <PageIntro
        hook="🥳 A new way of learning"
        highlighted="ToolBird Guides"
        heading="Introducing"
        paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy."
      />
      <HallEmbed appId="Z72sP4H41GZp" theme="light" />
    </Layout>
  );
}
