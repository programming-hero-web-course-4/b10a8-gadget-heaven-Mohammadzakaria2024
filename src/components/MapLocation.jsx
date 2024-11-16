export default function MapLocation() {
  return (
    <section className="mt-28">
      <div className="container mx-auto max-w-7xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.434235228051!2d90.39752427511921!3d23.874215978586122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43bc7e47a81%3A0x2105422b889a7d56!2sNorth%20Tower%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1730747704583!5m2!1sen!2sbd"
          className="h-[500px] w-full rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
