import "./styleSwitcher.css";
const StyleSwitcher = ({
  theme,
  toggleStyle,
}: {
  theme: boolean;
  toggleStyle: () => void;
}) => {
  return (
    <div className="style-switcher">
      <input
        type="checkbox"
        checked={!theme}
        onChange={toggleStyle}
        id="styleSwitch"
      />
      <label htmlFor="styleSwitch">
        <span
          style={{
            position: "relative",
            display: "block",
            width: "max-content",
            left: "2.5rem",
            top: "-5px",
            color: theme ? "black" : "white",
          }}
        >
          Toggle Style
        </span>
      </label>
    </div>
  );
};

export default StyleSwitcher;
