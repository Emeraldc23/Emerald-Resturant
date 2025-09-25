import "../assets/styles/gallery.css";
import galleryImage from "../assets/images/galleryImages/galleryBg.png";
import galleryImg from "../../data/galleryImage";
import Dots from "./reuseableCom/Dots";

export default function Gallery() {
  return (
    <main className="gallery">
      <div className="gallery-image-container">
        <img src={galleryImage} alt="" className="galleryImg" />
        <h1>Gallery</h1>
      </div>
      <section className="gallerySection">
        {galleryImg.map((gImg, i) => (
          <img key={i} src={gImg.g_image} alt="" className="gImages" />
        ))}
      </section>
      <div className="galleryDots">
        <Dots count={5} activeCount={0} />
      </div>
      <section className="vendorSection">
        <div className="vendorPriya">
          <p>
            We held our daughter's first birthday at the Guru Palace banquet
            hall. We were more than happy with this experience. The staff were
            friendly, helpful, and efficient. The owner came to check on us
            several times during the party to ensure all our needs were met. All
            the guests lovthe food. We would highly recommend this restaurant
            for your future events.
          </p>
          <h2>Priya</h2>
          <div className="venderDots">
            <div className="small"></div>
            <div className="medium"></div>
            <div className="medium"></div>
            <div className="medium"></div>
            <div className="medium"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
