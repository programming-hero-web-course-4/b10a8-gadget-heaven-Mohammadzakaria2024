import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import FloatSection from "../components/FloatSection";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gadget Heaven | Home</title>
      </Helmet>

      <Banner />
      <FloatSection>
        <figure className="h-full w-full">
          <img
            src="/assets/banner.jpg"
            alt="banner"
            className="h-full max-h-[580px] w-full rounded-xl object-cover"
          />
        </figure>
      </FloatSection>
      <Products />
    </>
  );
}
