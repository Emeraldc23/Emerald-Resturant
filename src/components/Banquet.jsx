import "../assets/styles/banquet.css";
import images from "../../data/dataImg";
import banquet from "../assets/images/Banquet.png";

export default function BanquetFacility() {
  return (
    <main className="banquet">
      <div className="banquet-image-container">
        <img src={banquet} alt="" className="banquetImg" />
        <h1>Banquet facility</h1>
      </div>
      <div className="banquetDetails">
        <p className="detailText">we have 3 party hall</p>
        <p className="shaneText">
          shane banquet <span className="capacity">- 60 to 125 people</span>
        </p>
        <p className="shaneText">
          shagun
          <span className="capacity"> - New one 100 to 300 people</span>
        </p>
      </div>
      <div className="banquetBtns">
        <button className="banquetBtn">Filter all</button>
        <button className="banquetBtn">shane</button>
        <button className="banquetBtn">shagun</button>
        <button className="banquetBtn">table clothes</button>
        <button className="banquetBtn">napkin available</button>
      </div>
      <div className="banquetImages">
        {images.map((imgs) => (
          <img src={imgs.image} alt="" className="gridImg" onClick={imgs.url} />
        ))}
      </div>
      <div className="imgBtns">
        <button className="banquetBtn">1</button>
        <button className="banquetBtn">2</button>
        <button className="banquetBtn">3</button>
      </div>
    </main>
  );
}
