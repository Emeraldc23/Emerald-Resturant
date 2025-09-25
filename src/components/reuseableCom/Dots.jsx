import "../../assets/styles/reuseables/dots.css";

export default function Dots({ count, activeCount }) {
  return (
    <div className="dotsCreator">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            border: i === activeCount ? "2px #fff solid" : "2px #846D6D solid ",
          }}
          className="dotSpan"
        ></span>
      ))}
    </div>
  );
}
