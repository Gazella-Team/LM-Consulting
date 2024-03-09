import Layout from "@/components/Layout";
import Landing from "@/components/landing";
import Prices from "@/components/prices";
import Meta from "@/components/Layout/Meta";

export default function Pricing() {
  return (
    <Layout mode="">
      <Meta title="Pricing | ToolBird" />
      <Prices />
    </Layout>
  );
}
