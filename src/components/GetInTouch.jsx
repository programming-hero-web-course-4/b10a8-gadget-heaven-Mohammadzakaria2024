import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

export default function GetInTouch() {
  return (
    <section>
      <div className="container mx-auto mt-10 max-w-7xl">
        <h1 className="text-center text-4xl font-bold">Get in touch</h1>
        <div className="mt-10 flex flex-wrap justify-between">
          <div className="card w-96 bg-base-100">
            <div className="card-body items-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-brand">
                <HiOutlineMapPin className="text-3xl text-white" />
              </div>
              <p className="text-center">
                401 Broadway, 24th floor, orchard view, london, UK
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100">
            <div className="card-body items-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-brand">
                <HiOutlinePhone className="text-3xl text-white" />
              </div>
              <p className="text-center">
                (+00) 1 23 45 67 89 (+1) 1 23 45 67 89
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100">
            <div className="card-body items-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-brand">
                <HiOutlineEnvelope className="text-3xl text-white" />
              </div>
              <p className="text-center">
                demo@support.com support@spacingtech.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
