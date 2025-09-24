import "../assets/styles/gallery.css";
import galleryImage from "../assets/images/galleryImages/galleryBg.png";

export default function Gallery() {
  return (
    <main className="gallery">
      <div className="gallery-image-container">
        <img src={galleryImage} alt="" className="galleryImg" />
        <h1>Gallery</h1>
      </div>
    </main>
  );
}
