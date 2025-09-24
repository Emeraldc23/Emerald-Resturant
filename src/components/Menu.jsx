import "../assets/styles/menu.css";
import menuImage1 from "../assets/images/menuImages/Rectangle 40.png";
import menuImage2 from "../assets/images/menuImages/Rectangle 42.png";
import menuImage3 from "../assets/images/menuImages/Rectangle 43.png";
import menuImage4 from "../assets/images/menuImages/Rectangle 44.png";
import vector from "../assets/images/menuImages/vector.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

import ButtonComp from "./reuseableCom/Button";
import { useState } from "react";

export default function MenuPage() {
  const [btnContent, setBtnContent] = useState("Click here to download menu");
  return (
    <main className="menu">
      <div className="menu-image-container">
        <img src={menuImage1} alt="" className="menuImg" />
        <h1>Menu</h1>
      </div>
      <section className="menuImgSections">
        <div className="menubtns">
          <AnchorLink href="#menu1">
            <ButtonComp btnContent={btnContent} />
          </AnchorLink>
        </div>
        <div className="menu1" id="menu1">
          <img src={menuImage2} alt="" className="menuImg2" />
        </div>
        <div className="menubtns">
          <AnchorLink href="#menu2">
            <ButtonComp btnContent={btnContent} />
          </AnchorLink>
        </div>
        <div className="menu1" id="menu2">
          <img src={menuImage3} alt="" className="menuImg2" />
        </div>
        <div className="menubtns">
          <AnchorLink href="#menu3">
            <ButtonComp btnContent={btnContent} />
          </AnchorLink>
        </div>
        <div className="menu1" id="menu3">
          <img src={menuImage4} alt="" className="menuImg2" />
        </div>
      </section>
      <section className="menuSection2">
        <div className="food-allergy">
          <h2>Food allergy notice:</h2>
          <p>
            Food prepared in this establishment may contain wheat,dairy, and
            cashew nuts. Please tell your server if you have allergy because we
            are not responsible for any errors and cross contamination
          </p>
          <img src={vector} alt="" />
        </div>
      </section>
      <div className="menuDots">
        <div className="lightDot"></div>
        <div className="darkDot"></div>
      </div>
      <section className="menuSection3">
        <div className="priya">
          <p>
            We held our daughter's first birthday at the Guru Palace banquet
            hall. We were more than happy with this experience. The staff were
            friendly, helpful, and efficient. The owner came to check on us
            several times during the party to ensure all our needs were met. All
            the guests lovthe food. We would highly recommend this restaurant
            for your future events.
          </p>
          <h2>Priya</h2>
        </div>
      </section>
      <div className="menuDots">
        <div className="lightDot"></div>
        <div className="darkDot"></div>
      </div>
    </main>
  );
}
