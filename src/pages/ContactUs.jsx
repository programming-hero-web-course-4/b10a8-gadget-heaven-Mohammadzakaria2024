import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";
import MapLocation from "../components/MapLocation";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Gadget Heaven | Contact Us</title>
      </Helmet>

      <GetInTouch />
      <MapLocation />
      <ContactForm />
    </>
  );
}
