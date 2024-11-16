import Button from "./Button";

export default function ContactForm() {
  return (
    <section className="mb-20 mt-28">
      <div className="container mx-auto mt-10 max-w-7xl">
        <h1 className="text-center text-4xl font-bold">Drop us message</h1>

        <form className="mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input type="text" placeholder="Enter subject" className="input" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Enter message"
              className="textarea h-32"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <Button type="primary">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
