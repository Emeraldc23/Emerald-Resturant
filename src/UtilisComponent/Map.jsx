import "../assets/styles/map.css";

export default function Map() {
  return (
    <section className="mapSection">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.139498634035!2d7.561159550000001!3d6.455928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a4365db77e01%3A0xcb2817146d749f37!2sOkinano%2C%20Enugu!5e0!3m2!1sen!2sng!4v1758113657311!5m2!1sen!2sng"
        width="100%"
        height="400px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
