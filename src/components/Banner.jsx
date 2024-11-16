import Button from "./Button";

export default function Banner() {
  return (
    <section>
      <div className="rounded-b-xl bg-brand pb-72 pt-5 md:mx-3 lg:mx-10 lg:pt-10">
        <div className="container mx-auto max-w-7xl">
          <div className="hero flex flex-col items-center justify-center gap-2 px-2 sm:px-5 md:gap-5">
            <h1 className="text-center text-2xl font-bold text-base-100 sm:text-3xl md:text-4xl lg:text-6xl">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="mt-5 text-center text-sm text-base-300">
              Explore the latest gadgets that will take your experience to{" "}
              <br />
              the next level. From smart devices to the coolest accessories, we
              have it all!
            </p>
            <Button to="/dashboard">Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
