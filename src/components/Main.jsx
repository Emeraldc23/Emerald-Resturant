import "../assets/styles/main.css";
import rightArrow from "../assets/images/right.png";
import leftArrow from "../assets/images/left.png";
import mainImage from "../assets/images/Rectangle 4.png";
import backupImage from "../assets/images/Rectangle 5.png";
import forkPlate from "../assets/images/forkPlate.png";
import logoBg from "../assets/images/logoBg.png";
import ImageBg from "../assets/images/imageBg.png";
import store from "../assets/images/Rectangle 13.png";
import packageImg1 from "../assets/images/Rectangle 17.png";
import packageImg2 from "../assets/images/Rectangle 16.png";
import packageImg3 from "../assets/images/Rectangle 18.png";
import packageContent1 from "../assets/images/Rectangle 20.png";
import packageContent2 from "../assets/images/Rectangle 21.png";
import packageContent3 from "../assets/images/Rectangle 22.png";
import { useState } from "react";
import Map from "../UtilisComponent/Map";

export default function MainPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [mainImage, backupImage];

  const packageImages = [packageImg1, packageImg2, packageImg3];
  const packageContent = [packageContent1, packageContent2, packageContent3];

  function handleClick() {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }
  return (
    <main className="main">
      <div className="images">
        <img
          src={images[currentImage]}
          alt="main Section image"
          className="mainImage"
        />

        <div className="arrows">
          <img
            src={rightArrow}
            alt="main Section image"
            className="right"
            onClick={() => handleClick()}
          />
          <img
            src={leftArrow}
            alt="main Section image"
            className="left"
            onClick={() => handleClick()}
          />
        </div>
      </div>
      <div className="container">
        <div className="authSection">
          <p className="curbText">
            we are now serving authenitic indo-chines food
          </p>
          <div className="pick-Up">
            <button className="btn-pickUp">curbside pickup</button>
          </div>
        </div>
      </div>
      {/* === STORIES === */}
      <div className="stores">
        <div className="storeSection">
          <div className="flexUpperItems">
            <img src={store} alt="store Image" className="storeImg" />
            <div className="storeText">
              <h2 className="storiesTitle">OUR STORIES</h2>
              <hr />
              <p className="stories">
                At Guru Palace Indian Restaurant, we offer distinctive cuisine
                in an informal, friendly setting. Our restaurant enjoys a
                reputation for impeccable service, elegant Asian-style décor,
                and exquisite Indian food. Dining at our restaurant is like
                visiting India without leaving your hometown–an exciting blend
                of authentic Indian food, culture, and atmosphere awaits.
              </p>
              <div className="know">
                <button className="btn-know">Know about us</button>
              </div>
            </div>
          </div>
          <div className="flexLowerItems">
            <div className="fork">
              <img src={forkPlate} alt="" className="imgLogo" />
              <p className="uber">UBER</p>
              <p className="eats">EATS</p>
            </div>
            <div className="imageBg">
              <img src={ImageBg} alt="" className="imgLogo increaseSize" />
            </div>
            <div className="logoBg">
              <img src={logoBg} alt="" className="imgLogo increaseSize" />
              <p className="support">Support</p>
            </div>
          </div>
        </div>
      </div>
      {/* === PACKAGES === */}
      <section className="packageSection">
        <div className="bgPackage">
          {packageImages.map((img) => (
            <img src={img} alt="packageImages" className="packageImages" />
          ))}
          <div className="packageContent">
            <p className="packageText">
              CATTERING FOR ALL OCCASSION -GURU CATERS
            </p>
            <hr className="white-hr" />
            <div className="packages">
              {packageContent.map((image) => (
                <img
                  src={image}
                  alt="package contents"
                  className="contentImg"
                />
              ))}
            </div>
            <div className="pick-up-package">
              <button className="btn-packages">Click here for packages</button>
            </div>
          </div>
        </div>
      </section>
      {/* === OUR MENU === */}
      <section className="ourMenu">
        <div className="containerMenu">
          <h2 className="main-menu-title">our menu</h2>
          <hr className="white-hr" />
          <p className="menuContent">
            Guru Palace is the ideal location for whatever the occasion; a
            casual get together, a special occasion or group dining. We are
            equipped with the very best equipments for outdoors and our massive
            production line enables us to produce food for up to 2000 people.
          </p>

          <div className="know">
            <button className="btn-know ">Click here for packages</button>
          </div>
        </div>
      </section>
      {/* Emerald Resturant Card */}
      <section className="emeraldCard">
        <div className="emerald-card-container">Emerald Resturant</div>
      </section>
      {/* Find us on the map */}
      <section className="mapIntro">
        <h2 className="maptext">Find us on the map</h2>
        <p className="mapaddress">
          13 Igboke Avenue, Emene, Enugu State, Nigeria.
        </p>
      </section>
      <Map />
    </main>
  );
}
