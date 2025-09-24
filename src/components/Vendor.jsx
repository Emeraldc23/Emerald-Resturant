import "../assets/styles/vendor.css";
import vendorHeroImg from "../assets/images/vendorImages/vendorHeroImg.png";
import vendorImage from "../assets/images/vendorImages/vendorImage.png";

export default function Vendor() {
  return (
    <main className="vendor">
      <div className="vendor-image-container">
        <img src={vendorHeroImg} alt="" className="vendorImg" />
        <h1>recommended vendor</h1>
      </div>
      <div className="vendorRating">
        <h2 className="vendor-header-text">
          Props that get our five star rating:
        </h2>
        <p className="vendor-rating-para">
          Here at the GuruPalace, we have had the pleasure of working with a
          number of qualified service professionals in the catering,
          entertainment and other related industries. For your convenience and
          with utmost confidence we now offer a list of of resources and contact
          information for the best possible event experience.
        </p>
      </div>
      <div className="vendorDecor">
        <div className="decor-manager">
          <h3 className="vendor-event-manager">decor event manager</h3>
          <ul className="vendor-list">
            <li className="vendor-list-items">BALOON ARCH DECORTER</li>
            <li className="vendor-list-items">PHOTOGRAPHY</li>
            <li className="vendor-list-items">LIVE SINGING</li>
            <li className="vendor-list-items">PROFESSIONALL DJ</li>
          </ul>
        </div>
        <div className="vendor-decor-address">
          <p className="vendor-adds">WDM Décor</p>
          <p className="vendor-adds">3 Kellog Court, Unit 16</p>
          <p className="vendor-adds">Edison, NJ 08817</p>
          <p className="vendor-adds">P : 732.822.1419</p>
          <p className="vendor-adds">732.243.9494</p>
          <p className="vendor-adds">www.wdmdecor.com</p>
        </div>
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
