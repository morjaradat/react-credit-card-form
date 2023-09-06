import sim_card from "@assets/sim-card-chip.svg";
import wifi from "@assets/wifi.svg";
import master_card from "@assets/mastercard-logo.svg";
interface CardInputState {
  cardNameInput: boolean;
  cardNumberInput: boolean;
  cardDateInput: boolean;
  cardCvvInput: boolean;
}
interface inputDataTypes {
  name: string;
  cardNumber: string;
  date: string;
  cvv: string;
}

const frontCard = ({
  inputState,
  inputData,
}: {
  inputState: CardInputState;
  inputData: inputDataTypes;
}) => {
  const borderAnimationStyle: React.CSSProperties = {
    border: "5px solid #3498db", // Initial border color
    animation: "borderAnimation 2.5s infinite", // Use the CSS animation
    transformOrigin: "center", // Set the transform origin to the center for scaling
    boxShadow: "0 0 5px rgba(52, 152, 219, 0.5)", // Initial box shadow
  };
  return (
    <>
      <div className="card__face | card__face--front">
        <h2 className="card_data">Debit card</h2>
        <div className="flex_group">
          <img src={sim_card} className="svg_image" alt="sim card" />
          <img src={wifi} className="svg_image" alt="signal" />
        </div>
        <p
          className="card_data"
          style={inputState.cardNumberInput ? borderAnimationStyle : {}}
        >
          {inputData.cardNumber === ""
            ? "4444 xxxx xxxx 3567"
            : inputData.cardNumber}
        </p>
        <div className="card_data | flex_group_start">
          <span className="text_small">
            Valid <br /> Till{" "}
          </span>
          <p
            className="card_data"
            style={inputState.cardDateInput ? borderAnimationStyle : {}}
          >
            {inputData.date === ""
              ? " YY/MM"
              : inputData.date.substring(2, 10).replace("-", "/")}
          </p>
        </div>

        <div className="flex_group">
          <p
            className="card_data"
            id="card-data-name"
            style={inputState.cardNameInput ? borderAnimationStyle : {}}
          >
            {inputData.name === "" ? "MOHAMMAD JARADAT" : inputData.name}{" "}
          </p>
          <img src={master_card} className="svg_image" alt="master_card" />
        </div>
      </div>
    </>
  );
};

export default frontCard;
