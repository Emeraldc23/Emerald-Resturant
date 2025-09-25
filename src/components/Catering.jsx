import "../assets/styles/catering.css";
import CateringImg from "../assets/images/CateringImage.png";
import cateringPackages from "../../data/cateringSection";

export default function Catering() {
  return (
    <main className="catering">
      <div className="catering-image-container">
        <img src={CateringImg} alt="" className="cateringImg" />
        <h1>Catering</h1>
      </div>
      <section className="catering-text-section">
        <p className="catering-text-para">
          We specializes in all types of catering. Ranging from the basic food
          pick up for at least 30 people to 100% custom catering. We are
          equipped with the very best equipments for outdoors and our massive
          production line enables us to produce food for up to 2000 people.
        </p>
        <p className="para2">
          Our recipes are made from scratch using the freshest of local
          ingredients, organic when ever possible. Meals are simple, delicious
          and nutritious. We always find the best ingredients and make sure
          everyone’s food requirements are covered in our menu selections.
        </p>
        <p className="para3">
          We have maintained the flexibility and level of personal service,
          which it prides itself on. We have entertained thousands of guests
          through evocative aromas and flavours of personalised hand
          manufactured cuisine all over. We present an extensive and innovative
          menu. that offers a truly unsurpassed range of authentic and
          innovative Indian vegetarian dishes, drawing from the cuisine’s of
          various regions of India. If you require a dish that is not listed on
          our menu, please do enquire and we will be happy to accommodate your
          requirements. We cater for clients with specific dietary requirements
          and can adapt our recipes to your individual tastes and preferences.
        </p>
      </section>
      <section className="cateringPackages">
        <p className="catering-package-text">
          Note: All catering package express,silver, gold and platinum for New
          Year eve 2022 minimum. 50 people.
        </p>
        <div className="cateringPricing">
          {cateringPackages.map((cardInfo) => (
            <div className="catering-card-container">
              <div className="card-header">{cardInfo.header}</div>
              <ul className="card-list">
                {cardInfo.content.map((listItem) => (
                  <li>{listItem}</li>
                ))}
              </ul>
              <div className="card-btn">
                <button className="card-price">{cardInfo.btnPrice}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="catering-wedding-packages">
        <div className="wedding-heading-text">
          <h3>Wedding packages</h3>
          <hr className="wedding-hr" />
          <p className="wedding-pack-info">
            All items should be selected from out banquet menu
          </p>
        </div>
        <div className="wedding-details"></div>
        <div className="weddingDecor">
          <div className="wedding-manager">
            <h3 className="wedding-header-text">standard wedding</h3>
            <hr className="wedding-hr" />
            <ul className="wedding-package-list">
              <li>Delux wedding</li>
              <li>Gold packages</li>
              <li>Optional Items</li>
            </ul>
          </div>
          <div className="wedding-decor-address">
            <p className="wedding-adds">WDM Décor</p>
            <p className="wedding-adds">3 Kellog Court, Unit 16</p>
            <p className="wedding-adds">Edison, NJ 08817</p>
            <p className="wedding-adds">P : 732.822.1419</p>
            <p className="wedding-adds">732.243.9494</p>
            <p className="wedding-adds">www.wdmdecor.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
