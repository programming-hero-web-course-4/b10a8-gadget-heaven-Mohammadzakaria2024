import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="flex h-full items-center p-16">
          <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
            <div className="max-w-md text-center">
              <h2 className="mb-8 text-9xl font-extrabold text-brand">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn&apos;t find this page.
              </p>
              <p className="mb-8 mt-4 text-gray-400">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Button type="primary" to="/" className="mx-auto w-fit">
                Back to homepage
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
