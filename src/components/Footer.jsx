export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white py-10">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
          Gadget Heaven
        </h2>
        <p className="mb-8 mt-2 text-sm text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className="mb-5 border" />
        <div className="mx-auto flex max-w-2xl flex-wrap justify-between gap-10 md:gap-20">
          <div>
            <h3 className="text-sm font-bold text-gray-800">Services</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800">Company</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800">Legal</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
