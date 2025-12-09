import "./styles.css";

export default function Button({ link, label, color, img, linkImage }) {
  return (
    <button
      className={`button ${img ? "button--transparent" : ""}`}
      style={{ backgroundColor: img ? "transparent" : color }}
      onClick={() => window.location.href = link}
    >
      {img && (
        <img src={linkImage} alt="icon" className="button-img" />
      )}

      <span className="button-label">{label}</span>
    </button>
  );
}
