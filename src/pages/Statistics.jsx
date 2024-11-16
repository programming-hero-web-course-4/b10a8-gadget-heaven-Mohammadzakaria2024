import { Helmet } from "react-helmet-async";
import DashboardChart from "../components/DashboardChart";
import Hero from "../components/Hero";

export default function Statistics() {
  return (
    <>
      <Helmet>
        <title>Gadget Heaven | Statistics</title>
      </Helmet>

      <Hero
        title="Statistics"
        description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        className="pb-10"
      />

      <div className="container mx-auto max-w-7xl">
        <DashboardChart />
      </div>
    </>
  );
}
