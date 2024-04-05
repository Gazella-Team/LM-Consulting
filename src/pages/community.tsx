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
      <div className="bg-[#5e17eb]">
        <div className="mx-auto max-w-6xl p-8">
          <h1 className="font-semibold text-white text-2xl">Community</h1>
        </div>
      </div>
      <HallEmbed appId="Z72sP4H41GZp" theme="light" />
    </Layout>
  );
}
